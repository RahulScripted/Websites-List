import { useCallback, useEffect, useState } from "react";
import type { SeaConditions } from "@/types/kinara";
import { fetchSeaConditions } from "@/components/kinara/lib/weather";

const REFRESH_MS = 15 * 60 * 1000;

type State = { status: "loading" | "ready" | "error"; data: SeaConditions | null };

// One shared request for every component on the page, refreshed every 15 minutes.
let cache: SeaConditions | null = null;
let inflight: Promise<SeaConditions> | null = null;

function load(force = false) {
  if (!force && cache && Date.now() - cache.updatedAt < REFRESH_MS) return Promise.resolve(cache);
  inflight ??= fetchSeaConditions()
    .then((data) => (cache = data))
    .finally(() => (inflight = null));
  return inflight;
}

export function useSeaConditions() {
  const [state, setState] = useState<State>({ status: cache ? "ready" : "loading", data: cache });

  const refresh = useCallback((force = false) => {
    let live = true;
    load(force).then(
      (data) => live && setState({ status: "ready", data }),
      () => live && setState((previous) => ({ status: previous.data ? "ready" : "error", data: previous.data })),
    );
    return () => {
      live = false;
    };
  }, []);

  useEffect(() => {
    const stop = refresh();
    const timer = window.setInterval(() => refresh(true), REFRESH_MS);
    return () => {
      stop();
      window.clearInterval(timer);
    };
  }, [refresh]);

  const retry = useCallback(() => {
    setState((previous) => ({ ...previous, status: previous.data ? previous.status : "loading" }));
    refresh(true);
  }, [refresh]);

  return { ...state, retry };
}
