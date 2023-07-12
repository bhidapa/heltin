/**
 *
 * usePanic
 *
 * Throws the error in the React DOM. Useful when you have nested uncaught callbacks
 * but you want to throw the error to be catched by the first error boundary.
 *
 */
import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const PanicContext = createContext<(error: Error) => void>(() => {
  /**/
});

/**
 * In cases where the usePanic hook gets unmounted before reporting an error
 * this `Panicer` comes useful. Putting it somewhere in the root, will throw
 * from there if the usePanic hook is unmounted but an error needs reporting.
 */
export const Panicer: React.FC<{ children: React.ReactElement }> = (props) => {
  const { children } = props;
  const [err, setErr] = useState<Error | null>(null);
  if (err) {
    throw err;
  }

  const setError = useCallback((error: Error) => setErr(error), []);
  return <PanicContext.Provider value={setError}>{children}</PanicContext.Provider>;
};

export function usePanic(): [(err: Error) => void, (func: () => void | Promise<void>) => void] {
  const mountedRef = useRef(true);
  useEffect(
    () => () => {
      mountedRef.current = false;
    },
    [],
  );

  const [err, setErr] = useState<Error | null>(null);
  if (err) {
    throw err;
  }

  const setContextError = useContext(PanicContext);
  const setError = useCallback((error: Error) => {
    if (mountedRef.current) {
      // inline error if component is mounted
      setErr(error);
    } else {
      // send error to panicer context when unmounted
      setContextError(error);
    }
  }, []);

  return [
    setError,
    useCallback(async (func: () => void) => {
      try {
        await func();
      } catch (err) {
        setError(err instanceof Error ? err : new Error(err));
      }
    }, []),
  ];
}
