/**
 *
 * AppBar
 *
 */

import React from 'react';
import { CLIENTS_PAGE_ROUTE } from 'lib/routes';

// ui
import { Flex } from '@domonda/ui/Flex';
import { AppBarLink } from './AppBarLink';
import BHIDAPALogo from 'assets/BHIDAPA-logo-90x90.png';

// parts
import { AppBarActions } from './AppBarActions';

// decorate
import { decorate, Decorate } from './decorate';

export interface AppBarProps {}

const AppBar: React.FC<AppBarProps & Decorate> = (props) => {
  const { classes } = props;

  return (
    <Flex container spacing="small" align="center">
      <Flex item>
        <img src={BHIDAPALogo} alt="BHIDAPA" className={classes.logo} />
      </Flex>
      <Flex item flex={1} container alignSelf="stretch" spacing="tiny">
        <Flex item>
          <AppBarLink to={CLIENTS_PAGE_ROUTE}>Clients</AppBarLink>
        </Flex>
      </Flex>
      <Flex item>
        <AppBarActions />
      </Flex>
    </Flex>
  );
};

const StyledAppBar = decorate(AppBar);
export { StyledAppBar as AppBar };
