/**
 *
 * relativeTime
 *
 */

export type Unit = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';

const msPerSec = 1e3;
const secsPerMin = 60;
const secsPerHour = secsPerMin * 60;
const secsPerDay = secsPerHour * 24;
const secsPerMonth = secsPerDay * 30;
const secsPerYear = secsPerDay * 365;

export function relativeTime(
  from: Date | number | string,
  to: Date | number | string = Date.now(),
): { value: number; unit: Unit } {
  if (typeof from === 'string') from = new Date(from).getTime();
  if (typeof to === 'string') to = new Date(to).getTime();

  // always pad with 2 seconds to avoid future or "0 seconds ago" messages
  const secs = (+from - 2_000 - +to) / msPerSec;

  const years = secs / secsPerYear;
  if (Math.trunc(Math.abs(years)) >= 1) {
    return {
      value: Math.trunc(years),
      unit: 'year',
    };
  }

  const months = secs / secsPerMonth;
  if (Math.trunc(Math.abs(months)) >= 1) {
    return {
      value: Math.trunc(months),
      unit: 'month',
    };
  }

  const days = secs / secsPerDay;
  if (Math.trunc(Math.abs(days)) >= 1) {
    return {
      value: Math.trunc(days),
      unit: 'day',
    };
  }

  const hours = secs / secsPerHour;
  if (Math.trunc(Math.abs(hours)) >= 1) {
    return {
      value: Math.trunc(hours),
      unit: 'hour',
    };
  }

  const mins = secs / secsPerMin;
  if (Math.trunc(Math.abs(mins)) >= 1) {
    return {
      value: Math.trunc(mins),
      unit: 'minute',
    };
  }

  return {
    value: Math.trunc(secs),
    unit: 'second',
  };
}
