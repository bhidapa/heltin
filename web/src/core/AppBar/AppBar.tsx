/**
 *
 * AppBar
 *
 */

import React from 'react';
import { PROFESSIONALS_PAGE_ROUTE, CLIENTS_PAGE_ROUTE } from 'lib/routes';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { AppBar_viewer$key } from 'relay/artifacts/AppBar_viewer.graphql';

// ui
import { Flex } from '@domonda/ui/Flex';
import { AppBarLink } from './AppBarLink';
import BHIDAPALogo from 'assets/BHIDAPA-logo-90x90.png';

// parts
import { AppBarActions } from './AppBarActions';

// decorate
import { decorate, Decorate } from './decorate';

export interface AppBarProps {
  viewer: AppBar_viewer$key;
}

const AppBar: React.FC<AppBarProps & Decorate> = (props) => {
  const { classes, viewer: viewerKey } = props;

  const viewer = useFragment(
    graphql`
      fragment AppBar_viewer on User {
        isAdmin
        ...AppBarActions_viewer
      }
    `,
    viewerKey,
  );

  return (
    <Flex container spacing="small" align="center">
      <Flex item>
        <img src={BHIDAPALogo} alt="BHIDAPA" className={classes.logo} />
      </Flex>
      <Flex item flex={1} container alignSelf="stretch" spacing="tiny">
        {viewer.isAdmin && (
          <Flex item>
            <AppBarLink to={PROFESSIONALS_PAGE_ROUTE}>
              <FormattedMessage id="THERAPISTS" />
            </AppBarLink>
          </Flex>
        )}
        <Flex item>
          <AppBarLink to={CLIENTS_PAGE_ROUTE}>
            <FormattedMessage id="CLIENTS" />
          </AppBarLink>
        </Flex>
      </Flex>
      <Flex item>
        <AppBarActions viewer={viewer} />
      </Flex>
    </Flex>
  );
};

const StyledAppBar = decorate(AppBar);
export { StyledAppBar as AppBar };
