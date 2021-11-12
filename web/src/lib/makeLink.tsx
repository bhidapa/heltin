/**
 *
 * makeLink
 *
 */

import React, { useEffect } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import _omit from 'lodash/fp/omit';

export interface MakeLinkProps<P> extends LinkProps {
  native?: boolean;
  omit?: (keyof P)[];
}

const cache: {
  [hash: string]: React.FC;
} = {};

export function makeLink<P>(props: MakeLinkProps<P>): React.FC<P> {
  const hash = JSON.stringify(props);

  if (!cache[hash]) {
    const { omit, native, ...linkProps } = props;
    const MadeLink: React.FC = ({ children, ...rest }) => {
      // cache recycling
      useEffect(
        () => () => {
          delete cache[hash];
        },
        [],
      );

      if (native) {
        const { to: href, ...aProps } = linkProps;
        return (
          <a href={href.toString()} {...(omit ? _omit(omit, rest) : rest)} {...aProps}>
            {children}
          </a>
        );
      }

      return (
        <Link {...(omit ? _omit(omit, rest) : rest)} {...linkProps}>
          {children}
        </Link>
      );
    };

    cache[hash] = MadeLink;
  }

  return cache[hash];
}
