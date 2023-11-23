/**
 *
 * CaseStudyManage
 *
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { graphql, useFragment } from 'react-relay';
import { useNavigate } from '@tanstack/react-location';
import { usePromiseMutation } from 'lib/relay';
import { createToast, deleteToast, saveToast } from 'lib/toasts';
import { Tooltip } from 'lib/Tooltip';
import { useConfirm } from 'lib/useConfirm';
import { useUnsavedChangesPrompt } from 'lib/usePrompt';
import { CaseStudyManage_caseStudy$key } from './__generated__/CaseStudyManage_caseStudy.graphql';
import { CaseStudyManage_client$key } from './__generated__/CaseStudyManage_client.graphql';
import { CaseStudyManageCreateMutation } from './__generated__/CaseStudyManageCreateMutation.graphql';
import { CaseStudyManageDeleteMutation } from './__generated__/CaseStudyManageDeleteMutation.graphql';
import { CaseStudyManageUpdateMutation } from './__generated__/CaseStudyManageUpdateMutation.graphql';

export interface CaseStudyManageProps {
  client: CaseStudyManage_client$key;
  caseStudy: CaseStudyManage_caseStudy$key | null;
}

export const CaseStudyManage: React.FC<CaseStudyManageProps> = (props) => {
  const { client: clientRef, caseStudy: caseStudyRef } = props;

  const navigate = useNavigate();
  const { confirmDelete } = useConfirm();

  const client = useFragment(
    graphql`
      fragment CaseStudyManage_client on Client {
        rowId
        fullName
      }
    `,
    clientRef,
  );

  const caseStudy = useFragment(
    graphql`
      fragment CaseStudyManage_caseStudy on CaseStudy {
        rowId
        title
        conclusion: caseStudyConclusionByCaseStudyRowId {
          type
        }
      }
    `,
    caseStudyRef,
  );

  const [createCaseStudy] = usePromiseMutation<CaseStudyManageCreateMutation>(graphql`
    mutation CaseStudyManageCreateMutation($input: CreateCaseStudyInput!) {
      createCaseStudy(input: $input) {
        caseStudy {
          rowId
          client: clientByClientRowId @required(action: THROW) {
            rowId
            ...ClientCaseStudies_client
          }
          ...CaseStudyManage_caseStudy
        }
      }
    }
  `);

  const [updateCaseStudy] = usePromiseMutation<CaseStudyManageUpdateMutation>(graphql`
    mutation CaseStudyManageUpdateMutation($input: UpdateCaseStudyInput!) {
      updateCaseStudy(input: $input) {
        caseStudy {
          client: clientByClientRowId @required(action: THROW) {
            ...ClientCaseStudies_client
          }
          ...CaseStudyManage_caseStudy
        }
      }
    }
  `);

  const [deleteCaseStudy] = usePromiseMutation<CaseStudyManageDeleteMutation>(graphql`
    mutation CaseStudyManageDeleteMutation($input: DeleteCaseStudyInput!) {
      deleteCaseStudy(input: $input) {
        clientByClientRowId {
          ...ClientCaseStudies_client
        }
      }
    }
  `);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
  } = useForm({
    defaultValues: {
      title: caseStudy?.title ?? '',
    },
  });

  useUnsavedChangesPrompt(Boolean(caseStudy) && isDirty);

  return (
    <form
      className="content"
      onSubmit={handleSubmit((values) => {
        if (caseStudy) {
          return saveToast(
            (async () => {
              const data = await updateCaseStudy({
                variables: {
                  input: {
                    ...values,
                    rowId: caseStudy.rowId,
                  },
                },
              });
              if (!data.updateCaseStudy?.caseStudy) {
                throw new Error('Forbidden');
              }
              reset(values);
            })(),
          );
        }

        return createToast(
          (async () => {
            const data = await createCaseStudy({
              variables: {
                input: {
                  ...values,
                  clientRowId: client.rowId,
                },
              },
              updater: (store) => {
                store.invalidateStore();
              },
            });
            if (!data.createCaseStudy?.caseStudy) {
              throw new Error('Forbidden');
            }

            // reset, propagate and navigate
            reset(values);
            const caseStudy = data.createCaseStudy.caseStudy;
            setTimeout(
              () =>
                navigate({
                  to: '/clients/' + caseStudy.client.rowId + '/case-studies/' + caseStudy.rowId,
                  search: true,
                  replace: true,
                }),
              0,
            );
          })(),
        );
      })}
    >
      <h2 className="content-title">
        {caseStudy ? (
          <>
            <small className="text-muted">
              <FormattedMessage id="CASE_STUDY" />
            </small>
            <br />
            {caseStudy.conclusion && (
              <>
                <Tooltip content={<FormattedMessage id={caseStudy.conclusion.type} />}>
                  <i className="fa-solid fa-lock text-secondary font-size-20"></i>
                </Tooltip>
                &nbsp;
              </>
            )}
            {caseStudy.title}
          </>
        ) : (
          <FormattedMessage
            id="NEW_CASE_STUDY_FOR"
            values={{
              name: client.fullName,
            }}
          />
        )}
      </h2>

      <div className="form-row">
        <div className="col">
          <label htmlFor="title" className="required">
            <FormattedMessage id="TITLE" />
          </label>
          <input {...register('title')} type="text" className="form-control" id="title" required />
        </div>
      </div>

      <div className="form-row align-items-center">
        {caseStudy && (
          <div className="col">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                if (confirmDelete()) {
                  reset();
                  deleteToast(
                    (async () => {
                      const data = await deleteCaseStudy({
                        variables: {
                          input: {
                            rowId: caseStudy.rowId,
                          },
                        },
                        updater: (store) => {
                          store.invalidateStore();
                        },
                      });
                      if (!data.deleteCaseStudy?.clientByClientRowId) {
                        throw new Error('Forbidden');
                      }
                      navigate({
                        to: '/clients/' + client.rowId,
                        search: true,
                        replace: true,
                      });
                    })(),
                  );
                }
              }}
            >
              <i className="fa-solid fa-ban"></i>
              &nbsp;
              <FormattedMessage id="DELETE" />
            </button>
          </div>
        )}
        <div className="col text-right">
          <button type="submit" className="btn btn-primary btn-lg">
            <i className="fa-solid fa-floppy-disk"></i>
            &nbsp;
            <FormattedMessage id="SAVE" />
          </button>
        </div>
      </div>
    </form>
  );
};
