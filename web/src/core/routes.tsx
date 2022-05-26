/**
 *
 * routes
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql, loadQuery } from 'react-relay';

import { Navigate, Route } from '@tanstack/react-location';
import { readInlineData } from 'relay-runtime';

import { NotFound } from 'lib/NotFound';
import { uuidOrEmpty } from 'lib/uuid';

import { LocationGenerics, getReturnTo } from 'core/location';
import clientsCaseStudiesCreatePageQuery, {
  ClientsCaseStudiesCreatePageQuery,
} from 'core/pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesCreatePageQuery.graphql';
import { ClientsDetailsPageBreadcrumb } from 'core/pages/ClientsPage/ClientsDetailsPageBreadcrumb';
import clientsCreatePageQuery, {
  ClientsCreatePageQuery,
} from 'core/pages/ClientsPage/__generated__/ClientsCreatePageQuery.graphql';
import clientsDetailsPageQuery, {
  ClientsDetailsPageQuery,
} from 'core/pages/ClientsPage/__generated__/ClientsDetailsPageQuery.graphql';
import clientsPageQuery, {
  ClientsPageQuery,
} from 'core/pages/ClientsPage/__generated__/ClientsPageQuery.graphql';
import { TherapistsDetailsPageBreadcrumb } from 'core/pages/TherapistsPage/TherapistDetailsPageBreadcrumb';
import therapistsCreatePageQuery, {
  TherapistsCreatePageQuery,
} from 'core/pages/TherapistsPage/__generated__/TherapistsCreatePageQuery.graphql';
import therapistsDetailsPageQuery, {
  TherapistsDetailsPageQuery,
} from 'core/pages/TherapistsPage/__generated__/TherapistsDetailsPageQuery.graphql';
import therapistsPageQuery, {
  TherapistsPageQuery,
} from 'core/pages/TherapistsPage/__generated__/TherapistsPageQuery.graphql';
import { environment } from 'core/relay';

import { routes_viewer$data, routes_viewer$key } from './__generated__/routes_viewer.graphql';
import { ClientsCaseStudiesConclusionCreatePageBreadcrumb } from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesConclusionCreatePageBreadcrumb';
import { ClientsCaseStudiesConclusionDetailsPageBreadcrumb } from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesConclusionDetailsPageBreadcrumb';
import { ClientsCaseStudiesDetailsPageBreadcrumb } from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesDetailsPageBreadcrumb';
import { ClientsCaseStudiesFormsFillPageBreadcrumb } from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesFormsPage/ClientsCaseStudiesFormsFillPageBreadcrumb';
import { ClientsCaseStudiesFormsResponsePageBreadcrumb } from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesFormsPage/ClientsCaseStudiesFormsResponsePageBreadcrumb';
import clientsCaseStudiesFormsFillPageQuery, {
  ClientsCaseStudiesFormsFillPageQuery,
} from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesFormsPage/__generated__/ClientsCaseStudiesFormsFillPageQuery.graphql';
import clientsCaseStudiesFormsResponsePageQuery, {
  ClientsCaseStudiesFormsResponsePageQuery,
} from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesFormsPage/__generated__/ClientsCaseStudiesFormsResponsePageQuery.graphql';
import { ClientsCaseStudiesTreatmentsDetailsPageBreadcrumb } from './pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesTreatmentsDetailsPageBreadcrumb';
import clientsCaseStudiesConclusionCreatePageQuery, {
  ClientsCaseStudiesConclusionCreatePageQuery,
} from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesConclusionCreatePageQuery.graphql';
import clientsCaseStudiesConclusionDetailsPageQuery, {
  ClientsCaseStudiesConclusionDetailsPageQuery,
} from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesConclusionDetailsPageQuery.graphql';
import clientsCaseStudiesDetailsPageQuery, {
  ClientsCaseStudiesDetailsPageQuery,
} from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesDetailsPageQuery.graphql';
import clientsCaseStudiesTreatmentsCreatePageQuery, {
  ClientsCaseStudiesTreatmentsCreatePageQuery,
} from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesTreatmentsCreatePageQuery.graphql';
import clientsCaseStudiesTreatmentsDetailsPageQuery, {
  ClientsCaseStudiesTreatmentsDetailsPageQuery,
} from './pages/ClientsPage/ClientsCaseStudiesPage/__generated__/ClientsCaseStudiesTreatmentsDetailsPageQuery.graphql';

export function getRoutes(viewerRef: routes_viewer$key | null): Route<LocationGenerics>[] {
  const viewer = readInlineData(
    graphql`
      fragment routes_viewer on User @inline {
        isAdmin
        isTherapist
      }
    `,
    viewerRef,
  );

  // anonymous
  if (!viewer) {
    return [
      {
        path: 'login',
        element: () =>
          // we lazy load the login page because it is not necessary when authenticated
          import('core/pages/LoginPage').then(({ LoginPage }) => <LoginPage />),
      },
      {
        element: (
          <Navigate<LocationGenerics>
            to="/login"
            search={{
              returnTo: getReturnTo(),
            }}
          />
        ),
      },
    ];
  }

  // authenticated
  return [
    {
      // TODO: use proper dashboard when ready
      path: '/',
      element: <Navigate to="/clients" />,
      // TODO: necessary? do we want a home breadcrumb?
      // meta: {
      //   breadcrumb: () => <FormattedMessage id="HOME" />,
      // },
      // TODO: should we nest the rest under children? for breadcrumbs?
      // children: [...],
    },
    ...getClientsRoutes(viewer),
    ...(viewer.isAdmin ? getTherapistsRoutes() : []),
    {
      path: 'logout',
      element: () =>
        // we lazy load the logout page because it is not necessary when anonymous
        import('core/pages/LogoutPage').then(({ LogoutPage }) => <LogoutPage />),
    },
    {
      element: <NotFound />,
    },
  ];
}

function getClientsRoutes(viewer: routes_viewer$data): Route<LocationGenerics>[] {
  return [
    {
      path: 'clients',
      loader: (match) => ({
        clientsPageQuery: loadQuery<ClientsPageQuery>(environment, clientsPageQuery, {
          q: match.search.q,
          count: parseInt(match.search.count || '20'),
        }),
      }),
      unloader: (match) => {
        match.data.clientsPageQuery?.dispose();
      },
      meta: {
        breadcrumb: () => <FormattedMessage id="CLIENTS" />,
      },
      children: [
        {
          path: '/',
          element: () =>
            import('core/pages/ClientsPage').then(({ ClientsPage }) => <ClientsPage />),
        },
        {
          path: 'create',
          loader: () => ({
            clientsCreatePageQuery: loadQuery<ClientsCreatePageQuery>(
              environment,
              clientsCreatePageQuery,
              {},
              { fetchPolicy: 'network-only' }, // always get the latest info for creating clients
            ),
          }),
          unloader: (match) => {
            match.data.clientsCreatePageQuery?.dispose();
          },
          element: () =>
            import('core/pages/ClientsPage/ClientsCreatePage').then(({ ClientsCreatePage }) => (
              <ClientsCreatePage />
            )),
          meta: {
            breadcrumb: () => <FormattedMessage id="NEW_CLIENT" />,
          },
        },
        {
          path: ':clientRowId',
          loader: (match) => ({
            clientsDetailsPageQuery: loadQuery<ClientsDetailsPageQuery>(
              environment,
              clientsDetailsPageQuery,
              { rowId: match.params.clientRowId },
            ),
          }),
          unloader: (match) => {
            match.data.clientsDetailsPageQuery?.dispose();
          },
          meta: {
            breadcrumb: (data) => (
              <ClientsDetailsPageBreadcrumb query={data.clientsDetailsPageQuery!} />
            ),
          },
          children: [
            {
              path: '/',
              element: () =>
                import('core/pages/ClientsPage/ClientsDetailsPage').then(
                  ({ ClientsDetailsPage }) => <ClientsDetailsPage />,
                ),
            },
            ...(viewer.isAdmin || viewer.isTherapist ? getCaseStudiesRoutes() : []),
            {
              element: <NotFound />,
            },
          ],
        },
        {
          element: <NotFound />,
        },
      ],
    },
  ];
}

function getCaseStudiesRoutes(): Route<LocationGenerics>[] {
  return [
    {
      path: 'case-studies',
      children: [
        {
          path: '/',
          element: <NotFound />,
        },
        {
          path: 'create',
          loader: (match) => ({
            clientsCaseStudiesCreatePageQuery: loadQuery<ClientsCaseStudiesCreatePageQuery>(
              environment,
              clientsCaseStudiesCreatePageQuery,
              {
                clientRowId: uuidOrEmpty(match.params.clientRowId),
              },
              { fetchPolicy: 'network-only' }, // always get the latest info for creating case studies
            ),
          }),
          unloader: (match) => {
            match.data.clientsCaseStudiesCreatePageQuery?.dispose();
          },
          element: () =>
            import(
              'core/pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesCreatePage'
            ).then(({ ClientsCaseStudiesCreatePage }) => <ClientsCaseStudiesCreatePage />),
          meta: {
            breadcrumb: () => <FormattedMessage id="NEW_CASE_STUDY" />,
          },
        },
        {
          path: ':caseStudyRowId',
          loader: (match) => ({
            clientsCaseStudiesDetailsPageQuery: loadQuery<ClientsCaseStudiesDetailsPageQuery>(
              environment,
              clientsCaseStudiesDetailsPageQuery,
              {
                clientRowId: uuidOrEmpty(match.params.clientRowId),
                caseStudyRowId: uuidOrEmpty(match.params.caseStudyRowId),
              },
            ),
          }),
          unloader: (match) => {
            match.data.clientsCaseStudiesDetailsPageQuery?.dispose();
          },
          meta: {
            breadcrumb: (data) => (
              <ClientsCaseStudiesDetailsPageBreadcrumb
                query={data.clientsCaseStudiesDetailsPageQuery!}
              />
            ),
          },
          children: [
            {
              path: '/',
              element: () =>
                import(
                  'core/pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesDetailsPage'
                ).then(({ ClientsCaseStudiesDetailsPage }) => <ClientsCaseStudiesDetailsPage />),
            },
            {
              path: 'treatments/create',
              loader: (match) => ({
                clientsCaseStudiesTreatmentsCreatePageQuery:
                  loadQuery<ClientsCaseStudiesTreatmentsCreatePageQuery>(
                    environment,
                    clientsCaseStudiesTreatmentsCreatePageQuery,
                    {
                      caseStudyRowId: uuidOrEmpty(match.params.caseStudyRowId),
                    },
                  ),
              }),
              unloader: (match) => {
                match.data.clientsCaseStudiesTreatmentsCreatePageQuery?.dispose();
              },
              element: () =>
                import(
                  'core/pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesTreatmentsCreatePage'
                ).then(({ ClientsCaseStudiesTreatmentsCreatePage }) => (
                  <ClientsCaseStudiesTreatmentsCreatePage />
                )),
              meta: {
                breadcrumb: () => <FormattedMessage id="NEW_CASE_STUDY_TREATMENT" />,
              },
            },
            {
              path: 'treatments/:treatmentRowId',
              loader: (match) => ({
                clientsCaseStudiesTreatmentsDetailsPageQuery:
                  loadQuery<ClientsCaseStudiesTreatmentsDetailsPageQuery>(
                    environment,
                    clientsCaseStudiesTreatmentsDetailsPageQuery,
                    {
                      caseStudyRowId: uuidOrEmpty(match.params.caseStudyRowId),
                      treatmentRowId: uuidOrEmpty(match.params.treatmentRowId),
                    },
                  ),
              }),
              unloader: (match) => {
                match.data.clientsCaseStudiesTreatmentsDetailsPageQuery?.dispose();
              },
              element: () =>
                import(
                  'core/pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesTreatmentsDetailsPage'
                ).then(({ ClientsCaseStudiesTreatmentsDetailsPage }) => (
                  <ClientsCaseStudiesTreatmentsDetailsPage />
                )),
              meta: {
                breadcrumb: (data) => (
                  <ClientsCaseStudiesTreatmentsDetailsPageBreadcrumb
                    query={data.clientsCaseStudiesTreatmentsDetailsPageQuery!}
                  />
                ),
              },
            },
            {
              path: 'conclusion/create',
              loader: (match) => ({
                clientsCaseStudiesConclusionCreatePageQuery:
                  loadQuery<ClientsCaseStudiesConclusionCreatePageQuery>(
                    environment,
                    clientsCaseStudiesConclusionCreatePageQuery,
                    {
                      caseStudyRowId: uuidOrEmpty(match.params.caseStudyRowId),
                    },
                  ),
              }),
              unloader: (match) => {
                match.data.clientsCaseStudiesConclusionCreatePageQuery?.dispose();
              },
              element: () =>
                import(
                  'core/pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesConclusionCreatePage'
                ).then(({ ClientsCaseStudiesConclusionCreatePage }) => (
                  <ClientsCaseStudiesConclusionCreatePage />
                )),
              meta: {
                breadcrumb: (data) => (
                  <ClientsCaseStudiesConclusionCreatePageBreadcrumb
                    query={data.clientsCaseStudiesConclusionCreatePageQuery!}
                  />
                ),
              },
            },
            {
              path: 'conclusion/:conclusionRowId',
              loader: (match) => ({
                clientsCaseStudiesConclusionDetailsPageQuery:
                  loadQuery<ClientsCaseStudiesConclusionDetailsPageQuery>(
                    environment,
                    clientsCaseStudiesConclusionDetailsPageQuery,
                    {
                      caseStudyRowId: uuidOrEmpty(match.params.caseStudyRowId),
                      conclusionRowId: uuidOrEmpty(match.params.conclusionRowId),
                    },
                  ),
              }),
              unloader: (match) => {
                match.data.clientsCaseStudiesConclusionDetailsPageQuery?.dispose();
              },
              element: () =>
                import(
                  'core/pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesConclusionDetailsPage'
                ).then(({ ClientsCaseStudiesConclusionDetailsPage }) => (
                  <ClientsCaseStudiesConclusionDetailsPage />
                )),
              meta: {
                breadcrumb: (data) => (
                  <ClientsCaseStudiesConclusionDetailsPageBreadcrumb
                    query={data.clientsCaseStudiesConclusionDetailsPageQuery!}
                  />
                ),
              },
            },
            {
              path: 'forms',
              meta: {
                breadcrumb: () => <FormattedMessage id="FORMS" />,
                breadcrumbNoLink: true,
              },
              children: [
                {
                  path: 'fill/:formId',
                  loader: (match) => ({
                    clientsCaseStudiesFormsFillPageQuery:
                      loadQuery<ClientsCaseStudiesFormsFillPageQuery>(
                        environment,
                        clientsCaseStudiesFormsFillPageQuery,
                        {
                          formRowId: uuidOrEmpty(match.params.formId),
                        },
                      ),
                  }),
                  unloader: (match) => {
                    match.data.clientsCaseStudiesFormsFillPageQuery?.dispose();
                  },
                  element: () =>
                    import(
                      'core/pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesFormsPage/ClientsCaseStudiesFormsFillPage'
                    ).then(({ ClientsCaseStudiesFormsFillPage }) => (
                      <ClientsCaseStudiesFormsFillPage />
                    )),
                  meta: {
                    breadcrumb: (data) => (
                      <ClientsCaseStudiesFormsFillPageBreadcrumb
                        query={data.clientsCaseStudiesFormsFillPageQuery!}
                      />
                    ),
                  },
                },
                {
                  path: 'response/:formResponseId',
                  loader: (match) => ({
                    clientsCaseStudiesFormsResponsePageQuery:
                      loadQuery<ClientsCaseStudiesFormsResponsePageQuery>(
                        environment,
                        clientsCaseStudiesFormsResponsePageQuery,
                        {
                          formResponseRowId: uuidOrEmpty(match.params.formResponseId),
                        },
                      ),
                  }),
                  unloader: (match) => {
                    match.data.clientsCaseStudiesFormsResponsePageQuery?.dispose();
                  },
                  element: () =>
                    import(
                      'core/pages/ClientsPage/ClientsCaseStudiesPage/ClientsCaseStudiesFormsPage/ClientsCaseStudiesFormsResponsePage'
                    ).then(({ ClientsCaseStudiesFormsResponsePage }) => (
                      <ClientsCaseStudiesFormsResponsePage />
                    )),
                  meta: {
                    breadcrumb: (data) => (
                      <ClientsCaseStudiesFormsResponsePageBreadcrumb
                        query={data.clientsCaseStudiesFormsResponsePageQuery!}
                      />
                    ),
                  },
                },
                {
                  element: <NotFound />,
                },
              ],
            },
            {
              element: <NotFound />,
            },
          ],
        },
        {
          element: <NotFound />,
        },
      ],
    },
  ];
}

function getTherapistsRoutes(): Route<LocationGenerics>[] {
  return [
    {
      path: 'therapists',
      loader: (match) => ({
        therapistsPageQuery: loadQuery<TherapistsPageQuery>(environment, therapistsPageQuery, {
          q: match.search.q,
          count: parseInt(match.search.count || '20'),
        }),
      }),
      unloader: (match) => {
        match.data.therapistsPageQuery?.dispose();
      },
      meta: {
        breadcrumb: () => <FormattedMessage id="THERAPISTS" />,
      },
      children: [
        {
          path: '/',
          element: () =>
            import('core/pages/TherapistsPage').then(({ TherapistsPage }) => <TherapistsPage />),
        },
        {
          path: 'create',
          loader: () => ({
            therapistsCreatePageQuery: loadQuery<TherapistsCreatePageQuery>(
              environment,
              therapistsCreatePageQuery,
              {},
              { fetchPolicy: 'network-only' }, // always get the latest info for creating therapists
            ),
          }),
          unloader: (match) => {
            match.data.therapistsCreatePageQuery?.dispose();
          },
          element: () =>
            import('core/pages/TherapistsPage/TherapistsCreatePage').then(
              ({ TherapistsCreatePage }) => <TherapistsCreatePage />,
            ),
          meta: {
            breadcrumb: () => <FormattedMessage id="NEW_THERAPIST" />,
          },
        },
        {
          path: ':therapistRowId',
          loader: (match) => ({
            therapistsDetailsPageQuery: loadQuery<TherapistsDetailsPageQuery>(
              environment,
              therapistsDetailsPageQuery,
              { rowId: match.params.therapistRowId },
            ),
          }),
          unloader: (match) => {
            match.data.therapistsDetailsPageQuery?.dispose();
          },
          element: () =>
            import('core/pages/TherapistsPage/TherapistsDetailsPage').then(
              ({ TherapistsDetailsPage }) => <TherapistsDetailsPage />,
            ),
          meta: {
            breadcrumb: (data) => (
              <TherapistsDetailsPageBreadcrumb query={data.therapistsDetailsPageQuery!} />
            ),
          },
        },
        {
          element: <NotFound />,
        },
      ],
    },
  ];
}
