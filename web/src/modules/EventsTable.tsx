/**
 *
 * EventsTable
 *
 */
import React from 'react';
import { FormattedMessage, FormattedTime } from 'react-intl';
import { graphql, useFragment } from 'react-relay';

import { Link, useMatch } from '@tanstack/react-location';

import { Tooltip } from 'lib/Tooltip';

import { FormattedDateTime } from 'intl/FormattedDateTime';

import { LocationGenerics } from 'core/location';

import { EventsTable_events$key } from './__generated__/EventsTable_events.graphql';

export interface EventsTableProps {
  events: EventsTable_events$key;
  hideCaption?: boolean;
}

export const EventsTable: React.FC<EventsTableProps> = (props) => {
  const { events: eventsRef, hideCaption } = props;

  const match = useMatch<LocationGenerics>();

  const events = useFragment(
    graphql`
      fragment EventsTable_events on Event @relay(plural: true) {
        id
        type

        clientRowId

        caseStudy: caseStudyByCaseStudyRowId {
          rowId
          title
          createdAt
        }

        formResponse: formResponseByFormResponseRowId {
          rowId
          form: formByFormRowId {
            name
          }
          createdAt
        }

        treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {
          rowId
          title
          startedAt
          endedAt
        }

        conclusion: caseStudyConclusionByCaseStudyConclusionRowId {
          rowId
          type
          concludedAt
        }
      }
    `,
    eventsRef,
  );

  return (
    <table className="table table-striped">
      <caption className={'text-left' + (hideCaption ? ' sr-only' : '')}>
        <FormattedMessage id="TIMELINE" />
      </caption>
      <thead>
        <tr>
          <th className="w-25">
            <i className="fa-solid fa-clock"></i>
          </th>
          <th>
            <FormattedMessage id="TITLE" />
          </th>
          <th className="text-right">
            <i className="fa-solid fa-arrow-down text-muted"></i>
            &nbsp;
            <FormattedMessage id="TIME" />
          </th>
        </tr>
      </thead>
      <tbody>
        {events.map((event) => {
          switch (event.type) {
            case 'CREATE_CASE_STUDY': {
              const pathname = `/clients/${event.clientRowId}/case-studies/${
                event.caseStudy!.rowId
              }`;
              return (
                <tr key={event.id}>
                  <td>
                    <Tooltip content={<FormattedMessage id="NEW_CASE_STUDY" />}>
                      <i className="fa-solid fa-file-medical"></i>
                    </Tooltip>
                  </td>
                  <td>
                    {match.pathname.includes(pathname) ? (
                      <>
                        {event.caseStudy!.title}
                        &nbsp;
                        <small className="text-muted" style={{ textTransform: 'lowercase' }}>
                          (<FormattedMessage id="THIS_CASE_STUDY" />)
                        </small>
                      </>
                    ) : (
                      <Link to={pathname} search>
                        {event.caseStudy!.title}
                      </Link>
                    )}
                  </td>
                  <td className="text-right">
                    <FormattedDateTime value={event.caseStudy!.createdAt} />
                  </td>
                </tr>
              );
            }

            case 'FORM_RESPONSE':
              return (
                <tr key={event.id}>
                  <td>
                    <Tooltip content={<FormattedMessage id="FORM_FILLED" />}>
                      <i className="fa-solid fa-file-pen"></i>
                    </Tooltip>
                  </td>
                  <td>
                    <Link
                      to={`/clients/${event.clientRowId}/case-studies/${
                        event.caseStudy!.rowId
                      }/forms/response/${event.formResponse!.rowId}`}
                      search
                    >
                      {event.formResponse!.form?.name || <>&mdash;</>}
                    </Link>
                  </td>
                  <td className="text-right">
                    <FormattedDateTime value={event.formResponse!.createdAt} />
                  </td>
                </tr>
              );

            case 'CREATE_CASE_STUDY_TREATMENT': {
              const sameDayStartedAndEnded =
                event.treatment?.startedAt.split('T')[0] === event.treatment?.endedAt.split('T')[0];
              return (
                <tr key={event.id}>
                  <td>
                    <Tooltip content={<FormattedMessage id="TREATMENT" />}>
                      <i className="fa-solid fa-hand-holding-medical"></i>
                    </Tooltip>
                  </td>
                  <td>
                    <Link
                      to={`/clients/${event.clientRowId}/case-studies/${
                        event.caseStudy!.rowId
                      }/treatments/${event.treatment!.rowId}`}
                      search
                    >
                      {event.treatment!.title}
                    </Link>
                  </td>
                  <td className="text-right">
                    <FormattedDateTime value={event.treatment!.startedAt} />
                    &nbsp;&mdash;&nbsp;
                    {sameDayStartedAndEnded ? (
                      <FormattedTime value={event.treatment!.endedAt} />
                    ) : (
                      <FormattedDateTime value={event.treatment!.endedAt} />
                    )}
                  </td>
                </tr>
              );
            }

            case 'CONCLUDE_CASE_STUDY': {
              return (
                <tr key={event.id}>
                  <td>
                    <Tooltip content={<FormattedMessage id="CONCLUSION" />}>
                      <i className="fa-solid fa-clipboard-check"></i>
                    </Tooltip>
                  </td>
                  <td>
                    <Link
                      to={`/clients/${event.clientRowId}/case-studies/${
                        event.caseStudy!.rowId
                      }/conclusion/${event.conclusion!.rowId}`}
                      search
                    >
                      <FormattedMessage id={event.conclusion!.type} />
                    </Link>
                  </td>
                  <td className="text-right">
                    <FormattedDateTime value={event.conclusion!.concludedAt} />
                  </td>
                </tr>
              );
            }
            default:
              return (
                <tr key={event.id}>
                  <td>{event.type}</td>
                </tr>
              );
          }
        })}
      </tbody>
      {events.length === 0 && (
        <tfoot>
          <tr>
            <th></th>
            <th className="text-muted">
              <FormattedMessage id="NO_ACTIVITIES" />
            </th>
          </tr>
        </tfoot>
      )}
    </table>
  );
};
