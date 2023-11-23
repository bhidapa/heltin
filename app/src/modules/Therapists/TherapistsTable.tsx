/**
 *
 * TherapistsTable
 *
 */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { graphql, usePaginationFragment } from 'react-relay';
import { Link, useNavigate, useSearch } from '@tanstack/react-location';
import { Tooltip } from 'lib/Tooltip';
import { LocationGenerics } from 'core/location';
import { TherapistsTable_query$key } from './__generated__/TherapistsTable_query.graphql';
import { TherapistsTableRefetchQuery } from './__generated__/TherapistsTableRefetchQuery.graphql';

graphql`
  fragment TherapistsTable_therapist on Therapist {
    rowId
    type
    fullName
    enabled
  }
`;

export interface TherapistsTableProps {
  query: TherapistsTable_query$key;
}

export const TherapistsTable: React.FC<TherapistsTableProps> = (props) => {
  const navigate = useNavigate<LocationGenerics>();
  const params = useSearch<LocationGenerics>();
  const count = parseInt(params.count || '20');

  const {
    data: { filterTherapists },
    hasNext,
    refetch,
    loadNext,
    isLoadingNext,
  } = usePaginationFragment<TherapistsTableRefetchQuery, TherapistsTable_query$key>(
    graphql`
      fragment TherapistsTable_query on Query
      @refetchable(queryName: "TherapistsTableRefetchQuery")
      @argumentDefinitions(
        # pagination
        count: { type: "Int!" }
        cursor: { type: "Cursor" }
        # filters
        q: { type: "String" }
      ) {
        filterTherapists(
          # pagination
          first: $count
          after: $cursor
          # filters
          searchText: $q
        ) @required(action: THROW) @connection(key: "TherapistsTable_filterTherapists") {
          totalCount
          edges {
            node {
              ...TherapistsTable_therapist @relay(mask: false)
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
              <FormattedMessage id="FULL_NAME" />
            </th>
            <th className="text-right">
              <Tooltip content={<FormattedMessage id="IS_THERAPIST_VISIBLE_IN_HELTIN" />}>
                <span>
                  <FormattedMessage id="VISIBLE" />
                </span>
              </Tooltip>
            </th>
          </tr>
        </thead>
        <tbody>
          {filterTherapists.edges.map(({ node }) => (
            <tr key={node.rowId}>
              <th>{node.type || <>&mdash;</>}</th>
              <td>
                <Link to={node.rowId} search>
                  {node.fullName}
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
                  count: filterTherapists.edges.length,
                  totalCount: filterTherapists.totalCount,
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
