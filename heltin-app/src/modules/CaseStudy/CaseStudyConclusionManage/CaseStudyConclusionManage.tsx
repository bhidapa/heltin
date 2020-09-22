/**
 *
 * CaseStudyConclusionManage
 *
 */

import React, { useCallback } from 'react';
import { CASE_STUDIES_PAGE_ROUTE, CLIENTS_PAGE_ROUTE } from 'lib/routes';
import { FormattedMessage } from 'react-intl';
import { makeLink } from 'lib/makeLink';
import { history } from 'lib/history';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { usePromiseMutation } from 'relay/hooks';
import { CaseStudyConclusionManage_caseStudy$key } from 'relay/artifacts/CaseStudyConclusionManage_caseStudy.graphql';
import { CaseStudyConclusionManage_caseStudyConclusion$key } from 'relay/artifacts/CaseStudyConclusionManage_caseStudyConclusion.graphql';
import { CaseStudyConclusionManageCreateMutation } from 'relay/artifacts/CaseStudyConclusionManageCreateMutation.graphql';
import { CaseStudyConclusionManageUpdateMutation } from 'relay/artifacts/CaseStudyConclusionManageUpdateMutation.graphql';
import { CaseStudyConclusionManageDeleteMutation } from 'relay/artifacts/CaseStudyConclusionManageDeleteMutation.graphql';

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
import { FormTextAreaField, FormSelectField } from 'lib/FormFields';
import {
  CaseStudyConclusionType,
  CaseStudyConclusionTypeSelectOptions,
} from '../CaseStudyConclusionType';

interface FormValues {
  type: CaseStudyConclusionType;
  concludedAt: Date | string;
  description: string;
}

export interface CaseStudyConclusionManageProps {
  caseStudy: CaseStudyConclusionManage_caseStudy$key;
  caseStudyConclusion: CaseStudyConclusionManage_caseStudyConclusion$key | null;
}

const defaultCreateConclusionValues: FormValues = {
  type: CaseStudyConclusionType.TreatmentCompletion,
  concludedAt: new Date(),
  description: (null as unknown) as string,
};

export const CaseStudyConclusionManage: React.FC<CaseStudyConclusionManageProps> = (props) => {
  const { caseStudy: caseStudyKey, caseStudyConclusion: caseStudyConclusionKey } = props;

  const caseStudy = useFragment(
    graphql`
      fragment CaseStudyConclusionManage_caseStudy on CaseStudy {
        rowId
        title
        client: clientByClientRowId {
          rowId
          fullName
        }
      }
    `,
    caseStudyKey,
  );

  const caseStudyConclusion = useFragment(
    graphql`
      fragment CaseStudyConclusionManage_caseStudyConclusion on CaseStudyConclusion {
        rowId
        type
        concludedAt
        description
      }
    `,
    caseStudyConclusionKey,
  );

  const createCaseStudyConclusion = usePromiseMutation<
    CaseStudyConclusionManageCreateMutation
  >(graphql`
    mutation CaseStudyConclusionManageCreateMutation($input: CreateCaseStudyConclusionInput!) {
      createCaseStudyConclusion(input: $input) {
        caseStudyConclusion {
          rowId
        }
      }
    }
  `);

  const updateCaseStudyConclusion = usePromiseMutation<
    CaseStudyConclusionManageUpdateMutation
  >(graphql`
    mutation CaseStudyConclusionManageUpdateMutation($input: UpdateCaseStudyConclusionInput!) {
      updateCaseStudyConclusion(input: $input) {
        caseStudyConclusion {
          ...CaseStudyConclusionManage_caseStudyConclusion @relay(mask: false)
        }
      }
    }
  `);

  const deleteCaseStudyConclusion = usePromiseMutation<
    CaseStudyConclusionManageDeleteMutation
  >(graphql`
    mutation CaseStudyConclusionManageDeleteMutation($input: DeleteCaseStudyConclusionInput!) {
      deleteCaseStudyConclusion(input: $input) {
        clientMutationId
      }
    }
  `);

  const submit = useCallback<FormSubmitHandler<FormValues>>(
    async ({ concludedAt, ...rest }) => {
      if (caseStudyConclusion) {
        return updateCaseStudyConclusion({
          variables: {
            input: {
              rowId: caseStudyConclusion.rowId,
              concludedAt: concludedAt instanceof Date ? concludedAt.toISOString() : concludedAt,
              ...rest,
            },
          },
        });
      }
      const result = await createCaseStudyConclusion({
        variables: {
          input: {
            caseStudyRowId: caseStudy.rowId,
            concludedAt: concludedAt instanceof Date ? concludedAt.toISOString() : concludedAt,
            ...rest,
          },
        },
      });
      if (
        !result.createCaseStudyConclusion ||
        !result.createCaseStudyConclusion.caseStudyConclusion
      ) {
        throw new Error('Malformed CreateCaseStudyConclusion response!');
      }
      history.push(
        `${CASE_STUDIES_PAGE_ROUTE}/${caseStudy.rowId}/conclusions/${result.createCaseStudyConclusion.caseStudyConclusion.rowId}`,
      );
    },
    [caseStudy, caseStudyConclusion],
  );

  return (
    <Flex container direction="column" spacing="small">
      <Flex item container spacing="tiny" align="center">
        <Flex item>
          <Flex container direction="column">
            <Flex item>
              <Text size="large" weight="medium" withPlaceholder>
                {caseStudyConclusion ? (
                  <FormattedMessage id="CONCLUSION" />
                ) : (
                  <FormattedMessage id="CONCLUDE" />
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
        {caseStudyConclusion && (
          <Flex item>
            <ResolveOnTrigger
              params={undefined}
              promise={async () => {
                await deleteCaseStudyConclusion({
                  variables: {
                    input: { rowId: caseStudyConclusion.rowId },
                  },
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
            caseStudyConclusion
              ? {
                  ...caseStudyConclusion,
                  type: caseStudyConclusion.type as CaseStudyConclusionType,
                  concludedAt: new Date(caseStudyConclusion.concludedAt),
                }
              : defaultCreateConclusionValues
          }
          onSubmit={submit}
        >
          <Flex container direction="column" spacing="tiny">
            <Flex item>
              <FormSubmitErrorState>
                {(error, { resetSubmitError }) =>
                  error && <DismissableAlert message={error} onDismiss={resetSubmitError} />
                }
              </FormSubmitErrorState>
            </Flex>
            <Flex item container spacing="tiny">
              <Flex item flex={1}>
                <FormSelectField path="type" label={<FormattedMessage id="TYPE" />}>
                  <CaseStudyConclusionTypeSelectOptions />
                </FormSelectField>
              </Flex>
              <Flex item flex={1}>
                <FormDateField path="concludedAt">
                  {({ DateInput }) => (
                    <DateInput
                      showTimeSelect
                      timeIntervals={15}
                      timeFormat="HH:mm"
                      dateFormat="dd.MM.yyyy HH:mm"
                      customInput={<Input label={<FormattedMessage id="CONCLUDED" />} required />}
                    />
                  )}
                </FormDateField>
              </Flex>
            </Flex>
            <Flex item>
              <FormTextAreaField
                required
                rows={6}
                path="description"
                label={<FormattedMessage id="DESCRIPTION" />}
              />
            </Flex>
            <Flex item container justify="flex-end">
              <Flex item>
                <FormLockedState>
                  {(locked) => (
                    <Button variant="primary" type="submit" disabled={locked}>
                      {caseStudyConclusion ? (
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
