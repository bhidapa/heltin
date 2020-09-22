/**
 *
 * Root
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RestoreScroll } from 'lib/RestoreScroll';
import { Helmet } from 'react-helmet';

// relay
import { graphql } from 'relay/hooks';
import { useLazyLoadQuery } from 'react-relay/hooks';
import { checkIsAuthorized } from 'relay/client/session';
import { RootSessionQuery } from 'relay/artifacts/RootSessionQuery.graphql';

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
const LazyFourOhFourPage = React.lazy(
  () => import('../pages/FourOhFourPage/default'),
);
const LazyLoginPage = React.lazy(() => import('../pages/LoginPage/default'));
const LazyLogoutPage = React.lazy(() => import('../pages/LogoutPage/default'));
const LazyProfessionalsPage = React.lazy(
  () => import('../pages/ProfessionalsPage/default'),
);
const LazyClientsPage = React.lazy(
  () => import('../pages/ClientsPage/default'),
);
const LazyCaseStudiesPage = React.lazy(
  () => import('../pages/CaseStudiesPage/default'),
);

// parts
import { AppBar } from '../AppBar';
import { Boundary } from 'lib/Boundary';

// decorate
import { decorate, Decorate } from './decorate';

// eslint-disable-next-line react/display-name
const RootRoutes = React.memo<{ isAuthorized: boolean }>(function RootRoutes(
  props,
) {
  const { isAuthorized } = props;
  if (!isAuthorized) {
    return (
      <Switch>
        <Route path={LOGIN_PAGE_ROUTE} component={LazyLoginPage} />
        <Redirect path="*" to={LOGIN_PAGE_ROUTE} />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path={LOGOUT_PAGE_ROUTE} component={LazyLogoutPage} />
      <Route
        path={PROFESSIONALS_PAGE_ROUTE}
        component={LazyProfessionalsPage}
      />
      <Route path={CLIENTS_PAGE_ROUTE} component={LazyClientsPage} />
      <Route path={CASE_STUDIES_PAGE_ROUTE} component={LazyCaseStudiesPage} />
      <Redirect exact path="/" to={DEFAULT_ROUTE} />
      <Route path="*" component={LazyFourOhFourPage} />
    </Switch>
  );
});

const Root: React.FC<Decorate> = (props) => {
  const { classes } = props;

  const { session } = useLazyLoadQuery<RootSessionQuery>(
    graphql`
      query RootSessionQuery {
        ... on Query {
          __typename
        }
        session {
          token
          expiresAt
        }
      }
    `,
    {},
  );

  const isAuthorized = (session && checkIsAuthorized(session)) || false;

  return (
    <>
      <Helmet titleTemplate="%s | heltin" />
      <Flex container direction="column">
        {isAuthorized && (
          <div className={classes.header}>
            <Flex container className={classes.content}>
              <AppBar />
            </Flex>
          </div>
        )}
        <RestoreScroll>
          {(ref) => (
            <Flex
              ref={ref}
              item
              container
              flex={1}
              className={classes.main}
              component="main"
            >
              <div className={classes.content}>
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
                    <RootRoutes isAuthorized={isAuthorized} />
                  </Switch>
                </Boundary>
              </div>
            </Flex>
          )}
        </RestoreScroll>
      </Flex>
    </>
  );
};

const StyledRoot = decorate(Root);
export { StyledRoot as Root };
