export type TideExtreme = { t: number; h: number; kind: "high" | "low" };

/** Catmull-Rom interpolation through hourly samples, so the curve is smooth between readings. */
export function heightAt(samples: number[], t: number) {
  const last = samples.length - 1;
  const x = Math.min(last, Math.max(0, t));
  const i = Math.min(last - 1, Math.floor(x));
  const k = x - i;
  const p0 = samples[Math.max(0, i - 1)];
  const p1 = samples[i];
  const p2 = samples[i + 1];
  const p3 = samples[Math.min(last, i + 2)];
  return 0.5 * (2 * p1 + (-p0 + p2) * k + (2 * p0 - 5 * p1 + 4 * p2 - p3) * k * k + (-p0 + 3 * p1 - 3 * p2 + p3) * k * k * k);
}

/** High and low water found as local peaks of the hourly series, refined with a parabola for minute precision. */
export function findExtremes(samples: number[]): TideExtreme[] {
  const out: TideExtreme[] = [];
  for (let i = 1; i < samples.length - 1; i++) {
    const a = samples[i - 1];
    const b = samples[i];
    const c = samples[i + 1];
    const isHigh = b > a && b >= c;
    const isLow = b < a && b <= c;
    if (!isHigh && !isLow) continue;
    const denom = a - 2 * b + c;
    const shift = denom === 0 ? 0 : (0.5 * (a - c)) / denom;
    out.push({ t: i + shift, h: b - 0.25 * (a - c) * shift, kind: isHigh ? "high" : "low" });
  }
  return out;
}
