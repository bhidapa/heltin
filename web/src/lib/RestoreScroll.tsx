/**
 *
 * RestoreScroll
 *
 */

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'lib/useRouter';

export interface RestoreScrollProps {
  children: (ref: (el: HTMLElement | null) => void) => React.ReactElement;
}

const scrollTopMap: { [key: string]: number } = {};
let lastScrollPosition = 0;

export const RestoreScroll: React.FC<RestoreScrollProps> = (props) => {
  const { children } = props;

  const router = useRouter();

  const [el, setEl] = useState<HTMLElement | null>(null);
  const scrollRef = useRef<{
    key: string | undefined;
    scrollTop: number;
  }>({
    key: router.location.key,
    scrollTop: 0,
  });

  useEffect(() => {
    const { location } = router;
    if (!el || !location.key) return;

    const scrollListener = (event: Event) => {
      const currentTarget = event.currentTarget as HTMLElement | null;

      // we want to alter the `scrollTop` only when scrolled
      if (currentTarget) {
        const scrollTop = currentTarget.scrollTop;
        if (scrollTop) {
          scrollRef.current = { key: location.key, scrollTop: scrollTop };
        }
      }
    };

    el.addEventListener('scroll', scrollListener);

    return () => el.removeEventListener('scroll', scrollListener);
  }, [el, router]);

  useEffect(() => {
    const { history, location } = router;

    if (location.key) {
      let observer: MutationObserver;
      const restoringScrollTop = scrollTopMap[location.key];

      if (history.action === 'POP' && el && restoringScrollTop) {
        el.scrollTop = restoringScrollTop;
        // Save last scrolled position triggered programmatically.
        lastScrollPosition = el.scrollTop;

        if (el.scrollTop !== restoringScrollTop) {
          observer = new MutationObserver((mutationsList, observer) => {
            // If last saved scrolled position is not same as current one,
            // scroll was triggered by user interface.
            // Cancel further auto scrolling to paginated content.
            if (lastScrollPosition !== el.scrollTop) {
              observer.disconnect();
              return;
            }

            const isMutated = mutationsList.some((mutation) => mutation.type === 'childList');

            if (isMutated && location.key) {
              el.scrollTop = restoringScrollTop;
              // Save last scrolled position triggered programmatically.
              lastScrollPosition = el.scrollTop;

              if (el.scrollTop === restoringScrollTop) {
                delete scrollTopMap[location.key];
                observer.disconnect();
              }
            }
          });

          observer.observe(el, { childList: true, subtree: true });
        }
      }

      return () => {
        if (observer) {
          observer.disconnect();
        }

        const scroll = scrollRef.current;
        if (location.key && scroll && scroll.key === location.key) {
          scrollTopMap[location.key] = scroll.scrollTop;
        }
      };
    }
  }, [router]);

  return React.Children.only(children(setEl));
};
