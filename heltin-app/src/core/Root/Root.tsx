/**
 *
 * Root
 *
 */

import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createLazy } from 'lib/lazy';
import { RestoreScroll } from 'lib/RestoreScroll';

// ui
import { Flex } from '@domonda/ui/Flex';

// pages
const LazyFourOhFourPage = createLazy(() => import('../pages/FourOhFourPage/default'));

// parts
import { AppBar } from '../AppBar';

// decorate
import { decorate, Decorate } from './decorate';

const Root: React.FC<Decorate> = (props) => {
  const { classes } = props;

  return (
    <Flex container direction="column">
      <Flex item container align="stretch" className={classes.header} component="header">
        <AppBar />
      </Flex>
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
              <Route path="*" component={LazyFourOhFourPage} />
            </Switch>
          </Flex>
        )}
      </RestoreScroll>
    </Flex>
  );
};

const StyledRoot = decorate(Root);
export { StyledRoot as Root };
