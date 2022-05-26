/**
 *
 * utils
 *
 */

export function debounce<A extends any[]>(
  func: (...args: A) => any,
  timeout: number,
): (...args: A) => void {
  let timer: any;
  return (...args: A) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
}
