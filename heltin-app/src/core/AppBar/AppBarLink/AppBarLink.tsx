/**
 *
 * AppBarLink
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

// decorate
import { decorate, Decorate } from './decorate';

export interface AppBarLinkProps {
  to: string;
}

const AppBarLink: React.FC<AppBarLinkProps & Decorate> = (props) => {
  const { children, to, classes } = props;

  return (
    <NavLink to={to} className={classes.root} activeClassName={classes.active}>
      {children}
    </NavLink>
  );
};

const StyledAppBarLink = decorate(AppBarLink);
export { StyledAppBarLink as AppBarLink };
