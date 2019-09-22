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
const LazyFourOhFourPage = createLazy(() => import('../pages/FourOhFourPage/default'));
import { LOGIN_PAGE_ROUTE } from '../pages/LoginPage';
const LazyLoginPage = createLazy(() => import('../pages/LoginPage/default'));

// parts
import { AppBar } from '../AppBar';

// decorate
import { decorate, Decorate } from './decorate';

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
                {!isLoggedIn && (
                  <>
                    <Route path={LOGIN_PAGE_ROUTE} component={LazyLoginPage} />
                    <Redirect path="*" to={LOGIN_PAGE_ROUTE} />
                  </>
                )}
                <Route path="*" component={LazyFourOhFourPage} />
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
