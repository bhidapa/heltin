/**
 *
 * Root
 *
 */

import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RestoreScroll } from 'lib/RestoreScroll';
import { local } from 'lib/storage';
import { LocationDescriptor } from 'history';

// relay
import { graphql } from 'relay/hooks';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { RootQuery } from 'relay/artifacts/RootQuery.graphql';

// ui
import { Flex } from '@domonda/ui/Flex';

// pages
import {
  LOGIN_PAGE_ROUTE,
  LOGOUT_PAGE_ROUTE,
  DEFAULT_ROUTE,
  PROFESSIONALS_PAGE_ROUTE,
  CLIENTS_PAGE_ROUTE,
  CASE_STUDIES_PAGE_ROUTE,
} from 'lib/routes';
const LazyFourOhFourPage = React.lazy(() => import('../pages/FourOhFourPage/default'));
const LazyLoginPage = React.lazy(() => import('../pages/LoginPage/default'));
const LazyLogoutPage = React.lazy(() => import('../pages/LogoutPage/default'));
const LazyProfessionalsPage = React.lazy(() => import('../pages/ProfessionalsPage/default'));
const LazyClientsPage = React.lazy(() => import('../pages/ClientsPage/default'));
const LazyCaseStudiesPage = React.lazy(() => import('../pages/CaseStudiesPage/default'));

// parts
import { AppBar } from '../AppBar';
import { Boundary } from 'lib/Boundary';

// decorate
import { decorate, Decorate } from './decorate';

graphql`
  fragment Root_viewer on User {
    ...AppBarActions_viewer
  }
`;

const RETURN_TO_KEY = '@heltin/returnTo';

const RootRoutes = React.memo<{ isLoggedIn: boolean }>(function RootRoutes(props) {
  const { isLoggedIn } = props;

  const [returnTo, setReturnTo] = useState<LocationDescriptor | null>(
    local.get(RETURN_TO_KEY, null),
  );

  function saveReturnTo(location: LocationDescriptor | null) {
    if (location) {
      local.set(RETURN_TO_KEY, location);
    } else {
      local.remove(RETURN_TO_KEY);
    }
    setReturnTo(location);
  }

  if (!isLoggedIn) {
    return (
      <Switch>
        <Route path={LOGIN_PAGE_ROUTE} component={LazyLoginPage} />
        <Route
          path="*"
          render={({ location }) => {
            setTimeout(() => saveReturnTo(location), 0);
            return <Redirect to={LOGIN_PAGE_ROUTE} />;
          }}
        />
      </Switch>
    );
  }

  if (returnTo) {
    setTimeout(() => saveReturnTo(null), 0);
    return <Redirect to={returnTo} />;
  }

  return (
    <Switch>
      <Route path={LOGOUT_PAGE_ROUTE} component={LazyLogoutPage} />
      <Route path={PROFESSIONALS_PAGE_ROUTE} component={LazyProfessionalsPage} />
      <Route path={CLIENTS_PAGE_ROUTE} component={LazyClientsPage} />
      <Route path={CASE_STUDIES_PAGE_ROUTE} component={LazyCaseStudiesPage} />
      <Redirect exact path="/" to={DEFAULT_ROUTE} />
      <Route path="*" component={LazyFourOhFourPage} />
    </Switch>
  );
});

const Root: React.FC<Decorate> = (props) => {
  const { classes } = props;

  const { viewer } = useLazyLoadQuery<RootQuery>(
    graphql`
      query RootQuery {
        viewer {
          ...Root_viewer @relay(mask: false)
        }
      }
    `,
    {},
  );

  return (
    <Flex container direction="column">
      {viewer && (
        <header className={classes.header}>
          <Flex container className={classes.content}>
            <AppBar viewer={viewer} />
          </Flex>
        </header>
      )}
      <RestoreScroll>
        {(ref) => (
          <Flex ref={ref} item container flex={1} className={classes.main} component="main">
            <main className={classes.content}>
              <Boundary>
                <Switch>
                  {/* Removes trailing slashes */}
                  <Route
                    path="/:url*(/+)"
                    exact
                    strict
                    render={({ location }) => (
                      <Redirect to={location.pathname.replace(/\/+$/, '')} />
                    )}
                  />
                  <RootRoutes isLoggedIn={Boolean(viewer)} />
                </Switch>
              </Boundary>
            </main>
          </Flex>
        )}
      </RestoreScroll>
    </Flex>
  );
};

const StyledRoot = decorate(Root);
export { StyledRoot as Root };
