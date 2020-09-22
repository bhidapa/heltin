import React, { useState, useEffect } from 'react';

export interface SentinelProps {
  onReached: () => void;
}

export const Sentinel: React.FC<SentinelProps> = (props) => {
  const { onReached } = props;

  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (target) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.intersectionRatio === 1) {
            onReached();
          }
        },
        {
          root: null,
          rootMargin: '0px',
          threshold: 1,
        },
      );

      observer.observe(target);
      return () => observer.unobserve(target);
    }
  }, [target, onReached]);

  return <div ref={setTarget} style={{ height: '1px', margin: '1px 0' }}></div>;
};
