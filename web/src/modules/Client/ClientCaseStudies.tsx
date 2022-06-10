/**
 *
 * ClientCaseStudies
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql, useFragment } from 'react-relay';

import { Link } from '@tanstack/react-location';

import { Dropdown } from 'lib/Dropdown';
import { Tooltip } from 'lib/Tooltip';

import { EventsTable } from 'modules/EventsTable';

import { ClientCaseStudies_client$key } from './__generated__/ClientCaseStudies_client.graphql';
import { ClientCaseStudies_forms$key } from './__generated__/ClientCaseStudies_forms.graphql';

export interface ClientCaseStudiesProps {
  client: ClientCaseStudies_client$key;
  forms: ClientCaseStudies_forms$key;
}

export const ClientCaseStudies: React.FC<ClientCaseStudiesProps> = (props) => {
  const { client: clientRef, forms: formsRef } = props;

  const client = useFragment(
    graphql`
      fragment ClientCaseStudies_client on Client {
        rowId
        caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {
          nodes {
            id
            rowId
            title
            concluded
            conclusion: caseStudyConclusionByCaseStudyRowId {
              type
            }
            sortedEvents {
              nodes {
                ...EventsTable_events
              }
            }
          }
        }
      }
    `,
    clientRef,
  );

  const forms = useFragment(
    graphql`
      fragment ClientCaseStudies_forms on Form @relay(plural: true) {
        rowId
        name
      }
    `,
    formsRef,
  );

  return (
    <div className="content">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="content-title mb-0">
            <FormattedMessage id="CASE_STUDIES" />
          </h3>
        </div>
        <div className="col col-auto">
          <Link to="case-studies/create" search className="btn btn-primary">
            <i className="fa-solid fa-plus"></i>
            &nbsp;
            <FormattedMessage id="NEW_CASE_STUDY" />
          </Link>
        </div>
      </div>

      {client.caseStudies.nodes.length === 0 ? (
        <div className="row">
          <p className="text-muted">
            <FormattedMessage id="NO_ENTRIES" />
          </p>
        </div>
      ) : (
        client.caseStudies.nodes.map((caseStudy) => (
          <div key={caseStudy.id} className="card mx-0">
            <div className="row mb-20 align-items-center">
              <div className="col">
                <h4 className="card-title m-0">
                  <Link to={`case-studies/${caseStudy.rowId}`} search>
                    {caseStudy.title}
                  </Link>
                </h4>
              </div>

              {caseStudy.conclusion ? (
                <div className="col text-right">
                  <Tooltip content={<FormattedMessage id={caseStudy.conclusion.type} />}>
                    <i className="fa-solid fa-clipboard-check text-primary font-size-20"></i>
                  </Tooltip>
                </div>
              ) : (
                <div className="col">
                  {/* flex-wrap-reverse so that "new treatment" is on above "conclude" when stacked */}
                  <div className="row flex-wrap-reverse justify-content-end align-items-center">
                    <div className="col-auto mr-0 mr-md-20">
                      <Link
                        to={`case-studies/${caseStudy.rowId}/conclusion/create`}
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
                              {forms.map((node) => (
                                <Link
                                  key={node.rowId}
                                  to={`case-studies/${caseStudy.rowId}/forms/fill/${node.rowId}`}
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
                          to={`case-studies/${caseStudy.rowId}/treatments/create`}
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

            <EventsTable events={caseStudy.sortedEvents.nodes} />
          </div>
        ))
      )}
    </div>
  );
};
