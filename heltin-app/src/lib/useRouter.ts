/**
 *
 * router
 *
 */

import { useContext, useEffect } from 'react';
import { __RouterContext, RouteComponentProps } from 'react-router';
import { useForceUpdate } from '@domonda/react-plumb';

export function useRouter<
  Params extends { [K in keyof Params]?: string } = Record<string, string>
>(): RouteComponentProps<Params> {
  const forceUpdate = useForceUpdate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const router = useContext<RouteComponentProps<Params>>(__RouterContext as any);

  useEffect(() => {
    const unlisten = router.history.listen(forceUpdate);
    return () => unlisten();
  }, [router]);

  return router;
}
