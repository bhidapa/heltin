/**
 *
 * CaseStudyTreatmentManage
 *
 */
import React, { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedList, FormattedMessage, FormattedNumber } from 'react-intl';
import { fetchQuery, graphql, useFragment } from 'react-relay';

import { useNavigate } from '@tanstack/react-location';
import addHours from 'date-fns/addHours';
import roundToNearestMinutes from 'date-fns/roundToNearestMinutes';
import printJS from 'print-js';

import { ExplanationTooltip, Tooltip } from 'lib/Tooltip';
import { formatDatetimeLocal, parseDatetimeLocal } from 'lib/date';
import { Watch, useNativeFormSubmit } from 'lib/form';
import { usePromiseMutation } from 'lib/relay';
import { buildHeaders, checkResponse } from 'lib/request';
import { buildReportToast, createToast, deleteToast, printToast, saveToast } from 'lib/toasts';
import { useConfirm } from 'lib/useConfirm';
import { useUnsavedChangesPrompt } from 'lib/usePrompt';

import { FormattedDuration } from 'intl/FormattedDuration';

import { environment } from 'core/relay';

import { CaseStudyTreatmentManageAfterBuildReportQuery } from './__generated__/CaseStudyTreatmentManageAfterBuildReportQuery.graphql';
import { CaseStudyTreatmentManageCreateMutation } from './__generated__/CaseStudyTreatmentManageCreateMutation.graphql';
import { CaseStudyTreatmentManageDeleteMutation } from './__generated__/CaseStudyTreatmentManageDeleteMutation.graphql';
import { CaseStudyTreatmentManageUpdateMutation } from './__generated__/CaseStudyTreatmentManageUpdateMutation.graphql';
import { CaseStudyTreatmentManage_caseStudy$key } from './__generated__/CaseStudyTreatmentManage_caseStudy.graphql';
import { CaseStudyTreatmentManage_treatment$key } from './__generated__/CaseStudyTreatmentManage_treatment.graphql';

export interface CaseStudyTreatmentManageProps {
  caseStudy: CaseStudyTreatmentManage_caseStudy$key;
  treatment: CaseStudyTreatmentManage_treatment$key | null;
}

export const CaseStudyTreatmentManage: React.FC<CaseStudyTreatmentManageProps> = (props) => {
  const { caseStudy: caseStudyRef, treatment: treatmentRef } = props;

  const navigate = useNavigate();

  const caseStudy = useFragment(
    graphql`
      fragment CaseStudyTreatmentManage_caseStudy on CaseStudy {
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

  const treatment = useFragment(
    graphql`
      fragment CaseStudyTreatmentManage_treatment on CaseStudyTreatment {
        rowId
        external

        title

        startedAt
        endedAt

        privateDescription
        description

        score
      }
    `,
    treatmentRef,
  );

  const [create] = usePromiseMutation<CaseStudyTreatmentManageCreateMutation>(
    graphql`
      mutation CaseStudyTreatmentManageCreateMutation($input: CreateCaseStudyTreatmentInput!) {
        createCaseStudyTreatment(input: $input) {
          treatment: caseStudyTreatment {
            rowId
            caseStudy: caseStudyByCaseStudyRowId @required(action: THROW) {
              rowId
              clientRowId
              client: clientByClientRowId {
                ...ClientCaseStudies_client
                ...ClientsTable_client
              }
              ...ClientsCaseStudiesDetailsPage_caseStudy
              ...CaseStudyTreatmentManage_caseStudy
            }
            ...CaseStudyTreatmentManage_treatment
          }
        }
      }
    `,
  );

  const [update] = usePromiseMutation<CaseStudyTreatmentManageUpdateMutation>(
    graphql`
      mutation CaseStudyTreatmentManageUpdateMutation($input: UpdateCaseStudyTreatmentInput!) {
        updateCaseStudyTreatment(input: $input) {
          treatment: caseStudyTreatment {
            rowId
            caseStudy: caseStudyByCaseStudyRowId @required(action: THROW) {
              ...CaseStudyTreatmentManage_caseStudy
              ...ClientsCaseStudiesDetailsPage_caseStudy
            }
            ...CaseStudyTreatmentManage_treatment
            eventsByCaseStudyTreatmentRowId {
              nodes {
                ...EventsTable_events
              }
            }
          }
        }
      }
    `,
  );

  const [deleteMutation] = usePromiseMutation<CaseStudyTreatmentManageDeleteMutation>(
    graphql`
      mutation CaseStudyTreatmentManageDeleteMutation($input: DeleteCaseStudyTreatmentInput!) {
        deleteCaseStudyTreatment(input: $input) {
          treatment: caseStudyTreatment {
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
    `,
  );

  const now = useMemo(() => {
    const startedAt = roundToNearestMinutes(Date.now(), { nearestTo: 15 });
    return {
      startedAt: formatDatetimeLocal(startedAt)!,
      endedAt: formatDatetimeLocal(addHours(startedAt, 1))!,
    };
  }, []);
  const defaultValues = {
    external: treatment?.external ?? false,
    title: treatment?.title ?? '',
    startedAt: formatDatetimeLocal(treatment?.startedAt) ?? now.startedAt,
    endedAt: formatDatetimeLocal(treatment?.endedAt) ?? now.endedAt,
    description: treatment?.description ?? '',
    privateDescription: treatment?.privateDescription ?? null,
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isDirty },
    control,
    setValue,
  } = useForm({
    defaultValues,
  });

  useUnsavedChangesPrompt(isDirty);

  const { confirmDelete } = useConfirm();

  // string = ready, null = pending, undefined = nothing
  const [reportFileRowId, setReportFileRowId] = useState<string | null | undefined>(undefined);

  const [formRef, , submitOnCtrlEnter] = useNativeFormSubmit();

  return (
    <form
      ref={formRef}
      className="content"
      onSubmit={handleSubmit((values) => {
        if (treatment) {
          return saveToast(
            (async () => {
              const data = await update({
                variables: {
                  input: {
                    ...values,
                    rowId: treatment.rowId,
                    startedAt: parseDatetimeLocal(values.startedAt),
                    endedAt: parseDatetimeLocal(values.endedAt),
                  },
                },
              });
              if (!data.updateCaseStudyTreatment?.treatment) {
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
                  startedAt: parseDatetimeLocal(values.startedAt),
                  endedAt: parseDatetimeLocal(values.endedAt),
                },
              },
              updater: (store) => {
                store.invalidateStore();
              },
            });
            if (!data.createCaseStudyTreatment?.treatment) {
              throw new Error('Forbidden');
            }

            // reset, propagate and navigate
            reset(values);
            const treatment = data.createCaseStudyTreatment.treatment;
            setTimeout(
              () =>
                navigate({
                  to:
                    '/clients/' +
                    treatment.caseStudy.clientRowId +
                    '/case-studies/' +
                    treatment.caseStudy.rowId +
                    '/treatments/' +
                    treatment.rowId,
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
        {treatment ? (
          <>
            <small className="text-muted">
              <FormattedMessage id="TREATMENT" />
            </small>
            <br />
            {treatment.title}
          </>
        ) : (
          <FormattedMessage
            id="NEW_CASE_STUDY_TREATMENT_FOR"
            values={{
              name: caseStudy.client.fullName,
            }}
          />
        )}
      </h2>

      <div className="form-row">
        <div className="col">
          <div className="custom-switch">
            <input {...register('external')} type="checkbox" id="external" />
            <label htmlFor="external">
              <FormattedMessage id="EXTERNAL" />
            </label>
          </div>
          <div className="form-text">
            <FormattedMessage id="TREATMENT_EXTERNAL_FORM_TEXT" />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="col">
          <label htmlFor="title" className="required">
            <FormattedMessage id="TITLE" />
          </label>
          <input {...register('title')} type="text" className="form-control" id="title" required />
        </div>
      </div>

      <div className="form-row row-eq-spacing-sm mb-10">
        <div className="col-sm">
          <label htmlFor="startedAt" className="required">
            <FormattedMessage id="STARTED" />
          </label>
          <input
            {...register('startedAt', {
              setValueAs: (v) => {
                if (v) {
                  setValue('endedAt', formatDatetimeLocal(Date.parse(v) + 60 * 60 * 1000)!);
                }
                return v;
              },
            })}
            type="datetime-local"
            placeholder="YYYY-MM-DDTHH:MM" // for browsers that don't support the date input
            className="form-control"
            id="startedAt"
            required
          />
        </div>
        <div className="col-sm">
          <label htmlFor="endedAt" className="required">
            <FormattedMessage id="ENDED" />
          </label>
          <input
            {...register('endedAt')}
            type="datetime-local"
            placeholder="YYYY-MM-DDTHH:MM" // for browsers that don't support the date input
            className="form-control"
            id="endedAt"
            required
          />
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <div className="form-text">
            <Watch control={control} name="startedAt">
              {(startedAt) => (
                <Watch control={control} name="endedAt">
                  {(endedAt) => (
                    <>
                      <FormattedMessage
                        id="DURATION_X"
                        values={{
                          text: (
                            <FormattedMessage id="DURATION_EXPLANATION">
                              {([msg]) => (
                                <ExplanationTooltip content={msg!.toString()} placement="bottom">
                                  <FormattedDuration
                                    value={Math.max(0, Date.parse(endedAt) - Date.parse(startedAt))}
                                    unitDisplay="long"
                                  />
                                </ExplanationTooltip>
                              )}
                            </FormattedMessage>
                          ),
                        }}
                      />
                      &nbsp;(
                      <span style={{ textTransform: 'lowercase' }}>
                        <FormattedMessage id="SET" />
                      </span>
                      &nbsp;
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setValue(
                            'endedAt',
                            formatDatetimeLocal(Date.parse(startedAt) + 30 * 60 * 1000)!,
                          );
                        }}
                      >
                        <FormattedNumber
                          value={30}
                          style="unit"
                          unit="minute"
                          unitDisplay="short"
                        />
                      </a>
                      ,&nbsp;
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setValue(
                            'endedAt',
                            formatDatetimeLocal(Date.parse(startedAt) + 45 * 60 * 1000)!,
                          );
                        }}
                      >
                        <FormattedNumber
                          value={45}
                          style="unit"
                          unit="minute"
                          unitDisplay="short"
                        />
                      </a>
                      ,&nbsp;
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setValue(
                            'endedAt',
                            formatDatetimeLocal(Date.parse(startedAt) + 60 * 60 * 1000)!,
                          );
                        }}
                      >
                        <FormattedNumber value={1} style="unit" unit="hour" unitDisplay="long" />
                      </a>
                      ,&nbsp;
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setValue(
                            'endedAt',
                            formatDatetimeLocal(
                              Date.parse(startedAt) + 60 * 60 * 1000 + 30 * 60 * 1000,
                            )!,
                          );
                        }}
                      >
                        <FormattedList
                          value={[
                            <FormattedNumber
                              key="1-hour"
                              value={1}
                              style="unit"
                              unit="hour"
                              unitDisplay="long"
                            />,
                            <FormattedNumber
                              key="30-minutes"
                              value={30}
                              style="unit"
                              unit="minute"
                              unitDisplay="short"
                            />,
                          ]}
                        />
                      </a>
                      ,&nbsp;
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setValue(
                            'endedAt',
                            formatDatetimeLocal(Date.parse(startedAt) + 2 * 60 * 60 * 1000)!,
                          );
                        }}
                      >
                        <FormattedNumber value={2} style="unit" unit="hour" unitDisplay="long" />
                      </a>
                      )
                    </>
                  )}
                </Watch>
              )}
            </Watch>
          </div>
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="privateDescription" className="required">
          <FormattedMessage id="NOTES_FOR_THERAPIST" />
        </label>
        <textarea
          {...register('privateDescription')}
          id="privateDescription"
          className="form-control"
          required
          onKeyDown={submitOnCtrlEnter}
        />
        <div className="form-text w-full">
          <FormattedMessage id="NOTES_FOR_THERAPIST_FORM_TEXT" />
        </div>
      </div>

      <div className="form-row">
        <label htmlFor="description">
          <FormattedMessage id="DESCRIPTION_FOR_REPORT" />
        </label>
        <textarea
          {...register('description', { setValueAs: (v) => v || null })}
          id="description"
          className="form-control"
          onKeyDown={submitOnCtrlEnter}
        />
        <div className="form-text w-full">
          <FormattedMessage id="DESCRIPTION_FOR_REPORT_FORM_TEXT" />
        </div>
      </div>

      <div className="form-row align-items-center">
        {treatment && (
          <div className="col-auto">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                if (confirmDelete()) {
                  deleteToast(
                    (async () => {
                      const { deleteCaseStudyTreatment } = await deleteMutation({
                        variables: {
                          input: {
                            rowId: treatment.rowId,
                          },
                        },
                        updater: (store) => {
                          store.invalidateStore();
                        },
                      });
                      if (!deleteCaseStudyTreatment?.treatment) {
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
                const saveFirst = !treatment || isDirty;

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
                            '/api/reports/for-treatment/' + treatment!.rowId,
                            {
                              method: 'POST',
                              headers: buildHeaders(),
                            },
                          ).then(checkResponse);

                          const fileRowId = await res.text();
                          setReportFileRowId(fileRowId);

                          await fetchQuery<CaseStudyTreatmentManageAfterBuildReportQuery>(
                            environment,
                            graphql`
                              query CaseStudyTreatmentManageAfterBuildReportQuery(
                                $treatmentRowId: UUID!
                              ) {
                                caseStudyTreatmentByRowId(rowId: $treatmentRowId) {
                                  # update Files in ClientsCaseStudiesTreatmentsDetailsPageQuery
                                  caseStudyTreatmentFilesByCaseStudyTreatmentRowId(
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
                              treatmentRowId: treatment!.rowId,
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
                    content={<FormattedMessage id="PLEASE_SAVE_TREATMENT_FIRST" />}
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
