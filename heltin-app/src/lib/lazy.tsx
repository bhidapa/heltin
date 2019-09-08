/**
 *
 * lib/lazy
 *
 * Creates a React.lazy component already wrapped with a loader.
 *
 */

import React, { Suspense } from 'react';

// ui
import { Loading } from '@domonda/ui/Loading';

export function createLazy<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
) {
  const LazyComponent = React.lazy(factory);

  const Lazy: React.FC<React.ComponentProps<T>> = ({ children, ...rest }) => {
    return (
      <Suspense fallback={<Loading />}>
        <LazyComponent {...(rest as any)}>{children}</LazyComponent>
      </Suspense>
    );
  };

  return Lazy;
}
