/**
 *
 * TherapistsPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, usePreloadedQuery } from 'react-relay';

import { Link, useMatch } from '@tanstack/react-location';

import { LocationGenerics } from 'core/location';

import { TherapistsTable } from 'modules/Therapists/TherapistsTable';

export interface TherapistsPageProps {}

export const TherapistsPage: React.FC<TherapistsPageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const query = usePreloadedQuery(
    graphql`
      query TherapistsPageQuery(
        # pagination
        $count: Int!
        $cursor: Cursor
        # filters
        $q: String
      ) {
        viewer @required(action: THROW) {
          canInsertTherapist
        }
        ...TherapistsTable_query
          @arguments(
            # pagination
            count: $count
            cursor: $cursor
            # filters
            q: $q
          )
      }
    `,
    match.data.therapistsPageQuery!,
  );

  return (
    <div className="container">
      <FormattedMessage id="THERAPISTS">
        {([msg]) => <Helmet title={msg?.toString()} />}
      </FormattedMessage>

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <h2 className="content-title m-0">
            <FormattedMessage id="THERAPISTS" />
          </h2>
        </div>
        {query.viewer.canInsertTherapist && (
          <div className="col text-right">
            <Link to="create" search className="btn btn-primary">
              <i className="fa-solid fa-plus"></i>
              &nbsp;
              <FormattedMessage id="NEW_THERAPIST" />
            </Link>
          </div>
        )}
      </div>

      <TherapistsTable query={query} />
    </div>
  );
};
