/**
 *
 * ClientsTable
 *
 */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { graphql, usePaginationFragment } from 'react-relay';

import { Link, useNavigate, useSearch } from '@tanstack/react-location';

import { Tooltip } from 'lib/Tooltip';

import { LocationGenerics } from 'core/location';

import { ClientsTableRefetchQuery } from './__generated__/ClientsTableRefetchQuery.graphql';
import { ClientsTable_query$key } from './__generated__/ClientsTable_query.graphql';

graphql`
  fragment ClientsTable_client on Client {
    rowId
    number
    fullName
    latestAssignedTherapist {
      therapist: therapistByTherapistRowId @required(action: THROW) {
        rowId
        fullName
      }
    }
    treatments: caseStudyTreatmentsByCaseStudiesClientRowId {
      totalCount
    }
    caseStudiesAsc: caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {
      nodes {
        rowId
        title
        concluded
      }
    }
  }
`;

export interface ClientsTableProps {
  query: ClientsTable_query$key;
}

export const ClientsTable: React.FC<ClientsTableProps> = (props) => {
  const navigate = useNavigate<LocationGenerics>();
  const params = useSearch<LocationGenerics>();
  const count = parseInt(params.count || '20');

  const {
    data: { filterClients },
    hasNext,
    refetch,
    loadNext,
    isLoadingNext,
  } = usePaginationFragment<ClientsTableRefetchQuery, ClientsTable_query$key>(
    graphql`
      fragment ClientsTable_query on Query
      @refetchable(queryName: "ClientsTableRefetchQuery")
      @argumentDefinitions(
        # pagination
        count: { type: "Int!" }
        cursor: { type: "Cursor" }
        # filters
        q: { type: "String" }
      ) {
        filterClients(
          # pagination
          first: $count
          after: $cursor
          orderBy: NUMBER_DESC
          # filters
          searchText: $q
        ) @required(action: THROW) @connection(key: "ClientsTable_filterClients") {
          totalCount
          edges {
            node {
              ...ClientsTable_client @relay(mask: false)
            }
          }
        }
      }
    `,
    props.query,
  );

  useEffect(() => {
    // all variables are explicitly specified because when missing, relay will use the previous ones
    refetch({ count, q: params.q });
  }, [params]);

  const { register, handleSubmit } = useForm<{ q: string }>({
    defaultValues: { q: params.q || '' },
  });

  return (
    <div className="content">
      <form
        onSubmit={handleSubmit(({ q }) => {
          navigate({
            search: { q: q || undefined },
          });
        })}
      >
        <div className="input-group">
          <FormattedMessage id="ENTER_SEARCH_TEXT_HERE">
            {([msg]) => (
              <input
                {...register('q')}
                autoFocus
                type="search"
                placeholder={msg + '...'}
                className="form-control"
              />
            )}
          </FormattedMessage>
          <div className="input-group-append">
            <button type="submit" className="btn">
              <i className="fa-solid fa-magnifying-glass"></i>
              &nbsp;
              <FormattedMessage id="SEARCH" />
            </button>
          </div>
        </div>
      </form>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <i className="fa-solid fa-arrow-down text-muted"></i>
              &nbsp;
              <i className="fa-solid fa-hashtag"></i>
            </th>
            <th>
              <FormattedMessage id="FULL_NAME" />
            </th>
            <th>
              <FormattedMessage id="ASSIGNED_THERAPIST" />
            </th>
            <th className="text-right">
              <FormattedMessage id="CASE_STUDIES" />
            </th>
          </tr>
        </thead>
        <tbody>
          {filterClients.edges.map(({ node }) => (
            <tr key={node.rowId}>
              <th>{node.number}</th>
              <td>
                <Link to={node.rowId} search>
                  {node.fullName}
                </Link>
              </td>
              <td>
                {node.latestAssignedTherapist && (
                  <Link to={`/therapists/${node.latestAssignedTherapist.therapist.rowId}`} search>
                    {node.latestAssignedTherapist.therapist.fullName}
                  </Link>
                )}
              </td>
              <td className="text-right">
                {node.caseStudiesAsc.nodes.map(({ rowId, title, concluded }) => (
                  <Tooltip key={rowId} content={title}>
                    <Link
                      to={`/clients/${node.rowId}/case-studies/${rowId}`}
                      search
                      className={'ml-5' + (concluded ? ' text-secondary' : '')}
                    >
                      {concluded ? (
                        <i className="fa-solid fa-lock"></i>
                      ) : (
                        <i className="fa-solid fa-lock-open"></i>
                      )}
                    </Link>
                  </Tooltip>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Table navigation">
        <div className="row my-20 align-items-center justify-content-end">
          <div className="col-auto mr-20">
            <p className="text-muted">
              <FormattedMessage
                id="SHOWING_N_OUT_OF_X_RESULTS"
                values={{
                  count: filterClients.edges.length,
                  totalCount: filterClients.totalCount,
                }}
              />
            </p>
          </div>
          <div className="col-auto">
            <button
              type="button"
              onClick={() => loadNext(count)}
              className="btn"
              disabled={isLoadingNext || !hasNext}
              aria-disabled={isLoadingNext || !hasNext}
            >
              <i className="fa fa-angle-down" aria-hidden="true"></i>
              &nbsp;
              <span>
                <FormattedMessage id="LOAD_MORE" />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};
