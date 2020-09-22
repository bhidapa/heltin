/**
 *
 * useOnValueChange
 *
 */

import { useEffect, DependencyList, useRef } from 'react';
import { useDeepMemoOnValue } from '@domonda/react-plumb';

/** When the value changes, the callback will be triggered with the latest value. */
export function useOnValueChange<T>(
  value: T,
  callback: (value: T) => void,
  deps: DependencyList = [],
) {
  const memoValue = useDeepMemoOnValue(value);
  const stateRef = useRef({ callback, isCalledOnce: false });
  if (stateRef.current.callback !== callback) {
    stateRef.current.callback = callback;
  }
  useEffect(() => {
    if (stateRef.current.isCalledOnce) {
      stateRef.current.callback(memoValue);
    } else {
      stateRef.current.isCalledOnce = true;
    }
  }, [memoValue, ...deps]);
}
