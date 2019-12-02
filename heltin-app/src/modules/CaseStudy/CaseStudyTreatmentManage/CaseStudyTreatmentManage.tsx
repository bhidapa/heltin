/**
 *
 * CaseStudyTreatmentManage
 *
 */

import React, { useCallback } from 'react';
import { CASE_STUDIES_PAGE_ROUTE, CLIENTS_PAGE_ROUTE } from 'lib/routes';
import { FormattedMessage } from 'react-intl';
import { makeLink } from 'lib/makeLink';
import { addHours, isEqual } from 'date-fns';
import { history } from 'lib/history';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudyTreatmentManage_caseStudy } from 'relay/artifacts/CaseStudyTreatmentManage_caseStudy.graphql';
import { CaseStudyTreatmentManage_caseStudyTreatment } from 'relay/artifacts/CaseStudyTreatmentManage_caseStudyTreatment.graphql';
import { createCaseStudyTreatmentMutation } from 'relay/mutations/CreateCaseStudyTreatment';
import { updateCaseStudyTreatmentMutation } from 'relay/mutations/UpdateCaseStudyTreatment';
import { deleteCaseStudyTreatmentMutation } from 'relay/mutations/DeleteCaseStudyTreatment';

// ui
import { Flex, Button, Text, Input } from '@domonda/ui';
import { DismissableAlert } from 'lib/DismissableAlert';

// form
import {
  Form,
  FormSubmitHandler,
  FormDateField,
  FormSubmitErrorState,
  FormLockedState,
} from '@domonda/react-form';
import { FormCheckboxField, FormTextAreaField, FormInputField } from 'lib/FormFields';

interface FormValues {
  title: string;
  description: string | null;
  score: number | null;
  startedAt: Date;
  endedAt: Date;
  external: boolean;
}

export interface CaseStudyTreatmentManageProps {
  caseStudy: CaseStudyTreatmentManage_caseStudy;
  caseStudyTreatment: CaseStudyTreatmentManage_caseStudyTreatment | null;
}

const defaultCreateTreatmentValues: FormValues = {
  title: (null as any) as string,
  description: null,
  score: null,
  startedAt: new Date(),
  endedAt: addHours(new Date(), 1),
  external: false,
};

let previousFormValues: FormValues | null = null;

const CaseStudyTreatmentManage: React.FC<CaseStudyTreatmentManageProps> = (props) => {
  const { caseStudy, caseStudyTreatment } = props;

  const submit = useCallback<FormSubmitHandler<FormValues>>(
    async ({ startedAt, endedAt, ...rest }) => {
      if (caseStudyTreatment) {
        return updateCaseStudyTreatmentMutation({
          input: {
            rowId: caseStudyTreatment.rowId,
            startedAt: startedAt instanceof Date ? startedAt.toUTCString() : startedAt,
            endedAt: endedAt instanceof Date ? endedAt.toUTCString() : endedAt,
            ...rest,
          },
        });
      }
      const { createCaseStudyTreatment } = await createCaseStudyTreatmentMutation({
        input: {
          caseStudyRowId: caseStudy.rowId,
          startedAt: startedAt instanceof Date ? startedAt.toUTCString() : startedAt,
          endedAt: endedAt instanceof Date ? endedAt.toUTCString() : endedAt,
          ...rest,
        },
      });
      if (!createCaseStudyTreatment || !createCaseStudyTreatment.caseStudyTreatment) {
        throw new Error('Malformed CreateCaseStudyTreatment response!');
      }
      history.push(
        `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}/treatments/${createCaseStudyTreatment.caseStudyTreatment.rowId}`,
      );
    },
    [caseStudy, caseStudyTreatment],
  );

  return (
    <Flex container direction="column" spacing="small">
      <Flex item container spacing="tiny" align="center">
        <Flex item>
          <Flex container direction="column">
            <Flex item>
              <Text size="large" weight="medium" withPlaceholder>
                {caseStudyTreatment ? (
                  caseStudyTreatment.title
                ) : (
                  <FormattedMessage id="NEW_TREATMENT" />
                )}
              </Text>
            </Flex>
            <Flex item>
              <Text size="medium" color="primary" inline>
                <FormattedMessage id="TREATMENT_FOR_CASE_STUDY" />
              </Text>
              &nbsp;
              <Button
                color="primary"
                size="medium"
                variant="link"
                component={makeLink({
                  to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}`,
                })}
              >
                {caseStudy.title}
              </Button>
              &nbsp;
              <Text size="medium" color="primary" inline style={{ textTransform: 'lowercase' }}>
                <FormattedMessage id="FOR" />
              </Text>
              &nbsp;
              <Button
                color="primary"
                size="medium"
                variant="link"
                component={makeLink({
                  to: `${CLIENTS_PAGE_ROUTE}/${caseStudy.client!.rowId}`,
                })}
              >
                {caseStudy.client!.fullName}
              </Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex item flex={1} />
        {caseStudyTreatment && (
          <Flex item>
            <ResolveOnTrigger
              params={undefined}
              promise={async () => {
                await deleteCaseStudyTreatmentMutation({
                  input: { rowId: caseStudyTreatment.rowId },
                });
                history.push(`${CLIENTS_PAGE_ROUTE}/${caseStudy.client!.rowId}`);
              }}
            >
              {({ trigger, loading, error, clearError }) =>
                error ? (
                  <DismissableAlert message={error} onDismiss={clearError} />
                ) : (
                  <Button variant="primary" color="danger" onClick={trigger} disabled={loading}>
                    <FormattedMessage id="DELETE" />
                  </Button>
                )
              }
            </ResolveOnTrigger>
          </Flex>
        )}
      </Flex>
      <Flex item>
        <Form<FormValues>
          defaultValues={
            caseStudyTreatment
              ? {
                  ...caseStudyTreatment,
                  startedAt: new Date(caseStudyTreatment.startedAt),
                  endedAt: new Date(caseStudyTreatment.endedAt),
                }
              : defaultCreateTreatmentValues
          }
          onSubmit={submit}
          transformer={(values) => {
            // 1 hour from start time is the end time, when start time changes
            if (previousFormValues && !isEqual(previousFormValues.startedAt, values.startedAt)) {
              previousFormValues = values;
              return {
                ...values,
                endedAt: addHours(values.startedAt, 1),
              };
            }

            previousFormValues = values;
            return values;
          }}
        >
          <Flex container direction="column" spacing="tiny">
            <Flex item>
              <FormSubmitErrorState>
                {(error, { resetSubmitError }) =>
                  error && <DismissableAlert message={error} onDismiss={resetSubmitError} />
                }
              </FormSubmitErrorState>
            </Flex>
            <Flex item>
              <FormCheckboxField
                path="external"
                label={<FormattedMessage id="EXTERNAL" />}
                color="secondary"
              />
            </Flex>
            <Flex item>
              <FormInputField
                autoFocus
                required
                path="title"
                label={<FormattedMessage id="TITLE" />}
                color="secondary"
              />
            </Flex>
            <Flex item container spacing="tiny">
              <Flex item flex={1}>
                <FormDateField path="startedAt">
                  {({ DateInput }) => (
                    <DateInput
                      showTimeSelect
                      timeIntervals={15}
                      timeFormat="HH:mm"
                      dateFormat="dd.MM.yyyy HH:mm"
                      customInput={<Input label={<FormattedMessage id="STARTED" />} required />}
                    />
                  )}
                </FormDateField>
              </Flex>
              <Flex item flex={1}>
                <FormDateField path="endedAt">
                  {({ DateInput }) => (
                    <DateInput
                      showTimeSelect
                      timeIntervals={15}
                      timeFormat="HH:mm"
                      dateFormat="dd.MM.yyyy HH:mm"
                      customInput={<Input label={<FormattedMessage id="ENDED" />} required />}
                    />
                  )}
                </FormDateField>
              </Flex>
            </Flex>
            <Flex item>
              <FormTextAreaField
                rows={6}
                path="description"
                label={<FormattedMessage id="DESCRIPTION" />}
              />
            </Flex>
            <Flex item container justify="flex-end" spacing="tiny">
              {caseStudyTreatment && (
                <Flex item>
                  <Button
                    component={makeLink({
                      to: `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}/treatments/create`,
                    })}
                  >
                    <FormattedMessage id="CREATE_NEW" />
                  </Button>
                </Flex>
              )}
              <Flex item>
                <FormLockedState>
                  {(locked) => (
                    <Button variant="primary" type="submit" disabled={locked}>
                      {caseStudyTreatment ? (
                        <FormattedMessage id="SAVE" />
                      ) : (
                        <FormattedMessage id="CREATE" />
                      )}
                    </Button>
                  )}
                </FormLockedState>
              </Flex>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

const ComposedCaseStudyTreatmentManage = createFragmentContainer(CaseStudyTreatmentManage, {
  caseStudy: graphql`
    fragment CaseStudyTreatmentManage_caseStudy on CaseStudy {
      rowId
      title
      client: clientByClientRowId {
        rowId
        fullName
      }
    }
  `,
  caseStudyTreatment: graphql`
    fragment CaseStudyTreatmentManage_caseStudyTreatment on CaseStudyTreatment {
      rowId
      title
      description
      score
      startedAt
      endedAt
      external
    }
  `,
});
export { ComposedCaseStudyTreatmentManage as CaseStudyTreatmentManage };
