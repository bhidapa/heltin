/**
 *
 * FormManage
 *
 */
import React, { useMemo } from 'react';
import { Control, FieldError, useForm, useFormState } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';
import { graphql, readInlineData, useFragment } from 'react-relay';
import { useNavigate, useResolvePath } from '@tanstack/react-location';
import { useNativeFormSubmit } from 'lib/form';
import { usePromiseMutation } from 'lib/relay';
import { deleteToast, saveToast } from 'lib/toasts';
import { useConfirm } from 'lib/useConfirm';
import { usePanic } from 'lib/usePanic';
import { onCtrlEnter } from 'lib/utils';
import { LocationGenerics } from 'core/location';
import { FormManage_form$key } from './__generated__/FormManage_form.graphql';
import { FormManage_formResponse$key } from './__generated__/FormManage_formResponse.graphql';
import { FormManageBuildDefaultValues_formQuestions$key } from './__generated__/FormManageBuildDefaultValues_formQuestions.graphql';
import { FormManageBuildDefaultValues_formResponse$key } from './__generated__/FormManageBuildDefaultValues_formResponse.graphql';
import { FormManageCreateFormResponseMutation } from './__generated__/FormManageCreateFormResponseMutation.graphql';
import { FormManageDeleteFormResponseMutation } from './__generated__/FormManageDeleteFormResponseMutation.graphql';
import { FormManageQuestion_question$key } from './__generated__/FormManageQuestion_question.graphql';
import { FormManageUpdateFormResponseMutation } from './__generated__/FormManageUpdateFormResponseMutation.graphql';

export interface FormManageProps {
  caseStudyRowId: UUID;
  form: FormManage_form$key;
  formResponse: FormManage_formResponse$key | null;
}

export const FormManage: React.FC<FormManageProps> = (props) => {
  const { caseStudyRowId, form: formRef, formResponse: formResponseRef } = props;
  const [panic] = usePanic();
  const navigate = useNavigate<LocationGenerics>();
  const resolvePath = useResolvePath<LocationGenerics>();
  const { confirmDelete } = useConfirm();

  const form = useFragment(
    graphql`
      fragment FormManage_form on Form {
        rowId
        name
        description
        formQuestions: formQuestionsByFormRowId(orderBy: INDEX_ASC) {
          ...FormManageBuildDefaultValues_formQuestions
          nodes {
            rowId
            required
            ...FormManageQuestion_question
          }
        }
      }
    `,
    formRef,
  );

  const formResponse = useFragment(
    graphql`
      fragment FormManage_formResponse on FormResponse {
        rowId
        formRowId
        ...FormManageBuildDefaultValues_formResponse
      }
    `,
    formResponseRef,
  );
  if (formResponse && formResponse.formRowId !== form.rowId) {
    throw new Error('Response does not belong to the form');
  }

  const [createFormResponse] = usePromiseMutation<FormManageCreateFormResponseMutation>(graphql`
    mutation FormManageCreateFormResponseMutation($input: CreateFormResponseInput!) {
      createFormResponse(input: $input) {
        formResponse {
          rowId
          caseStudyByCaseStudyRowId {
            clientByClientRowId {
              ...ClientCaseStudies_client
            }
            ...ClientsCaseStudiesDetailsPage_caseStudy
          }
        }
      }
    }
  `);

  const [updateFormResponse] = usePromiseMutation<FormManageUpdateFormResponseMutation>(graphql`
    mutation FormManageUpdateFormResponseMutation($input: UpdateFormResponseInput!) {
      updateFormResponse(input: $input) {
        formResponse {
          ...FormManage_formResponse
          ...FormManageBuildDefaultValues_formResponse
          form: formByFormRowId {
            ...FormManage_form
            formQuestions: formQuestionsByFormRowId(orderBy: INDEX_ASC) {
              ...FormManageBuildDefaultValues_formQuestions
            }
          }
        }
      }
    }
  `);

  const [deleteFormResponse] = usePromiseMutation<FormManageDeleteFormResponseMutation>(graphql`
    mutation FormManageDeleteFormResponseMutation($input: DeleteFormResponseInput!) {
      deleteFormResponse(input: $input) {
        formResponse {
          rowId
          caseStudyByCaseStudyRowId {
            clientByClientRowId {
              ...ClientCaseStudies_client
            }
            ...ClientsCaseStudiesDetailsPage_caseStudy
          }
        }
      }
    }
  `);

  // important because react-hook-form defaults might not match (like for CHECBOXES type)
  const defaultValues = useMemo(
    () => buildDefaultValues(form.formQuestions, formResponse || null),
    [form.formQuestions, formResponse],
  );

  const { control, handleSubmit, setError, reset } = useForm({ defaultValues });

  const [formElRef, submit] = useNativeFormSubmit();

  return (
    <form
      ref={formElRef}
      className="content"
      onSubmit={handleSubmit((values) => {
        let hasErrors = false;
        for (const [name, value] of Object.entries(values)) {
          const formQuestion = form.formQuestions.nodes.find(({ rowId }) => rowId === name);
          if (!formQuestion) {
            return panic(new Error(`Form question for ${name} not found`));
          }

          if (
            formQuestion.required &&
            (value == null || value === '' || (Array.isArray(value) && value.length === 0))
          ) {
            setError(name, { type: 'required' });

            if (!hasErrors) {
              // this is the first error, scroll to the field
              document.getElementById(name)!.scrollIntoView();
            }
            hasErrors = true;
          }
        }

        if (!hasErrors) {
          return saveToast(
            (async () => {
              if (formResponse) {
                const data = await updateFormResponse({
                  variables: {
                    input: {
                      formResponseRowId: formResponse.rowId,
                      answers: values,
                    },
                  },
                });
                if (!data.updateFormResponse?.formResponse?.form) {
                  throw new Error('Forbidden');
                }
                reset(
                  buildDefaultValues(
                    data.updateFormResponse.formResponse.form?.formQuestions,
                    data.updateFormResponse.formResponse,
                  ),
                );
                return;
              }

              const data = await createFormResponse({
                variables: {
                  input: {
                    caseStudyRowId,
                    formRowId: form.rowId,
                    answers: values,
                  },
                },
              });
              if (!data.createFormResponse?.formResponse) {
                throw new Error('Forbidden');
              }

              navigate({
                to: resolvePath(`../../response/${data.createFormResponse?.formResponse.rowId}`),
                search: true,
                replace: true,
              });
            })(),
          );
        }
      })}
    >
      <h2 className="content-title">{form.name}</h2>
      {form.description && <p className="text-muted">{form.description}</p>}

      {form.formQuestions.nodes.map(({ rowId, ...question }) => (
        <FormManageQuestion key={rowId} control={control} formSubmit={submit} question={question} />
      ))}

      <div className="form-row align-items-center">
        {formResponse && (
          <div className="col">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => {
                if (confirmDelete()) {
                  reset();
                  deleteToast(
                    (async () => {
                      const data = await deleteFormResponse({
                        variables: {
                          input: {
                            rowId: formResponse.rowId,
                          },
                        },
                        updater: (store) => {
                          store.invalidateStore();
                        },
                      });
                      if (!data.deleteFormResponse?.formResponse) {
                        throw new Error('Forbidden');
                      }
                      navigate({
                        to: resolvePath('../../..'),
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

const OPTION_OTHER_VALUE = '259afbd0-c294-4d1b-b245-275aff418c43';

function FormManageQuestion({
  control,
  formSubmit,
  question: questionRef,
}: {
  control: Control;
  formSubmit: () => void;
  question: FormManageQuestion_question$key;
}) {
  const { rowId, required, type, rawOptions, name, description } = useFragment(
    graphql`
      fragment FormManageQuestion_question on FormQuestion {
        rowId
        required
        type
        rawOptions: options
        name
        description
      }
    `,
    questionRef,
  );

  const fieldName = rowId; // field name for react-hook-form
  const inputId = rowId + '_input'; // the actual input id

  const { errors } = useFormState({ control, name: fieldName });
  const fieldError = errors[fieldName] as FieldError | undefined;
  const fieldAlert = fieldError && (
    <div className="alert alert-danger mb-10" role="alert">
      {fieldError.message && (
        // only if there's a custom fieldError message, we show the heading
        <h4 className="alert-heading">
          <FormattedMessage id="THIS_FIELD_FIELD_HAS_AN_ERROR" />
        </h4>
      )}
      <i className="fa-solid fa-circle-exclamation" />
      &nbsp;
      {fieldError.message || (
        <FormattedMessage
          id={
            fieldError.type === 'required'
              ? 'THIS_FIELD_IS_REQUIRED'
              : 'THIS_FIELD_FIELD_HAS_AN_ERROR'
          }
        />
      )}
    </div>
  );

  switch (type) {
    case 'SHORT_ANSWER':
      return (
        <div id={fieldName} className="form-row">
          <div className="col">
            <label htmlFor={inputId} className={required ? 'required' : undefined}>
              {name}
            </label>

            {fieldAlert}

            <input
              {...control.register(fieldName)}
              id={inputId}
              className={'form-control' + (fieldError ? ' is-invalid' : '')}
              required={required}
            />

            {description && <div className="form-text">{description}</div>}
          </div>
        </div>
      );
    case 'PARAGRAPH':
      return (
        <div id={fieldName} className="form-row">
          <div className="col">
            <label htmlFor={inputId} className={required ? 'required' : undefined}>
              {name}
            </label>

            {fieldAlert}

            <textarea
              {...control.register(fieldName)}
              id={inputId}
              className={'form-control' + (fieldError ? ' is-invalid' : '')}
              required={required}
              onKeyDown={onCtrlEnter(formSubmit)}
            />

            {description && <div className="form-text">{description}</div>}
          </div>
        </div>
      );
    case 'MULTIPLE_CHOICE': {
      const options = rawOptions as (string | number | null)[];
      return (
        <div id={fieldName} className="form-row">
          <div className="col">
            <label htmlFor={inputId} className={required ? 'required' : undefined}>
              {name}
            </label>

            {fieldAlert}

            {!required && (
              <div className="custom-radio mb-10">
                <input
                  {...control.register(fieldName)}
                  type="radio"
                  id={inputId + '_'}
                  value=""
                  defaultChecked
                />
                <label htmlFor={inputId + '_'}>&mdash;</label>
              </div>
            )}

            {options.map((option, index) => {
              const id =
                inputId +
                '_' +
                encodeURIComponent(String(option).replaceAll(' ', '-')) +
                '_' +
                index.toString();
              const notLast = index < options.length - 1;
              if (!option) {
                return (
                  // TODO: show input and require user to input the "other" option
                  <div key={id} className={'custom-radio' + (notLast ? ' mb-10' : '')}>
                    <input
                      {...control.register(fieldName)}
                      required={required}
                      type="radio"
                      id={id}
                      value={OPTION_OTHER_VALUE}
                    />
                    <label htmlFor={id}>
                      <FormattedMessage id="OPTION_OTHER" />
                    </label>
                  </div>
                );
              }
              return (
                <div key={id} className={'custom-radio' + (notLast ? ' mb-10' : '')}>
                  <input
                    {...control.register(fieldName)}
                    required={required}
                    type="radio"
                    id={id}
                    value={option}
                  />
                  <label htmlFor={id}>{option}</label>
                </div>
              );
            })}

            {description && <div className="form-text">{description}</div>}
          </div>
        </div>
      );
    }
    case 'DROPDOWN': {
      const options = rawOptions as (string | number | null)[];
      return (
        <div id={fieldName} className="form-row">
          <div className="col">
            <label htmlFor={inputId} className={required ? 'required' : undefined}>
              {name}
            </label>

            {fieldAlert}

            <select
              {...control.register(fieldName)}
              id={inputId}
              className={'form-control' + (fieldError ? ' is-invalid' : '')}
              required={required}
            >
              {!required && <option value="">&mdash;</option>}
              {options.map((option, index) => {
                const key = option + '_' + index.toString();
                if (!option) {
                  return (
                    // TODO: show input and require user to input the "other" option
                    <FormattedMessage key={key} id="OPTION_OTHER">
                      {(msg) => <option value={OPTION_OTHER_VALUE}>{msg}</option>}
                    </FormattedMessage>
                  );
                }
                return (
                  <option key={key} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>

            {description && <div className="form-text">{description}</div>}
          </div>
        </div>
      );
    }
    case 'CHECKBOXES': {
      const options = rawOptions as (string | number | null)[];
      return (
        <div id={fieldName} className="form-row">
          <div className="col">
            <label htmlFor={inputId} className={required ? 'required' : undefined}>
              {name}
            </label>

            {fieldAlert}

            {options.map((option, index) => {
              const id =
                inputId +
                '_' +
                encodeURIComponent(String(option).replaceAll(' ', '-')) +
                '_' +
                index.toString();
              const notLast = index < options.length - 1;
              if (!option) {
                return (
                  // TODO: show input and require user to input the "other" option
                  <div key={id} className={'custom-checkbox' + (notLast ? ' mb-10' : '')}>
                    <input
                      {...control.register(fieldName)}
                      type="checkbox"
                      id={id}
                      value={OPTION_OTHER_VALUE}
                    />
                    <label htmlFor={id}>
                      <FormattedMessage id="OPTION_OTHER" />
                    </label>
                  </div>
                );
              }
              return (
                <div key={id} className={'custom-checkbox' + (notLast ? ' mb-10' : '')}>
                  <input {...control.register(fieldName)} type="checkbox" id={id} value={option} />
                  <label htmlFor={id}>{option}</label>
                </div>
              );
            })}

            {description && <div className="form-text">{description}</div>}
          </div>
        </div>
      );
    }
    default:
      return (
        <div id={fieldName} className="form-row">
          <div className="col text-danger">Unsupported form fill field {type}</div>
        </div>
      );
  }
}

function buildDefaultValues(
  formQuestionsRef: FormManageBuildDefaultValues_formQuestions$key,
  formResponseRef: FormManageBuildDefaultValues_formResponse$key | null,
) {
  const defaultValues: Record<string, any> = {};

  // no @relay(plural: true) because of https://github.com/facebook/relay/issues/3041
  const formQuestions = readInlineData(
    graphql`
      fragment FormManageBuildDefaultValues_formQuestions on FormQuestionsConnection @inline {
        nodes {
          rowId
          type
          required
          options
        }
      }
    `,
    formQuestionsRef,
  );
  const formResponse = readInlineData(
    graphql`
      fragment FormManageBuildDefaultValues_formResponse on FormResponse @inline {
        answers: formResponseAnswersByFormResponseRowId {
          nodes {
            formQuestionRowId
            value
          }
        }
      }
    `,
    formResponseRef,
  );

  for (const { rowId, type, required, options } of formQuestions.nodes) {
    const answer = formResponse?.answers.nodes.find(
      ({ formQuestionRowId }) => formQuestionRowId === rowId,
    );
    switch (type) {
      case 'SHORT_ANSWER':
      case 'PARAGRAPH':
        defaultValues[rowId] = answer?.value ?? '';
        break;
      case 'MULTIPLE_CHOICE':
      case 'DROPDOWN':
        if (required) {
          defaultValues[rowId] = answer?.value ?? options[0];
        } else {
          defaultValues[rowId] = answer?.value ?? '';
        }
        break;
      case 'CHECKBOXES':
        // regardless of the required flag, always empty array
        defaultValues[rowId] = answer?.value ?? [];
        break;
    }
  }

  return defaultValues;
}
