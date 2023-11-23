/**
 *
 * ClientAssignedTherapistsManage
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql, useFragment } from 'react-relay';
import { Link } from '@tanstack/react-location';
import { usePromiseMutation } from 'lib/relay';
import { addToast, deleteToast } from 'lib/toasts';
import { useConfirm } from 'lib/useConfirm';
import { AutocompleteTherapist } from 'modules/Autocomplete/AutocompleteTherapist';
import { ClientAssignedTherapistsManage_client$key } from './__generated__/ClientAssignedTherapistsManage_client.graphql';
import { ClientAssignedTherapistsManage_query$key } from './__generated__/ClientAssignedTherapistsManage_query.graphql';
import { ClientAssignedTherapistsManageCreateMutation } from './__generated__/ClientAssignedTherapistsManageCreateMutation.graphql';
import { ClientAssignedTherapistsManageDeleteMutation } from './__generated__/ClientAssignedTherapistsManageDeleteMutation.graphql';

export interface ClientAssignedTherapistsManageProps {
  query: ClientAssignedTherapistsManage_query$key;
  client: ClientAssignedTherapistsManage_client$key;
}

export const ClientAssignedTherapistsManage: React.FC<ClientAssignedTherapistsManageProps> = (
  props,
) => {
  const { query: queryRef, client: clientRef } = props;

  const { confirmDelete } = useConfirm();

  const query = useFragment(
    graphql`
      fragment ClientAssignedTherapistsManage_query on Query {
        ...AutocompleteTherapist_query
      }
    `,
    queryRef,
  );

  const client = useFragment(
    graphql`
      fragment ClientAssignedTherapistsManage_client on Client {
        rowId
        assignedTherapists: clientAssignedTherapistsByClientRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            id
            rowId
            therapist: therapistByTherapistRowId @required(action: THROW) {
              rowId
              type
              fullName
            }
            createdAt
          }
        }
        # keep list view up to date
        latestAssignedTherapist: latestAssignedTherapist {
          therapist: therapistByTherapistRowId {
            fullName
          }
        }
      }
    `,
    clientRef,
  );

  const [assignTherapist] = usePromiseMutation<ClientAssignedTherapistsManageCreateMutation>(
    graphql`
      mutation ClientAssignedTherapistsManageCreateMutation(
        $input: CreateClientAssignedTherapistInput!
      ) {
        createClientAssignedTherapist(input: $input) {
          clientByClientRowId {
            ...ClientAssignedTherapistsManage_client
          }
        }
      }
    `,
  );

  const [deleteAssignedTherapist] =
    usePromiseMutation<ClientAssignedTherapistsManageDeleteMutation>(graphql`
      mutation ClientAssignedTherapistsManageDeleteMutation(
        $input: DeleteClientAssignedTherapistInput!
      ) {
        deleteClientAssignedTherapist(input: $input) {
          clientByClientRowId {
            ...ClientAssignedTherapistsManage_client
          }
        }
      }
    `);

  return (
    <div className="content">
      <h3 className="content-title">
        <FormattedMessage id="ASSIGNED_THERAPISTS" />
      </h3>
      <p className="text-muted">
        <FormattedMessage id="ASSIGNED_THERAPISTS_DESCRIPTION" />
      </p>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>
              <FormattedMessage id="THERAPIST" />
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {client.assignedTherapists.nodes.map((assignedTherapist) => (
            <tr key={assignedTherapist.id}>
              <td>
                <Link to={`/therapists/${assignedTherapist.therapist.rowId}`} search>
                  {assignedTherapist.therapist.fullName}
                </Link>
              </td>
              <td className="text-right">
                <button
                  type="button"
                  className="btn btn-link text-danger"
                  onClick={() => {
                    if (confirmDelete()) {
                      deleteToast(
                        deleteAssignedTherapist({
                          variables: {
                            input: {
                              rowId: assignedTherapist.rowId,
                            },
                          },
                          updater: (store) => {
                            store.invalidateStore();
                          },
                        }),
                      );
                    }
                  }}
                >
                  <i className="fa-solid fa-ban"></i>
                  &nbsp;
                  <FormattedMessage id="DELETE" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        {client.assignedTherapists.nodes.length === 0 && (
          <tfoot>
            <tr>
              <th className="text-muted">
                <FormattedMessage id="NO_ENTRIES" />
              </th>
              <th></th>
            </tr>
          </tfoot>
        )}
      </table>

      <div className="v-spacer"></div>

      <AutocompleteTherapist
        query={query}
        value={null}
        label={<FormattedMessage id="ADD_THERAPIST" />}
        hideClearButtom
        onChange={(item) => {
          if (item) {
            addToast(
              assignTherapist({
                variables: {
                  input: {
                    clientRowId: client.rowId,
                    therapistRowId: item.rowId ?? '',
                  },
                },
                updater: (store) => {
                  store.invalidateStore();
                },
              }),
            );
          }
        }}
      />
    </div>
  );
};
