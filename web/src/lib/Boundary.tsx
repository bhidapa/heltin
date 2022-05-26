/**
 *
 * lib/Boundary
 *
 */
import React, { Suspense } from 'react';

import { ErrBoundary } from './ErrBoundary';
import { PleaseWait } from './PleaseWait';

export const Boundary: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  return (
    <ErrBoundary>
      <Suspense fallback={<PleaseWait />}>{children}</Suspense>
    </ErrBoundary>
  );
};
