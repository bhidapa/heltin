/**
 *
 * location
 *
 * All routing related elements in one place.
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { PreloadedQuery } from 'react-relay';
import { Link, MakeGenerics, ReactLocation, useRouter } from '@tanstack/react-location';
import { ClientsCreatePageQuery } from 'core/pages/ClientsPage/__generated__/ClientsCreatePageQuery.graphql';
import { ClientsDetailsPageQuery } from 'core/pages/ClientsPage/__generated__/ClientsDetailsPageQuery.graphql';
import { ClientsPageQuery } from 'core/pages/ClientsPage/__generated__/ClientsPageQuery.graphql';
import { ClientsCaseStudiesCreatePageQuery } from 'core/pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesCreatePageQuery.graphql';
import { TherapistsCreatePageQuery } from 'core/pages/TherapistsPage/__generated__/TherapistsCreatePageQuery.graphql';
import { TherapistsDetailsPageQuery } from 'core/pages/TherapistsPage/__generated__/TherapistsDetailsPageQuery.graphql';
import { TherapistsPageQuery } from 'core/pages/TherapistsPage/__generated__/TherapistsPageQuery.graphql';
import { ClientsCaseStudiesConclusionCreatePageQuery } from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesConclusionCreatePageQuery.graphql';
import { ClientsCaseStudiesConclusionDetailsPageQuery } from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesConclusionDetailsPageQuery.graphql';
import { ClientsCaseStudiesDetailsPageQuery } from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesDetailsPageQuery.graphql';
import { ClientsCaseStudiesTreatmentsCreatePageQuery } from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesTreatmentsCreatePageQuery.graphql';
import { ClientsCaseStudiesTreatmentsDetailsPageQuery } from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesTreatmentsDetailsPageQuery.graphql';
import { ClientsCaseStudiesFormsFillPageQuery } from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesFormsPage/__generated__/ClientsCaseStudiesFormsFillPageQuery.graphql';
import { ClientsCaseStudiesFormsResponsePageQuery } from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesFormsPage/__generated__/ClientsCaseStudiesFormsResponsePageQuery.graphql';
import { UsersCreatePageQuery } from './pages/UsersPage/__generated__/UsersCreatePageQuery.graphql';
import { UsersDetailsPageQuery } from './pages/UsersPage/__generated__/UsersDetailsPageQuery.graphql';
import { UsersPageQuery } from './pages/UsersPage/__generated__/UsersPageQuery.graphql';

export type LocationGenerics = MakeGenerics<{
  Params: {
    clientRowId: string;
    caseStudyRowId: string;
    treatmentRowId: string;
    therapistRowId: string;
    userRowId: string;
    conclusionRowId: string;
    formId: string;
    formResponseId: string;
  };
  Search: {
    q: string;
    count: string;
    returnTo: string;
  };
  LoaderData: {
    // clients
    clientsPageQuery: PreloadedQuery<ClientsPageQuery>;
    clientsCreatePageQuery: PreloadedQuery<ClientsCreatePageQuery>;
    clientsDetailsPageQuery: PreloadedQuery<ClientsDetailsPageQuery>;
    // case-studies
    clientsCaseStudiesCreatePageQuery: PreloadedQuery<ClientsCaseStudiesCreatePageQuery>;
    clientsCaseStudiesDetailsPageQuery: PreloadedQuery<ClientsCaseStudiesDetailsPageQuery>;
    // case-study treatments
    clientsCaseStudiesTreatmentsCreatePageQuery: PreloadedQuery<ClientsCaseStudiesTreatmentsCreatePageQuery>;
    clientsCaseStudiesTreatmentsDetailsPageQuery: PreloadedQuery<ClientsCaseStudiesTreatmentsDetailsPageQuery>;
    // case-study conclusion
    clientsCaseStudiesConclusionCreatePageQuery: PreloadedQuery<ClientsCaseStudiesConclusionCreatePageQuery>;
    clientsCaseStudiesConclusionDetailsPageQuery: PreloadedQuery<ClientsCaseStudiesConclusionDetailsPageQuery>;
    // case-study forms
    clientsCaseStudiesFormsFillPageQuery: PreloadedQuery<ClientsCaseStudiesFormsFillPageQuery>;
    clientsCaseStudiesFormsResponsePageQuery: PreloadedQuery<ClientsCaseStudiesFormsResponsePageQuery>;
    // therapists
    therapistsPageQuery: PreloadedQuery<TherapistsPageQuery>;
    therapistsCreatePageQuery: PreloadedQuery<TherapistsCreatePageQuery>;
    therapistsDetailsPageQuery: PreloadedQuery<TherapistsDetailsPageQuery>;
    // users
    usersPageQuery: PreloadedQuery<UsersPageQuery>;
    usersCreatePageQuery: PreloadedQuery<UsersCreatePageQuery>;
    usersDetailsPageQuery: PreloadedQuery<UsersDetailsPageQuery>;
  };
  RouteMeta: {
    breadcrumb: (data: Partial<LocationGenerics['LoaderData']>) => React.ReactElement;
    breadcrumbNoLink?: boolean;
  };
}>;

export const location = new ReactLocation<LocationGenerics>({
  parseSearch: (search) => {
    // parse all params as strings
    const obj: { [key: string]: string } = {};
    const params = new URLSearchParams(search);
    for (const [key, value] of params.entries()) {
      obj[key] = value;
    }
    return obj;
  },
});

export function getReturnTo() {
  return ['/', '/login', '/logout'].includes(location.current.pathname)
    ? // locations in the array are not returnable
      undefined
    : // all others are
      location.current.href;
}

export const BackButton: React.FC = () => {
  return (
    <button
      type="button"
      className="btn"
      onClick={(e) => {
        e.preventDefault();
        // // we go back so that the location keys match and the locationHistory is pop-ed instead
        location.history.back();
      }}
    >
      <i className="fa-solid fa-arrow-left"></i>
      <span className="hidden-sm-and-down">
        &nbsp;
        <FormattedMessage id="BACK" />
      </span>
    </button>
  );
};

export const Breadcrumbs: React.FC<{ rightAlign?: boolean }> = (props) => {
  const { rightAlign } = props;

  const {
    state: { matches },
  } = useRouter<LocationGenerics>();

  // TODO: does not yield proper matches, investigate...
  // const matches = useMatches<LocationGenerics>();

  // only matches with a breadcrumb meta are active and should be shown, skip others
  const activeMatches = matches.filter((match) => match.route.meta?.breadcrumb);

  return (
    <nav aria-label="Breadcrumbs">
      <ul className={'breadcrumb m-0' + (rightAlign ? ' text-right' : '')}>
        {activeMatches.map((match, index) => {
          const active = index === activeMatches.length - 1; // last match is always the currently active one
          return (
            <li
              key={match.id}
              className={'breadcrumb-item' + (active ? ' active' : '')}
              {...(active ? { 'aria-current': 'page' } : {})}
            >
              {match.route.meta?.breadcrumbNoLink ? (
                match.route.meta!.breadcrumb(match.data)
              ) : (
                <Link to={match.pathname} search>
                  {match.route.meta!.breadcrumb(match.data)}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
