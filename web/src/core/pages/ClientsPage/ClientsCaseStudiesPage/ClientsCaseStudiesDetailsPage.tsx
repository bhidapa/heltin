/**
 *
 * ClientsCaseStudiesDetailsPage
 *
 */
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import { graphql, useFragment, usePreloadedQuery } from 'react-relay';

import { Link, useMatch } from '@tanstack/react-location';

import { Dropdown } from 'lib/Dropdown';
import { NotFound } from 'lib/NotFound';

import { BackButton, Breadcrumbs, LocationGenerics } from 'core/location';

import { CaseStudyAssignedTherapistsManage } from 'modules/CaseStudy/CaseStudyAssignedTherapistsManage';
import { CaseStudyManage } from 'modules/CaseStudy/CaseStudyManage';
import { EventsTable } from 'modules/EventsTable';

import { ClientsCaseStudiesDetailsPage_caseStudy$key } from './__generated__/ClientsCaseStudiesDetailsPage_caseStudy.graphql';

export interface ClientsCaseStudiesDetailsPageProps {}

export const ClientsCaseStudiesDetailsPage: React.FC<ClientsCaseStudiesDetailsPageProps> = () => {
  const match = useMatch<LocationGenerics>();

  const { client, filterForms, ...query } = usePreloadedQuery(
    graphql`
      query ClientsCaseStudiesDetailsPageQuery($clientRowId: UUID!, $caseStudyRowId: UUID!) {
        client: clientByRowId(rowId: $clientRowId) {
          rowId
          fullName
          ...CaseStudyManage_client
        }
        caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {
          title
          ...ClientsCaseStudiesDetailsPage_caseStudy
        }
        filterForms {
          nodes {
            rowId
            name
          }
        }
        ...CaseStudyAssignedTherapistsManage_query
      }
    `,
    match.data.clientsCaseStudiesDetailsPageQuery!,
  );

  const caseStudy = useFragment<ClientsCaseStudiesDetailsPage_caseStudy$key>(
    graphql`
      fragment ClientsCaseStudiesDetailsPage_caseStudy on CaseStudy {
        rowId
        title
        clientRowId
        concluded
        ...CaseStudyManage_caseStudy
        ...CaseStudyAssignedTherapistsManage_casyStudy
        sortedEvents {
          nodes {
            ...EventsTable_events
          }
        }
      }
    `,
    query.caseStudy,
  );

  if (!client || !caseStudy) {
    return <NotFound />;
  }
  if (client.rowId !== caseStudy.clientRowId) {
    throw new Error('Case study does not belong to the client');
  }

  return (
    <div className="container">
      <Helmet title={client.fullName + ' - ' + caseStudy.title} />

      <div className="row row-eq-spacing align-items-center">
        <div className="col-auto">
          <BackButton />
        </div>

        <div className="col">
          <Breadcrumbs rightAlign />
        </div>
      </div>

      <CaseStudyManage client={client} caseStudy={caseStudy} />

      <div className="content">
        <hr />
      </div>

      <CaseStudyAssignedTherapistsManage query={query} caseStudy={caseStudy} />

      <div className="content">
        <hr />
      </div>

      <div className="content">
        <div className="row mb-20 align-items-center">
          <div className="col-auto">
            <h4 className="card-title m-0">
              <FormattedMessage id="TIMELINE" />
            </h4>
          </div>

          {!caseStudy.concluded && (
            <div className="col">
              {/* flex-wrap-reverse so that "new treatment" is on above "conclude" when stacked */}
              <div className="row flex-wrap-reverse justify-content-end align-items-center">
                <div className="col-auto mr-0 mr-md-20">
                  <Link
                    to={`/clients/${client.rowId}/case-studies/${caseStudy.rowId}/conclusion/create`}
                    search
                    className="btn btn-secondary"
                  >
                    <i className="fa-solid fa-clipboard-check"></i>
                    &nbsp;
                    <FormattedMessage id="CONCLUDE" />
                  </Link>
                </div>

                <div className="form-v-spacer hidden-md-and-up" />

                <div className="col-auto">
                  <div className="btn-group" role="group">
                    <Dropdown
                      content={
                        <>
                          <h6 className="dropdown-header">
                            <FormattedMessage id="AVAILABLE_FORMS" />
                          </h6>
                          {filterForms?.nodes.map((node) => (
                            <Link
                              key={node.rowId}
                              to={`forms/fill/${node.rowId}`}
                              search
                              className="dropdown-item"
                            >
                              {node.name}
                            </Link>
                          ))}
                        </>
                      }
                    >
                      {(trigger) => (
                        <button type="button" className="btn" onClick={trigger}>
                          <i className="fa-solid fa-file-pen"></i>
                          &nbsp;
                          <FormattedMessage id="FILL_FORM" />
                        </button>
                      )}
                    </Dropdown>

                    <Link
                      to={`/clients/${client.rowId}/case-studies/${caseStudy.rowId}/treatments/create`}
                      search
                      className="btn btn-primary"
                    >
                      <i className="fa-solid fa-hand-holding-medical"></i>
                      &nbsp;
                      <FormattedMessage id="NEW_CASE_STUDY_TREATMENT" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <EventsTable
          events={caseStudy.sortedEvents.nodes}
          hideCaption // there's already a title
        />
      </div>
    </div>
  );
};
