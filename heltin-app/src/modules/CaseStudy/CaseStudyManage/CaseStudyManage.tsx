/**
 *
 * CaseStudyManage
 *
 */

import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';
import { makeLink } from 'lib/makeLink';
import { CLIENTS_PAGE_ROUTE, CASE_STUDIES_PAGE_ROUTE } from 'lib/routes';
import { history } from 'lib/history';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudyManage_client } from 'relay/artifacts/CaseStudyManage_client.graphql';
import { CaseStudyManage_caseStudy } from 'relay/artifacts/CaseStudyManage_caseStudy.graphql';
import { createCaseStudyMutation } from 'relay/mutations/CreateCaseStudy';
import { createCaseHistoryMutation } from 'relay/mutations/CreateCaseHistory';
import { updateCaseStudyMutation } from 'relay/mutations/UpdateCaseStudy';
import { deleteCaseStudyMutation } from 'relay/mutations/DeleteCaseStudy';

// ui
import { Flex, Button, Text } from '@domonda/ui';
import { DismissableAlert } from 'lib/DismissableAlert';

// form
import {
  Form,
  FormLockedState,
  FormSubmitHandler,
  FormSubmitErrorState,
} from '@domonda/react-form';
import { FormInputField } from 'lib/FormFields';

interface FormValues {
  rowId: UUID | null;
  description: string;
}

export interface CaseStudyManageProps {
  client: CaseStudyManage_client;
  caseStudy: CaseStudyManage_caseStudy | null;
}

const CaseStudyManage: React.FC<CaseStudyManageProps> = (props) => {
  const { client, caseStudy } = props;

  const submit = useCallback<FormSubmitHandler<FormValues>>(async ({ rowId, description }) => {
    if (rowId) {
      return updateCaseStudyMutation({
        input: {
          rowId,
          description,
        },
      });
    }
    const { createCaseStudy } = await createCaseStudyMutation({
      input: {
        clientRowId: client.rowId,
        description,
      },
    });

    if (!createCaseStudy || !createCaseStudy.caseStudy) {
      throw new Error('Malformed CreateCaseStudyMutation response!');
    }

    await createCaseHistoryMutation({ input: { caseStudyRowId: createCaseStudy.caseStudy.rowId } })

    history.push(`${CASE_STUDIES_PAGE_ROUTE}/${createCaseStudy.caseStudy.rowId}`);
  }, []);

  return (
    <Flex container spacing="small" direction="column">
      <Flex item container spacing="tiny" align="center" justify="space-between">
        <Flex item>
          <Text size="large" weight="medium">
            {caseStudy ? caseStudy.description : <FormattedMessage id="NEW_CASE_STUDY" />}
          </Text>
          <Text size="medium" color="primary">
            <Button
              color="primary"
              size="medium"
              variant="link"
              component={makeLink({
                to: `${CLIENTS_PAGE_ROUTE}/${client.rowId}`,
              })}
            >
              {client.fullName}
            </Button>
          </Text>
        </Flex>
        {caseStudy && (
          <Flex item>
            <ResolveOnTrigger
              params={undefined}
              promise={async () => {
                const { deleteCaseStudy } = await deleteCaseStudyMutation({
                  input: { rowId: caseStudy.rowId },
                });
                if (!deleteCaseStudy) {
                  throw new Error('Malfored DeleteCaseStudy response!');
                }
                history.push(`${CLIENTS_PAGE_ROUTE}/${deleteCaseStudy.clientByClientRowId!.rowId}`);
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
          defaultValues={{
            rowId: caseStudy ? caseStudy.rowId : null,
            description: caseStudy ? caseStudy.description : ((null as any) as string), // field is required
          }}
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
            <Flex item>
              <FormInputField
                required
                path="description"
                label={<FormattedMessage id="DESCRIPTION" />}
              />
            </Flex>
            <Flex item container justify="flex-end">
              <FormLockedState>
                {(submitting) => (
                  <Button disabled={submitting} variant="primary" type="submit">
                    {caseStudy ? <FormattedMessage id="SAVE" /> : <FormattedMessage id="CREATE" />}
                  </Button>
                )}
              </FormLockedState>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

const ComposedCaseStudyManage = createFragmentContainer(CaseStudyManage, {
  client: graphql`
    fragment CaseStudyManage_client on Client {
      rowId
      fullName
    }
  `,
  caseStudy: graphql`
    fragment CaseStudyManage_caseStudy on CaseStudy {
      rowId
      description
    }
  `,
});
export { ComposedCaseStudyManage as CaseStudyManage };
