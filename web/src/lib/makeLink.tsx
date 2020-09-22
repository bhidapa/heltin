/**
 *
 * makeLink
 *
 */

import React, { useEffect } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import _omit from 'lodash/fp/omit';

export interface MakeLinkProps<P> extends LinkProps {
  omit?: (keyof P)[];
}

const cache: {
  [hash: string]: React.FC;
} = {};

export function makeLink<P>(props: MakeLinkProps<P>): React.FC<P> {
  const hash = JSON.stringify(props);

  if (!cache[hash]) {
    const { omit, ...linkProps } = props;
    const MadeLink: React.FC = ({ children, ...rest }) => {
      // cache recycling
      useEffect(
        () => () => {
          delete cache[hash];
        },
        [],
      );

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
