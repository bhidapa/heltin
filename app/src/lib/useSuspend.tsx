/**
 *
 * useSuspend
 *
 */
import { useCallback, useState } from 'react';

import { usePanic } from './usePanic';

interface Sink {
  reject(error: Error): void;
  resolve(): void;
  complete(error?: Error): void;
}

export function useSuspend() {
  const [panic] = usePanic();
  const [promise, setPromise] = useState<Promise<void> | null>(null);
  if (promise) {
    throw promise;
  }
  return useCallback((promise: (() => Promise<void>) | ((sink: Sink) => void)) => {
    setPromise(
      new Promise<void>((resolve, reject) => {
        const maybePromise = promise({
          reject,
          resolve,
          complete: (err) => (err ? reject(err) : resolve()),
        });
        if (maybePromise instanceof Promise) {
          maybePromise.catch(reject).then(resolve);
        }
      })
        .catch(panic)
        .then(() => setPromise(null)),
    );
  }, []);
}
