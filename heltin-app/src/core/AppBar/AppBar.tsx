/**
 *
 * AppBar
 *
 */

import React from 'react';
import { PROFESSIONALS_PAGE_ROUTE, CLIENTS_PAGE_ROUTE } from 'lib/routes';
import { FormattedMessage } from 'react-intl';

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
          <AppBarLink to={PROFESSIONALS_PAGE_ROUTE}>
            <FormattedMessage id="PROFESSIONALS" />
          </AppBarLink>
        </Flex>
        <Flex item>
          <AppBarLink to={CLIENTS_PAGE_ROUTE}>
            <FormattedMessage id="CLIENTS" />
          </AppBarLink>
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
