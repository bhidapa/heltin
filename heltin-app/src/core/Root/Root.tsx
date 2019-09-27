/**
 *
 * Root
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createLazy } from 'lib/lazy';
import { RestoreScroll } from 'lib/RestoreScroll';
import { Helmet } from 'react-helmet';

// plumbs
import { useMappedPlumbState } from '@domonda/react-plumb';
import { auth, deriveIsLoggedIn } from 'lib/auth';

// ui
import { Flex } from '@domonda/ui/Flex';

// pages
import { LOGIN_PAGE_ROUTE, LOGOUT_PAGE_ROUTE } from 'lib/routes';
const LazyFourOhFourPage = createLazy(() => import('../pages/FourOhFourPage/default'));
const LazyLoginPage = createLazy(() => import('../pages/LoginPage/default'));
const LazyLogoutPage = createLazy(() => import('../pages/LogoutPage/default'));

// parts
import { AppBar } from '../AppBar';

// decorate
import { decorate, Decorate } from './decorate';

const RootRoutes = React.memo<{ isLoggedIn: boolean }>(function RootRoutes(props) {
  const { isLoggedIn } = props;
  if (!isLoggedIn) {
    return (
      <>
        <Route path={LOGIN_PAGE_ROUTE} component={LazyLoginPage} />
        <Redirect path="*" to={LOGIN_PAGE_ROUTE} />
      </>
    );
  }

  return (
    <>
      <Route path={LOGOUT_PAGE_ROUTE} component={LazyLogoutPage} />
      <Route path="*" component={LazyFourOhFourPage} />
    </>
  );
});

const Root: React.FC<Decorate> = (props) => {
  const { classes } = props;

  const [isLoggedIn] = useMappedPlumbState({ plumb: auth, mapper: deriveIsLoggedIn });

  return (
    <>
      <Helmet titleTemplate="%s | heltin" />
      <Flex container direction="column">
        {isLoggedIn && (
          <Flex item container align="stretch" className={classes.header} component="header">
            <AppBar />
          </Flex>
        )}
        <RestoreScroll>
          {(ref) => (
            <Flex ref={ref} item container flex={1} className={classes.content} component="main">
              <Switch>
                {/* Removes trailing slashes */}
                <Route
                  path="/:url*(/+)"
                  exact
                  strict
                  render={({ location }) => <Redirect to={location.pathname.replace(/\/+$/, '')} />}
                />
                <RootRoutes isLoggedIn={isLoggedIn} />
              </Switch>
            </Flex>
          )}
        </RestoreScroll>
      </Flex>
    </>
  );
};

const StyledRoot = decorate(Root);
export { StyledRoot as Root };
