/**
 *
 * AppBar
 *
 */

import React from 'react';

// ui
import { Flex } from '@domonda/ui/Flex';
import { Text } from '@domonda/ui/Text';

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
      <Flex item flex={1} />
      <Flex item>
        <Text color="textSecondary">John Doe</Text>
      </Flex>
    </Flex>
  );
};

const StyledAppBar = decorate(AppBar);
export { StyledAppBar as AppBar };
