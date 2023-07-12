/**
 *
 * date utilities
 *
 */
import format from 'date-fns/esm/format';

/** Formats the datetime value for type="datetime-local" inputs. */
export function formatDatetimeLocal(value: string | number | Date): string;
export function formatDatetimeLocal(value: null | undefined): null;
export function formatDatetimeLocal(
  value: string | number | Date | null | undefined,
): string | null;
export function formatDatetimeLocal(
  value: string | number | Date | null | undefined,
): string | null {
  if (!value) return null;
  return format(value instanceof Date ? value : new Date(value), "yyyy-LL-dd'T'HH:mm");
}

/**
 * Parses the value from type="datetime-local" inputs.
 *
 * The value does not contain any timezone data, so we first parse
 * it as a regular Date and then format the result as an ISO string.
 */
export function parseDatetimeLocal(value: string): string {
  return new Date(value).toISOString();
}

/** Normalizes the date for the backend or the database and formats it as `YYYY-MM-DD`. */
export function formatDate(value: string | number | Date): string;
export function formatDate(value: null | undefined): null;
export function formatDate(value: string | number | Date | null | undefined): string | null;
export function formatDate(value: string | number | Date | null | undefined): string | null {
  if (!value) return null;
  const date =
    typeof value === 'string'
      ? parseDate(value)
      : typeof value === 'number'
      ? new Date(value)
      : value;
  const month = date.getMonth() + 1; // months start at 0 (0 is January)
  const day = date.getDate();
  return `${date.getFullYear()}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
}

/**
 * Parses the date completely ignoring the time part to avoid timezone corrections.
 *
 * Supported formats start with `YYYY-MM-DD`.
 */
export function parseDate(value: string): Date {
  const parts = value.split('T')[0].split('-');
  if (parts.length !== 3) {
    throw new Error(`Date should have 3 parts, but "${value}" has ${parts.length}`);
  }
  const year = parseInt(parts[0]);
  const month = parseInt(parts[1]);
  const day = parseInt(parts[2]);
  return new Date(year, month - 1, day);
}
