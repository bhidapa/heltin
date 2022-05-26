/**
 *
 * date utilities
 *
 */
import format from 'date-fns/esm/format';

/** Formats the datetime value for type="datetime-local" inputs. */
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
