/**
 *
 * Root
 *
 */
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { PreloadedQuery, graphql, usePreloadedQuery } from 'react-relay';

import { Link, Outlet, Router } from '@tanstack/react-location';

import { Boundary } from 'lib/Boundary';
import { Dropdown } from 'lib/Dropdown';
import { PleaseWait } from 'lib/PleaseWait';
import { useDarkMode } from 'lib/useDarkMode';

import { location } from 'core/location';
import { getRoutes } from 'core/routes';

import BHIDAPALogo from 'assets/BHIDAPA-logo-blue-90x90.png';

import { RootSearch } from './RootSearch';
import { RootQuery } from './__generated__/RootQuery.graphql';

// viewer fragment for authenticating
graphql`
  fragment Root_viewer on User {
    id
    fullName
    firstName
    email
    isAdmin
    ...routes_viewer
  }
`;

export interface RootProps {
  query: PreloadedQuery<RootQuery>;
}

export const Root: React.FC<RootProps> = (props) => {
  const { viewer } = usePreloadedQuery<RootQuery>(
    graphql`
      query RootQuery {
        viewer {
          ...Root_viewer @relay(mask: false)
        }
      }
    `,
    props.query,
  );

  const [, toggleDarkMode] = useDarkMode();

  // only logged in users have access to the navbar and the sidebar
  const withSidebarAndNavbar = Boolean(viewer);

  const [sidebarHidden, setSidebarHidden] = useState(
    // hide sidebar on load on small screens (like halfmoon does)
    () => document.documentElement.clientWidth <= 768,
  );

  return (
    <Router
      useErrorBoundary
      defaultPendingMs={1_000}
      defaultPendingElement={<PleaseWait />}
      location={location}
      routes={getRoutes(viewer)}
    >
      <div
        id="page-wrapper"
        className={
          'page-wrapper with-navbar-fixed-bottom' +
          (withSidebarAndNavbar ? ' with-navbar with-sidebar' : '')
        }
        {...(withSidebarAndNavbar ? { ['data-sidebar-type']: 'overlayed-sm-and-down' } : {})}
        {...(withSidebarAndNavbar && sidebarHidden ? { ['data-sidebar-hidden']: 'hidden' } : {})}
      >
        {viewer && (
          <>
            <nav className="navbar">
              <div className="navbar-content">
                <button
                  id="toggle-sidebar-btn"
                  className="btn btn-action"
                  type="button"
                  onClick={() => setSidebarHidden((hidden) => !hidden)}
                >
                  <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
              </div>

              <Link to="/" className="navbar-brand ml-10 ml-sm-20">
                <img src={BHIDAPALogo} alt="BHIDAPA" />
              </Link>

              <div className="navbar-content ml-auto">
                <button className="btn btn-action mr-5" type="button" onClick={toggleDarkMode}>
                  <i className="fa-solid fa-moon hidden-lm"></i>
                  <i className="fa-solid fa-sun hidden-dm"></i>
                  <span className="sr-only">
                    <FormattedMessage id="TOGGLE_DARK_LIGHT_MODE" />
                  </span>
                </button>

                <Dropdown
                  content={
                    <>
                      <h6 className="dropdown-header">
                        <FormattedMessage
                          id="HELLO_USER"
                          values={{
                            user: viewer.firstName,
                          }}
                        />
                        <br />
                        <small>{viewer.email}</small>
                      </h6>
                      <div className="dropdown-divider"></div>
                      <div className="dropdown-content">
                        <Link to="/logout" className="btn btn-block btn-primary">
                          <i className="fa-solid fa-right-from-bracket"></i>
                          &nbsp;
                          <FormattedMessage id="LOG_OUT" />
                        </Link>
                      </div>
                    </>
                  }
                >
                  {(toggle) => (
                    <button
                      className="btn"
                      type="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                      onClick={toggle}
                    >
                      <i className="fa-solid fa-circle-user"></i>
                      <span className="hidden-sm-and-down">&nbsp;{viewer.fullName}</span>
                    </button>
                  )}
                </Dropdown>
              </div>
            </nav>

            <div className="sidebar-overlay" onClick={() => setSidebarHidden(true)}></div>

            <div className="sidebar">
              <div className="sidebar-menu">
                <div className="sidebar-content">
                  <RootSearch />
                </div>

                <h5 className="sidebar-title">
                  <FormattedMessage id="MENU" />
                </h5>
                <div className="sidebar-divider"></div>

                <Link
                  to="/clients"
                  className="sidebar-link sidebar-link-with-icon"
                  activeOptions={{ exact: true }}
                  getActiveProps={() => ({ className: 'active' })}
                >
                  <span className="sidebar-icon" style={{ color: 'inherit' }}>
                    <i className="fa-solid fa-hospital-user"></i>
                  </span>
                  <FormattedMessage id="CLIENTS" />
                </Link>
                {viewer.isAdmin && (
                  <Link
                    to="/therapists"
                    className="sidebar-link sidebar-link-with-icon"
                    activeOptions={{ exact: true }}
                    getActiveProps={() => ({ className: 'active' })}
                  >
                    <span className="sidebar-icon" style={{ color: 'inherit' }}>
                      <i className="fa fa-user-doctor" aria-hidden="true"></i>
                    </span>
                    <FormattedMessage id="THERAPISTS" />
                  </Link>
                )}
              </div>
            </div>
          </>
        )}

        <div className="content-wrapper">
          <Boundary>
            <Outlet />
          </Boundary>
        </div>

        <nav className="navbar navbar-fixed-bottom">
          <div className="container-fluid justify-content-between">
            <small className="navbar-text">
              {import.meta.env.VITE_APP_VER || import.meta.env.MODE}
            </small>
            <p className="navbar-text">
              &copy;&nbsp;2019-{new Date().getFullYear()}&nbsp;
              <b>heltin</b>&nbsp;by&nbsp;
              <a href="https://bhidapa.com">
                <b>BHIDAPA</b>
              </a>
            </p>
          </div>
        </nav>
      </div>
    </Router>
  );
};
