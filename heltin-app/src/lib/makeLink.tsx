/**
 *
 * makeLink
 *
 */

import React from 'react';
import { Link, LinkProps } from 'react-router-dom';

export const makeLink = (linkProps: LinkProps) =>
  function MadeLink({ children, ...rest }: React.Props<any>) {
    return (
      <Link {...rest} {...linkProps}>
        {children}
      </Link>
    );
  };
