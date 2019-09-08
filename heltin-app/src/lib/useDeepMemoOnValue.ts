/**
 *
 * useDeepMemoOnValue
 *
 */

import { useRef } from 'react';
import { deepEqual } from 'fast-equals';

// Memoizes the passed value by performing a deep compare.
export function useDeepMemoOnValue<T>(value: T): T {
  const ref = useRef<T>(value);
  if (!deepEqual(ref.current, value)) {
    ref.current = value;
  }
  return ref.current;
}
