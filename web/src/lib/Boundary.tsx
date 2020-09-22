/**
 *
 * lib/Boundary
 *
 */

import React, { Suspense } from 'react';
import { ErrBoundary } from '@domonda/ui/ErrBoundary';
import { Loading } from '@domonda/ui/Loading';

export const Boundary: React.FC = ({ children }) => {
  return (
    <ErrBoundary>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrBoundary>
  );
};
