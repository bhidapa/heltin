/**
 *
 * CaseStudyAssignedTherapistsManage
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql, useFragment } from 'react-relay';

import { Link } from '@tanstack/react-location';

import { usePromiseMutation } from 'lib/relay';
import { addToast, deleteToast, saveToast } from 'lib/toasts';
import { useConfirm } from 'lib/useConfirm';

import { AutocompleteTherapist } from 'modules/Autocomplete/AutocompleteTherapist';

import { CaseStudyAssignedTherapistsManageCreateMutation } from './__generated__/CaseStudyAssignedTherapistsManageCreateMutation.graphql';
import { CaseStudyAssignedTherapistsManageDeleteMutation } from './__generated__/CaseStudyAssignedTherapistsManageDeleteMutation.graphql';
import { CaseStudyAssignedTherapistsManageSetPrimaryMutation } from './__generated__/CaseStudyAssignedTherapistsManageSetPrimaryMutation.graphql';
import {
  CaseStudyAssignedTherapistsManage_casyStudy$data,
  CaseStudyAssignedTherapistsManage_casyStudy$key,
} from './__generated__/CaseStudyAssignedTherapistsManage_casyStudy.graphql';
import { CaseStudyAssignedTherapistsManage_query$key } from './__generated__/CaseStudyAssignedTherapistsManage_query.graphql';

export interface CaseStudyAssignedTherapistsManageProps {
  query: CaseStudyAssignedTherapistsManage_query$key;
  caseStudy: CaseStudyAssignedTherapistsManage_casyStudy$key;
}

export const CaseStudyAssignedTherapistsManage: React.FC<CaseStudyAssignedTherapistsManageProps> = (
  props,
) => {
  const { query: queryRef, caseStudy: caseStudyRef } = props;

  const { confirm, confirmDelete } = useConfirm();

  const query = useFragment(
    graphql`
      fragment CaseStudyAssignedTherapistsManage_query on Query {
        ...AutocompleteTherapist_query
      }
    `,
    queryRef,
  );

  const caseStudy = useFragment(
    graphql`
      fragment CaseStudyAssignedTherapistsManage_casyStudy on CaseStudy {
        rowId
        assignedTherapists: caseStudyTherapistsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {
          __id
          nodes {
            id
            rowId
            primary
            therapist: therapistByTherapistRowId @required(action: THROW) {
              rowId
              type
              fullName
            }
            createdAt
          }
        }
      }
    `,
    caseStudyRef,
  );

  const [assignTherapist] = usePromiseMutation<CaseStudyAssignedTherapistsManageCreateMutation>(
    graphql`
      mutation CaseStudyAssignedTherapistsManageCreateMutation(
        $input: CreateCaseStudyTherapistInput!
      ) {
        createCaseStudyTherapist(input: $input) {
          caseStudyByCaseStudyRowId {
            ...CaseStudyAssignedTherapistsManage_casyStudy
          }
        }
      }
    `,
  );

  const [setPrimaryTherapist] =
    usePromiseMutation<CaseStudyAssignedTherapistsManageSetPrimaryMutation>(graphql`
      mutation CaseStudyAssignedTherapistsManageSetPrimaryMutation(
        $input: SetPrimaryCaseStudyTherapistInput!
      ) {
        setPrimaryCaseStudyTherapist(input: $input) {
          caseStudyByCaseStudyRowId {
            ...CaseStudyAssignedTherapistsManage_casyStudy
          }
        }
      }
    `);

  const [deleteAssignedTherapist] =
    usePromiseMutation<CaseStudyAssignedTherapistsManageDeleteMutation>(
      graphql`
        mutation CaseStudyAssignedTherapistsManageDeleteMutation(
          $input: DeleteCaseStudyTherapistInput!
        ) {
          deleteCaseStudyTherapist(input: $input) {
            caseStudyByCaseStudyRowId {
              ...CaseStudyAssignedTherapistsManage_casyStudy
            }
          }
        }
      `,
    );

  return (
    <div className="content">
      <h3 className="content-title">
        <FormattedMessage id="ASSIGNED_THERAPISTS" />
      </h3>
      <p className="text-muted">
        <FormattedMessage id="CASE_STUDY_ASSIGNED_THERAPISTS_DESCRIPTION" />
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
          {caseStudy.assignedTherapists.nodes.map((assignedTherapist) => (
            <tr key={assignedTherapist.id}>
              <td>
                <Link to={`/therapists/${assignedTherapist.therapist.rowId}`} search>
                  {assignedTherapist.therapist.fullName}
                </Link>
              </td>
              <td className="text-right">
                <div className="custom-radio mr-20" style={{ display: 'inline-block' }}>
                  <input
                    type="radio"
                    name="primary-assigned-therapist-radio-set"
                    id={`primary-assigned-therapist-radio-${assignedTherapist.therapist.rowId}`}
                    value={assignedTherapist.therapist.rowId}
                    checked={assignedTherapist.primary}
                    onChange={(e) => {
                      if (
                        confirm((intl) =>
                          intl.formatMessage({ id: 'ARE_YOU_SURE_CHANGE_PRIMARY_THERAPIST' }),
                        )
                      ) {
                        const therapistRowId = e.currentTarget.value;
                        saveToast(
                          setPrimaryTherapist({
                            variables: {
                              input: {
                                caseStudyRowId: caseStudy.rowId,
                                therapistRowId,
                              },
                            },
                            optimisticUpdater: (store) => {
                              const assignedTherapist = store.get<
                                CaseStudyAssignedTherapistsManage_casyStudy$data['assignedTherapists']
                              >(caseStudy.assignedTherapists.__id);
                              if (assignedTherapist) {
                                const nodes = assignedTherapist.getLinkedRecords('nodes');
                                for (const node of nodes) {
                                  node.setValue(
                                    node.getValue('rowId') === therapistRowId,
                                    'primary',
                                  );
                                }
                              }
                            },
                          }),
                        );
                      }
                    }}
                  />
                  <label
                    htmlFor={`primary-assigned-therapist-radio-${assignedTherapist.therapist.rowId}`}
                  >
                    <FormattedMessage id="PRIMARY" />
                  </label>
                </div>

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
        {caseStudy.assignedTherapists.nodes.length === 0 && (
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
                    caseStudyRowId: caseStudy.rowId,
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
