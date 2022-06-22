/**
 *
 * utils
 *
 */
import { KeyboardEventHandler } from 'react';

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

export function onCtrlEnter(callback: () => void): KeyboardEventHandler {
  return (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
      callback();
    }
  };
}
