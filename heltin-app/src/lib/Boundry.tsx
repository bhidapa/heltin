/**
 *
 * lib/Boundry
 *
 */

import React, { Suspense } from 'react';
import { ErrBoundry } from '@domonda/ui/ErrBoundry';
import { Loading } from '@domonda/ui/Loading';

export const Boundry: React.FC = ({ children }) => {
  return (
    <ErrBoundry>
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </ErrBoundry>
  );
};
