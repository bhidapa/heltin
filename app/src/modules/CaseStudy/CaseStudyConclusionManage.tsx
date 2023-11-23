/**
 *
 * CaseStudyConclusionManage
 *
 */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { fetchQuery, graphql, useFragment } from 'react-relay';
import { useNavigate } from '@tanstack/react-location';
import printJS from 'print-js';
import { formatDate } from 'lib/date';
import { useNativeFormSubmit } from 'lib/form';
import { usePromiseMutation } from 'lib/relay';
import { buildHeaders, checkResponse } from 'lib/request';
import { buildReportToast, createToast, deleteToast, printToast, saveToast } from 'lib/toasts';
import { Tooltip } from 'lib/Tooltip';
import { useConfirm } from 'lib/useConfirm';
import { useUnsavedChangesPrompt } from 'lib/usePrompt';
import { environment } from 'core/relay';
import { CaseStudyConclusionTypeOptions } from 'modules/CaseStudy/CaseStudyConclusionTypeOptions';
import { CaseStudyConclusionManage_caseStudy$key } from './__generated__/CaseStudyConclusionManage_caseStudy.graphql';
import { CaseStudyConclusionManage_conclusion$key } from './__generated__/CaseStudyConclusionManage_conclusion.graphql';
import { CaseStudyConclusionManageAfterBuildReportQuery } from './__generated__/CaseStudyConclusionManageAfterBuildReportQuery.graphql';
import { CaseStudyConclusionManageCreateMutation } from './__generated__/CaseStudyConclusionManageCreateMutation.graphql';
import { CaseStudyConclusionManageDeleteMutation } from './__generated__/CaseStudyConclusionManageDeleteMutation.graphql';
import { CaseStudyConclusionManageUpdateMutation } from './__generated__/CaseStudyConclusionManageUpdateMutation.graphql';

export interface CaseStudyConclusionManageProps {
  caseStudy: CaseStudyConclusionManage_caseStudy$key;
  conclusion: CaseStudyConclusionManage_conclusion$key | null;
}

export const CaseStudyConclusionManage: React.FC<CaseStudyConclusionManageProps> = (props) => {
  const { caseStudy: caseStudyRef, conclusion: conclusionRef } = props;

  const navigate = useNavigate();
  const { confirmDelete } = useConfirm();

  const caseStudy = useFragment(
    graphql`
      fragment CaseStudyConclusionManage_caseStudy on CaseStudy {
        rowId
        title
        client: clientByClientRowId @required(action: THROW) {
          rowId
          fullName
        }
      }
    `,
    caseStudyRef,
  );

  const conclusion = useFragment(
    graphql`
      fragment CaseStudyConclusionManage_conclusion on CaseStudyConclusion {
        rowId
        type
        privateDescription
        description
        concludedAt
      }
    `,
    conclusionRef,
  );

  const [create] = usePromiseMutation<CaseStudyConclusionManageCreateMutation>(graphql`
    mutation CaseStudyConclusionManageCreateMutation($input: CreateCaseStudyConclusionInput!) {
      createCaseStudyConclusion(input: $input) {
        conclusion: caseStudyConclusion {
          rowId
          caseStudy: caseStudyByCaseStudyRowId @required(action: THROW) {
            rowId
            clientRowId
            concluded
            client: clientByClientRowId {
              ...ClientCaseStudies_client
              ...ClientsTable_client
            }
            ...ClientsCaseStudiesDetailsPage_caseStudy
            ...CaseStudyConclusionManage_caseStudy
          }
          ...CaseStudyConclusionManage_conclusion
        }
      }
    }
  `);

  const [update] = usePromiseMutation<CaseStudyConclusionManageUpdateMutation>(graphql`
    mutation CaseStudyConclusionManageUpdateMutation($input: UpdateCaseStudyConclusionInput!) {
      updateCaseStudyConclusion(input: $input) {
        conclusion: caseStudyConclusion {
          rowId
          caseStudy: caseStudyByCaseStudyRowId @required(action: THROW) {
            concluded
            ...CaseStudyConclusionManage_caseStudy
            ...ClientsCaseStudiesDetailsPage_caseStudy
          }
          ...CaseStudyConclusionManage_conclusion
          eventsByCaseStudyConclusionRowId {
            nodes {
              ...EventsTable_events
            }
          }
        }
      }
    }
  `);

  const [deleteMutation] = usePromiseMutation<CaseStudyConclusionManageDeleteMutation>(graphql`
    mutation CaseStudyConclusionManageDeleteMutation($input: DeleteCaseStudyConclusionInput!) {
      deleteCaseStudyConclusion(input: $input) {
        conclusion: caseStudyConclusion {
          rowId
          caseStudyByCaseStudyRowId {
            clientByClientRowId {
              ...ClientCaseStudies_client
              ...ClientsTable_client
            }
            ...ClientsCaseStudiesDetailsPage_caseStudy
          }
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
      type: conclusion?.type ?? 'TREATMENT_COMPLETION',
      concludedAt: formatDate(conclusion?.concludedAt ?? new Date()),
      description: conclusion?.description ?? '',
      privateDescription: conclusion?.privateDescription ?? null,
    },
  });

  useUnsavedChangesPrompt(Boolean(conclusion) && isDirty);

  // string = ready, null = pending, undefined = nothing
  const [reportFileRowId, setReportFileRowId] = useState<string | null | undefined>(undefined);

  const [formRef, , submitOnCtrlEnter] = useNativeFormSubmit();

  return (
    <form
      ref={formRef}
      className="content"
      onSubmit={handleSubmit((values) => {
        if (conclusion) {
          return saveToast(
            (async () => {
              const data = await update({
                variables: {
                  input: {
                    ...values,
                    rowId: caseStudy.rowId,
                    concludedAt: formatDate(values.concludedAt),
                  },
                },
              });
              if (!data.updateCaseStudyConclusion?.conclusion) {
                throw new Error('Forbidden');
              }
              setReportFileRowId(undefined);
              reset(values);
            })(),
          );
        }

        return createToast(
          (async () => {
            const data = await create({
              variables: {
                input: {
                  ...values,
                  caseStudyRowId: caseStudy.rowId,
                  concludedAt: formatDate(values.concludedAt),
                },
              },
              updater: (store) => {
                store.invalidateStore();
              },
            });
            if (!data.createCaseStudyConclusion?.conclusion) {
              throw new Error('Forbidden');
            }

            // reset, propagate and navigate
            reset(values);
            const conclusion = data.createCaseStudyConclusion.conclusion;
            setTimeout(
              () =>
                navigate({
                  to:
                    '/clients/' +
                    conclusion.caseStudy.clientRowId +
                    '/case-studies/' +
                    conclusion.caseStudy.rowId +
                    '/conclusion/' +
                    conclusion.rowId,
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
        {conclusion ? (
          <>
            <small className="text-muted">
              <FormattedMessage id="CONCLUSION" />
            </small>
            <br />
            <FormattedMessage id={conclusion.type} />
          </>
        ) : (
          <FormattedMessage
            id="CONCLUDE_CASE_STUDY"
            values={{
              caseStudy: caseStudy.title,
            }}
          />
        )}
      </h2>

      <div className="form-row">
        <div className="col">
          <label htmlFor="type" className="required">
            <FormattedMessage id="TYPE" />
          </label>
          <select {...register('type')} id="type" className="form-control" required>
            <CaseStudyConclusionTypeOptions hideEmptyOption />
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="col">
          <label htmlFor="concludedAt" className="required">
            <FormattedMessage id="ENDED" />
          </label>
          <input
            {...register('concludedAt')}
            type="date"
            placeholder="YYYY-MM-DD" // for browsers that don't support the date input
            className="form-control"
            id="concludedAt"
            required
          />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="privateDescription">
          <FormattedMessage id="NOTES_FOR_THERAPIST" />
        </label>
        <textarea
          {...register('privateDescription', { setValueAs: (v) => v || null })}
          id="privateDescription"
          className="form-control"
          onKeyDown={submitOnCtrlEnter}
        />
        <div className="form-text w-full">
          <FormattedMessage id="NOTES_FOR_THERAPIST_FORM_TEXT" />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="description" className="required">
          <FormattedMessage id="DESCRIPTION_FOR_REPORT" />
        </label>
        <textarea
          {...register('description')}
          id="description"
          required
          className="form-control"
          onKeyDown={submitOnCtrlEnter}
        />
        <div className="form-text w-full">
          <FormattedMessage id="DESCRIPTION_FOR_REPORT_FORM_TEXT" />
        </div>
      </div>

      <div className="form-row align-items-center">
        {conclusion && (
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                if (confirmDelete()) {
                  reset();
                  deleteToast(
                    (async () => {
                      const { deleteCaseStudyConclusion } = await deleteMutation({
                        variables: {
                          input: {
                            rowId: conclusion.rowId,
                          },
                        },
                        updater: (store) => {
                          store.invalidateStore();
                        },
                      });
                      if (!deleteCaseStudyConclusion?.conclusion) {
                        throw new Error('Forbidden');
                      }
                      navigate({
                        to: `/clients/${caseStudy.client.rowId}/case-studies/${caseStudy.rowId}`,
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

        <div className="col">
          <div className="row justify-content-end align-items-center">
            <div className="col-auto mr-0 mr-sm-20">
              {(() => {
                const saveFirst = isDirty || !conclusion;

                const buildReportButton = (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    disabled={reportFileRowId === null || saveFirst}
                    aria-disabled={reportFileRowId === null || saveFirst}
                    onClick={() => {
                      setReportFileRowId(null);
                      buildReportToast(
                        (async () => {
                          const res = await fetch(
                            '/api/reports/for-conclusion/' + conclusion!.rowId,
                            {
                              method: 'POST',
                              headers: buildHeaders(),
                            },
                          ).then(checkResponse);

                          const fileRowId = await res.text();
                          setReportFileRowId(fileRowId);

                          await fetchQuery<CaseStudyConclusionManageAfterBuildReportQuery>(
                            environment,
                            graphql`
                              query CaseStudyConclusionManageAfterBuildReportQuery(
                                $conclusionRowId: UUID!
                              ) {
                                caseStudyConclusionByRowId(rowId: $conclusionRowId) {
                                  # update Files in ClientsCaseStudiesConclusionsDetailsPageQuery
                                  caseStudyConclusionFilesByCaseStudyConclusionRowId(
                                    orderBy: CREATED_AT_DESC
                                  ) {
                                    __id
                                    nodes {
                                      file: fileByFileRowId @required(action: THROW) {
                                        ...Files_files
                                      }
                                    }
                                  }
                                }
                              }
                            `,
                            {
                              conclusionRowId: conclusion!.rowId,
                            },
                          ).toPromise();
                        })(),
                      ).catch(() => setReportFileRowId(undefined));
                    }}
                  >
                    <i className="fa-solid fa-file-medical"></i>
                    &nbsp;
                    <FormattedMessage id={reportFileRowId ? 'BUILD_AGAIN' : 'BUILD_REPORT'} />
                  </button>
                );

                if (reportFileRowId && !saveFirst) {
                  return (
                    <div className="btn-group" role="group">
                      <a
                        className="btn btn-success"
                        onClick={() =>
                          printToast(
                            new Promise<void>((resolve, reject) => {
                              printJS({
                                printable: `/api/file/${reportFileRowId}`,
                                type: 'pdf',
                                onLoadingEnd: resolve,
                                onError: reject,
                              });
                            }),
                          )
                        }
                      >
                        <i className="fa-solid fa-print"></i>
                        &nbsp;
                        <FormattedMessage id="PRINT" />
                      </a>
                      <a
                        className="btn btn-success"
                        href={`/api/file/${reportFileRowId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        &nbsp;
                        <FormattedMessage id="OPEN_REPORT" />
                      </a>
                      {buildReportButton}
                    </div>
                  );
                }

                return (
                  <Tooltip
                    disabled={!saveFirst}
                    content={<FormattedMessage id="PLEASE_SAVE_CONCLUSION_FIRST" />}
                  >
                    <span>{buildReportButton}</span>
                  </Tooltip>
                );
              })()}
            </div>

            <div className="form-v-spacer hidden-sm-and-up" />

            <div className="col-auto">
              <button type="submit" className="btn btn-primary btn-lg">
                <i className="fa-solid fa-floppy-disk"></i>
                &nbsp;
                <FormattedMessage id="SAVE" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
