/**
 *
 * CaseStudyTherapistsManage
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ResolveOnTrigger } from 'lib/ResolveOnTrigger';
import { makeLink } from 'lib/makeLink';
import { PROFESSIONALS_PAGE_ROUTE } from 'lib/routes';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseStudyTherapistsManage_caseStudy } from 'relay/artifacts/CaseStudyTherapistsManage_caseStudy.graphql';
import { createCaseStudyProfessionalMutation } from 'relay/mutations/CreateCaseStudyProfessional';
import { updateCaseStudyProfessionalMutation } from 'relay/mutations/UpdateCaseStudyProfessional';
import { deleteCaseStudyProfessionalMutation } from 'relay/mutations/DeleteCaseStudyProfessional';

// ui
import { Flex, Button, Text } from '@domonda/ui';
import { DismissableAlert } from 'lib/DismissableAlert';
import { PlusIcon, TrashIcon } from 'lib/icons';

// form
import { Form, FormSubmitErrorState, FormField } from '@domonda/react-form';
import { FormCheckboxField } from 'lib/FormFields';
import {
  AutocompleteProfessional,
  AutocompleteProfessionalItem,
} from 'modules/Autocomplete/AutocompleteProfessional';

// decorate
import { decorate, Decorate } from './decorate';

export interface CaseStudyTherapistsManageProps {
  caseStudy: CaseStudyTherapistsManage_caseStudy;
}

const CaseStudyTherapistsManage: React.FC<CaseStudyTherapistsManageProps & Decorate> = (props) => {
  const { classes, caseStudy } = props;

  return (
    <Flex container spacing="small" direction="column">
      <Flex item>
        <Text size="large" weight="medium">
          <FormattedMessage id="THERAPISTS" />
        </Text>
      </Flex>
      <Flex item container direction="column" spacing="tiny">
        {caseStudy.caseStudyProfessionals.nodes.length > 0 ? (
          caseStudy.caseStudyProfessionals.nodes.map(({ rowId, primary, professional }) => (
            <Flex key={rowId} item>
              <ResolveOnTrigger
                params={{ input: { rowId } }}
                promise={deleteCaseStudyProfessionalMutation}
              >
                {({
                  trigger: triggerDelete,
                  error: deleteError,
                  clearError: clearDeleteError,
                  loading: deleting,
                }) => (
                  <Form
                    defaultValues={{
                      primary,
                    }}
                    onSubmit={({ primary }) =>
                      updateCaseStudyProfessionalMutation({ input: { rowId, primary } })
                    }
                    autoSubmit
                    autoSubmitDelay={0}
                    className={classes.caseStudyProfessional}
                    resetOnFailedSubmit
                  >
                    {deleteError ? (
                      <DismissableAlert message={deleteError} onDismiss={clearDeleteError} />
                    ) : (
                      <FormSubmitErrorState>
                        {(error, { resetSubmitError }) =>
                          error ? (
                            <DismissableAlert message={error} onDismiss={resetSubmitError} />
                          ) : (
                            <Flex container spacing="tiny" align="center">
                              <Flex item>
                                <Text>
                                  <FormattedMessage id={professional.type} />
                                </Text>
                              </Flex>
                              <Flex item flex={1} style={{ display: 'flex' }}>
                                <Button
                                  variant="link"
                                  component={makeLink({
                                    to: `${PROFESSIONALS_PAGE_ROUTE}/${professional.rowId}`,
                                  })}
                                >
                                  {professional.fullName}
                                </Button>
                              </Flex>
                              <Flex item>
                                <FormCheckboxField
                                  path="primary"
                                  color="secondary"
                                  label={<FormattedMessage id="PRIMARY_PROFESSIONAL" />}
                                />
                              </Flex>
                              <Flex item>
                                <Button
                                  color="danger"
                                  variant="text"
                                  onClick={triggerDelete}
                                  disabled={deleting}
                                >
                                  <TrashIcon />
                                </Button>
                              </Flex>
                            </Flex>
                          )
                        }
                      </FormSubmitErrorState>
                    )}
                  </Form>
                )}
              </ResolveOnTrigger>
            </Flex>
          ))
        ) : (
          <Flex item>
            <Text color="warning">
              <FormattedMessage id="NO_ENTRIES" />
            </Text>
          </Flex>
        )}
        <Flex item>
          <Form
            resetOnSuccessfulSubmit
            defaultValues={{
              professional: null as AutocompleteProfessionalItem | null,
              primary: false,
            }}
            onSubmit={({ professional, primary }) =>
              createCaseStudyProfessionalMutation({
                input: {
                  caseStudyRowId: caseStudy.rowId,
                  primary,
                  mentalHealthProfessionalRowId: professional ? professional.rowId : '',
                },
              })
            }
          >
            <FormSubmitErrorState>
              {(error, { resetSubmitError }) =>
                error ? (
                  <DismissableAlert message={error} onDismiss={resetSubmitError} />
                ) : (
                  <Flex container spacing="tiny" align="baseline">
                    <Flex item flex={1}>
                      <FormField<AutocompleteProfessionalItem | null> path="professional">
                        {({ value, setValue }) => (
                          <AutocompleteProfessional
                            selectedItem={value}
                            onChange={setValue}
                            required
                          />
                        )}
                      </FormField>
                    </Flex>
                    <Flex item>
                      <FormCheckboxField
                        color="secondary"
                        path="primary"
                        label={<FormattedMessage id="PRIMARY_PROFESSIONAL" />}
                      />
                    </Flex>
                    <Flex item>
                      <Button color="success" variant="text" type="submit">
                        <PlusIcon />
                      </Button>
                    </Flex>
                  </Flex>
                )
              }
            </FormSubmitErrorState>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  );
};

const ComposedCaseStudyTherapistsManage = createFragmentContainer(
  decorate(CaseStudyTherapistsManage),
  {
    caseStudy: graphql`
      fragment CaseStudyTherapistsManage_caseStudy on CaseStudy {
        rowId
        caseStudyProfessionals: caseStudyMentalHealthProfessionalsByCaseStudyRowId(
          orderBy: [CREATED_AT_ASC]
        ) {
          nodes {
            rowId
            professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {
              rowId
              type
              fullName
            }
            primary
          }
        }
      }
    `,
  },
);
export { ComposedCaseStudyTherapistsManage as CaseStudyTherapistsManage };
