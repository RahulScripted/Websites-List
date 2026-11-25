import type { SeaConditions } from "@/types/kinara";
import { hotel } from "@/components/kinara/content";

// Open-Meteo is free, needs no API key and allows browser requests.
const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";
const MARINE_URL = "https://marine-api.open-meteo.com/v1/marine";

const WMO: Record<number, string> = {
  0: "Clear sky",
  1: "Mostly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light drizzle",
  53: "Drizzle",
  55: "Heavy drizzle",
  61: "Light rain",
  63: "Rain",
  65: "Heavy rain",
  80: "Rain showers",
  81: "Rain showers",
  82: "Violent showers",
  95: "Thunderstorm",
  96: "Thunderstorm, hail",
  99: "Thunderstorm, hail",
};

const COMPASS = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];

export function compass(degrees: number) {
  return COMPASS[Math.round(degrees / 22.5) % 16];
}

/** "2026-11-25T06:51" becomes 6.85. The API already returns local time for the requested timezone. */
function hourOf(iso: string) {
  const [h, m] = iso.slice(11, 16).split(":").map(Number);
  return h + m / 60;
}

function params(values: Record<string, string | number>) {
  const query = new URLSearchParams({ latitude: String(hotel.lat), longitude: String(hotel.lon), timezone: hotel.timezone, forecast_days: "1" });
  for (const [key, value] of Object.entries(values)) query.set(key, String(value));
  return query.toString();
}

async function getJson<T>(url: string, signal?: AbortSignal): Promise<T> {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Weather request failed (${response.status})`);
  return response.json() as Promise<T>;
}

type Forecast = {
  current: {
    time: string;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    weather_code: number;
  };
  daily: { sunrise: string[]; sunset: string[]; uv_index_max: number[] };
};

type Marine = {
  current: { wave_height: number | null; wave_period: number | null; sea_surface_temperature: number | null };
  hourly: { sea_level_height_msl: Array<number | null> };
};

export async function fetchSeaConditions(signal?: AbortSignal): Promise<SeaConditions> {
  const [forecast, marine] = await Promise.allSettled([
    getJson<Forecast>(
      `${FORECAST_URL}?${params({
        current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,wind_direction_10m,weather_code",
        daily: "sunrise,sunset,uv_index_max",
      })}`,
      signal,
    ),
    getJson<Marine>(
      `${MARINE_URL}?${params({
        current: "wave_height,wave_period,sea_surface_temperature",
        hourly: "sea_level_height_msl",
      })}`,
      signal,
    ),
  ]);

  // The forecast is required. Marine data can fail alone and the page still shows air conditions.
  if (forecast.status === "rejected") throw forecast.reason;
  const f = forecast.value;
  const m = marine.status === "fulfilled" ? marine.value : null;

  const date = new Date(`${f.current.time.slice(0, 10)}T12:00:00`);
  const tide = (m?.hourly.sea_level_height_msl ?? []).map((value) => (typeof value === "number" ? value : NaN));

  return {
    nowHour: hourOf(f.current.time),
    dateLabel: date.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" }),
    airTemp: f.current.temperature_2m,
    feelsLike: f.current.apparent_temperature,
    humidity: f.current.relative_humidity_2m,
    uvIndexMax: f.daily.uv_index_max[0],
    condition: WMO[f.current.weather_code] ?? "Fair",
    windSpeed: f.current.wind_speed_10m,
    windFrom: f.current.wind_direction_10m,
    waterTemp: m?.current.sea_surface_temperature ?? null,
    waveHeight: m?.current.wave_height ?? null,
    wavePeriod: m?.current.wave_period ?? null,
    sunrise: f.daily.sunrise[0].slice(11, 16),
    sunset: f.daily.sunset[0].slice(11, 16),
    tideHourly: tide.length >= 24 && tide.every((v) => !Number.isNaN(v)) ? tide : [],
    updatedAt: Date.now(),
  };
}
