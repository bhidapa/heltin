/**
 *
 * UsersTable
 *
 */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { graphql, usePaginationFragment } from 'react-relay';

import { Link, useNavigate, useSearch } from '@tanstack/react-location';

import { LocationGenerics } from 'core/location';

import { UsersTableRefetchQuery } from './__generated__/UsersTableRefetchQuery.graphql';
import { UsersTable_query$key } from './__generated__/UsersTable_query.graphql';

graphql`
  fragment UsersTable_user on User {
    rowId
    isAdmin
    email
    enabled
  }
`;

export interface UsersTableProps {
  query: UsersTable_query$key;
}

export const UsersTable: React.FC<UsersTableProps> = (props) => {
  const navigate = useNavigate<LocationGenerics>();
  const params = useSearch<LocationGenerics>();
  const count = parseInt(params.count || '20');

  const {
    data: { filterUsers },
    hasNext,
    refetch,
    loadNext,
    isLoadingNext,
  } = usePaginationFragment<UsersTableRefetchQuery, UsersTable_query$key>(
    graphql`
      fragment UsersTable_query on Query
      @refetchable(queryName: "UsersTableRefetchQuery")
      @argumentDefinitions(
        # pagination
        count: { type: "Int!" }
        cursor: { type: "Cursor" }
        # filters
        q: { type: "String" }
      ) {
        filterUsers(
          # pagination
          first: $count
          after: $cursor
          # filters
          searchText: $q
        ) @required(action: THROW) @connection(key: "UsersTable_filterUsers") {
          totalCount
          edges {
            node {
              ...UsersTable_user @relay(mask: false)
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
              <FormattedMessage id="TYPE" />
            </th>
            <th>
              <FormattedMessage id="EMAIL" />
            </th>
            <th className="text-right">
              <FormattedMessage id="ENABLED" />
            </th>
          </tr>
        </thead>
        <tbody>
          {filterUsers.edges.map(({ node }) => (
            <tr key={node.rowId}>
              {node.isAdmin ? (
                <th>
                  <FormattedMessage id="ADMINISTRATOR" />
                </th>
              ) : (
                <td>
                  <FormattedMessage id="USER" />
                </td>
              )}
              <td>
                <Link to={node.rowId} search>
                  {node.email}
                </Link>
              </td>
              <td className="text-right">
                {node.enabled ? (
                  <i className="fa-solid fa-circle-check text-primary"></i>
                ) : (
                  <i className="fa-solid fa-xmark text-muted"></i>
                )}
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
                  count: filterUsers.edges.length,
                  totalCount: filterUsers.totalCount,
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
