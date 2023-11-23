/**
 *
 * RootRestoreScroll
 *
 */
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from '@tanstack/react-location';
import { location, LocationGenerics } from 'core/location';

export interface RootRestoreScrollProps {
  children: (setEl: (el: HTMLDivElement | null) => void) => React.ReactElement;
}

export const RootRestoreScroll: React.FC<RootRestoreScrollProps> = (props) => {
  // store the current location key on each navigation
  const locationKeyRef = useRef(location.current.key || '');
  useEffect(
    () =>
      location.subscribe(() => {
        locationKeyRef.current = location.current.key || '';
      }),
    [],
  );

  // store the latest scroll position of the registered element for the current location key
  const [el, setEl] = useState<HTMLDivElement | null>(null);
  const elRef = useRef(el);
  elRef.current = el;
  const scrollTopsRef = useRef<Record<string, number>>({});
  useEffect(() => {
    function onScroll() {
      scrollTopsRef.current[locationKeyRef.current] = el?.scrollTop || 0;
    }
    el?.addEventListener('scroll', onScroll);
    return () => {
      el?.removeEventListener('scroll', onScroll);
    };
  }, [el]);

  // restore the scroll position when navigation is completed
  const router = useRouter<LocationGenerics>();
  const pending = router.pending;
  const wasPendingRef = useRef(false);
  useEffect(() => {
    if (pending) {
      wasPendingRef.current = true;
      return;
    }

    const wasPending = wasPendingRef.current;
    if (wasPending && !pending) {
      const el = elRef.current;
      if (el) {
        // store the scrollTop so that it doesn't get overwritten while animation frame is pending
        const scrollTop = scrollTopsRef.current[locationKeyRef.current] || 0;

        requestAnimationFrame(() => {
          el.scrollTop = scrollTop;
        });
      }
    }
  }, [pending]);

  return props.children(setEl);
};
