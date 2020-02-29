/**
 *
 * lib/lazy
 *
 * Creates a React.lazy component already wrapped with a loader.
 *
 */

import React from 'react';
import { Boundry } from './Boundry';

export function createLazy<T extends React.ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
) {
  const LazyComponent = React.lazy(factory);

  const Lazy: React.FC<React.ComponentProps<T>> = ({ children, ...rest }) => {
    return (
      <Boundry>
        <LazyComponent {...(rest as any)}>{children}</LazyComponent>
      </Boundry>
    );
  };

  return Lazy;
}
