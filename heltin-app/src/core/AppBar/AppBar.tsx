/**
 *
 * AppBar
 *
 */

import React from 'react';
import { CLIENTS_PAGE_ROUTE } from 'lib/routes';

// ui
import { Flex } from '@domonda/ui/Flex';
import { Text } from '@domonda/ui/Text';
import { AppBarLink } from './AppBarLink';

// parts
import { AppBarActions } from './AppBarActions';

// decorate
import { decorate, Decorate } from './decorate';

export interface AppBarProps {}

const AppBar: React.FC<AppBarProps & Decorate> = (props) => {
  const { classes } = props;

  return (
    <Flex container spacing={2} align="center" className={classes.root}>
      <Flex item>
        <Text color="secondary" variant="title">
          heltin
        </Text>
      </Flex>
      <Flex item flex={1} container alignSelf="stretch" spacing={1}>
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
