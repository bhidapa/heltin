/**
 *
 * CaseHistoryManage
 *
 */

import React, { useCallback } from 'react';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { CaseHistoryManage_caseHistory } from 'relay/artifacts/CaseHistoryManage_caseHistory.graphql';
import { createCaseHistoryMutation } from 'relay/mutations/CreateCaseHistory';
import { updateCaseHistoryMutation } from 'relay/mutations/UpdateCaseHistory';

// ui
import { Flex, Button, Text, Label, Divider } from '@domonda/ui';
import { DismissableAlert } from 'lib/DismissableAlert';
import { PlusIcon, MinusIcon } from 'lib/icons';

// form
import {
  Form,
  FormSubmitErrorState,
  FormSubmittingState,
  FormSubmitHandler,
  FormField,
} from '@domonda/react-form';
import {
  FormSelectField,
  FormNumberField,
  FormArrayField,
  FormCheckboxField,
  FormTextAreaField,
} from 'lib/FormFields';
import { CaseHistoryAccompaniedByTypeSelectOptions } from '../CaseHistoryAccompaniedByType';
import { CaseHistoryLivesWithTypeSelectOptions } from '../CaseHistoryLivesWithType';
import {
  CaseHistoryDivorcedParentsType,
  CaseHistoryDivorcedParentsTypeSelectOptions,
} from '../CaseHistoryDivorcedParentsType';
import { CaseHistoryDivorceOutcomeTypeSelectOptions } from '../CaseHistoryDivorceOutcomeType';

// selectors
import { deriveFormValues, FormValues } from './selectors';
import { FormattedMessage } from 'react-intl';
import { CaseHistoryArrivalReasonTypeSelectOptions } from '../CaseHistoryArrivalReasonType';
import { CaseHistoryReferralTypeSelectOptions } from '../CaseHistoryReferralType';
import { ProfessionalTypeSelectOptions } from 'modules/Professional/ProfessionalTypeSelectOptions';
import { CaseHistoryReasonOfMultipleAdoptionsTypeSelectOptions } from '../CaseHistoryReasonOfMultipleAdoptionsType';
import { CaseHistoryReportedAbuseTypeSelectOptions } from '../CaseHistoryReportedAbuseType';
import { CaseHistoryAbuseTypeSelectOptions } from '../CaseHistoryAbuseType';
import { CaseHistoryParentsInJailTypeSelectOptions } from '../CaseHistoryParentsInJailType';
import { CaseHistoryIndividualTypeSelectOptions } from '../CaseHistoryIndividualType';

export interface CaseHistoryManageProps {
  caseStudyRowId: UUID;
  caseHistory: CaseHistoryManage_caseHistory | null;
}

const CaseHistoryManage: React.FC<CaseHistoryManageProps> = (props) => {
  const submit = useCallback<FormSubmitHandler<FormValues>>(
    ({ caseHistoryRowId, caseStudyRowId, ...rest }, { state }) => {
      // extracts only values which are present on the screen
      // changes empty arrays to `null`. null/undefined array elements are filtered out
      const input = Object.keys(state.fields).reduce((agg, key) => {
        let val = rest[key as keyof typeof rest];
        if (val === undefined) {
          return agg;
        }
        if (Array.isArray(val)) {
          val = (val as any[]).filter((el) => !!el);
          if ((val as any[]).length === 0) {
            val = null;
          }
        }
        return { ...agg, [key]: val };
      }, {});

      if (caseHistoryRowId) {
        return updateCaseHistoryMutation({
          input: {
            rowId: caseHistoryRowId,
            ...input,
          },
        });
      } else {
        return createCaseHistoryMutation({
          input: {
            ...input,
            caseStudyRowId,
          },
        });
      }
    },
    [],
  );

  return (
    <Flex container spacing="small" direction="column">
      <Flex item>
        <Text size="large" weight="medium">
          <FormattedMessage id="CASE_HISTORY" />
        </Text>
      </Flex>
      <Flex item>
        <Form defaultValues={deriveFormValues(props)} resetOnDefaultValuesChange onSubmit={submit}>
          <Flex container direction="column" spacing="tiny">
            <Flex item>
              <FormSubmitErrorState>
                {(error, { resetSubmitError }) =>
                  error && <DismissableAlert message={error} onDismiss={resetSubmitError} />
                }
              </FormSubmitErrorState>
            </Flex>
            <Flex item>
              <FormSelectField
                path="accompaniedBy"
                label={<FormattedMessage id="ACCOMPANIED_BY" />}
              >
                <CaseHistoryAccompaniedByTypeSelectOptions />
              </FormSelectField>
            </Flex>
            <Flex item>
              <Label>
                <FormattedMessage id="ARRIVAL_REASON" />
              </Label>
              <Flex item container spacing="tiny">
                <FormArrayField path="arrivalReason">
                  {({ items, add, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {items.map((_0, index) => (
                        <Flex key={index.toString()} item maxWidth={152}>
                          <FormSelectField path={`arrivalReason[${index}]`}>
                            <CaseHistoryArrivalReasonTypeSelectOptions />
                          </FormSelectField>
                        </Flex>
                      ))}
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="danger"
                          onClick={remove}
                          disabled={items.length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button variant="text" size="tiny" color="success" onClick={add}>
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </FormArrayField>
              </Flex>
            </Flex>
            <Flex item>
              <Divider />
            </Flex>
            <Flex item>
              <Label>
                <FormattedMessage id="EARLIER_PROFESSIONAL_HELP" />
              </Label>
              <Flex item container spacing="tiny">
                <FormArrayField path="earlierProfessionalHelp">
                  {({ items, add, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {items.map((_0, index) => (
                        <Flex key={index.toString()} item maxWidth={152}>
                          <FormSelectField path={`earlierProfessionalHelp[${index}]`}>
                            <ProfessionalTypeSelectOptions />
                          </FormSelectField>
                        </Flex>
                      ))}
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="danger"
                          onClick={remove}
                          disabled={items.length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button variant="text" size="tiny" color="success" onClick={add}>
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </FormArrayField>
              </Flex>
            </Flex>
            <Flex item>
              <FormTextAreaField
                path="previousTreatment"
                rows={5}
                label={<FormattedMessage id="PREVIOUS_TREATMENT" />}
              />
            </Flex>
            <Flex item>
              <Label>
                <FormattedMessage id="REFERAL" />
              </Label>
              <Flex item container spacing="tiny">
                <FormArrayField path="referral">
                  {({ items, add, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {items.map((_0, index) => (
                        <Flex key={index.toString()} item maxWidth={152}>
                          <FormSelectField path={`referral[${index}]`}>
                            <CaseHistoryReferralTypeSelectOptions />
                          </FormSelectField>
                        </Flex>
                      ))}
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="danger"
                          onClick={remove}
                          disabled={items.length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button variant="text" size="tiny" color="success" onClick={add}>
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </FormArrayField>
              </Flex>
            </Flex>
            <Flex item>
              <FormField<any[] | null> path="referral">
                {({ value }) => {
                  if (!value || value.every((val) => !val)) {
                    return null;
                  }
                  return (
                    <FormCheckboxField
                      color="secondary"
                      path="involvedReferral"
                      label={<FormattedMessage id="INVOLVED_REFERRAL" />}
                    />
                  );
                }}
              </FormField>
            </Flex>
            <Flex item>
              <FormField<any[] | null> path="referral">
                {({ value }) => {
                  if (!value || value.every((val) => !val)) {
                    return null;
                  }
                  return (
                    <FormTextAreaField
                      path="referralDiagnosis"
                      rows={5}
                      label={<FormattedMessage id="REFERRAL_DIAGNOSIS" />}
                    />
                  );
                }}
              </FormField>
            </Flex>
            <Flex item>
              <Divider />
            </Flex>

            <Flex item container spacing="tiny">
              <Flex item>
                <FormSelectField
                  path="divorcedParents"
                  label={<FormattedMessage id="DIVORCED_PARENTS" />}
                >
                  <CaseHistoryDivorcedParentsTypeSelectOptions />
                </FormSelectField>
              </Flex>
              <FormField<CaseHistoryDivorcedParentsType | null> path="divorcedParents">
                {({ value }) => {
                  if (!value || value === CaseHistoryDivorcedParentsType.No) {
                    return null;
                  }
                  return (
                    <Flex item>
                      <FormSelectField
                        path="divorceOutcome"
                        label={<FormattedMessage id="DIVORCE_OUTCOME" />}
                      >
                        <CaseHistoryDivorceOutcomeTypeSelectOptions />
                      </FormSelectField>
                    </Flex>
                  );
                }}
              </FormField>
              <Flex item>
                <FormSelectField
                  path="parentsInJail"
                  label={<FormattedMessage id="PARENTS_IN_JAIL" />}
                >
                  <CaseHistoryParentsInJailTypeSelectOptions />
                </FormSelectField>
              </Flex>
            </Flex>
            <Flex item>
              <Divider />
            </Flex>
            <Flex item>
              <Label>
                <FormattedMessage id="LIVES_WITH" />
              </Label>
              <Flex item container spacing="tiny">
                <FormArrayField path="livesWith">
                  {({ items, add, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {items.map((_0, index) => (
                        <Flex key={index.toString()} item maxWidth={152}>
                          <FormSelectField path={`livesWith[${index}]`}>
                            <CaseHistoryLivesWithTypeSelectOptions />
                          </FormSelectField>
                        </Flex>
                      ))}
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="danger"
                          onClick={remove}
                          disabled={items.length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button variant="text" size="tiny" color="success" onClick={add}>
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </FormArrayField>
              </Flex>
            </Flex>
            <Flex item>
              <Divider />
            </Flex>
            <Flex item>
              <Label>
                <FormattedMessage id="LOSS_OF_CLOSE_INDIVIDUAL" />
              </Label>
              <Flex item container spacing="tiny">
                <FormArrayField path="lossOfCloseIndividual">
                  {({ items, add, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {items.map((_0, index) => (
                        <Flex key={index.toString()} item maxWidth={152}>
                          <FormSelectField path={`lossOfCloseIndividual[${index}]`}>
                            <CaseHistoryIndividualTypeSelectOptions />
                          </FormSelectField>
                        </Flex>
                      ))}
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="danger"
                          onClick={remove}
                          disabled={items.length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button variant="text" size="tiny" color="success" onClick={add}>
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </FormArrayField>
              </Flex>
            </Flex>
            <Flex item maxWidth={292}>
              <FormField<any[] | null> path="lossOfCloseIndividual">
                {({ value }) => {
                  if (!value || value.every((val) => !val)) {
                    return null;
                  }
                  return (
                    <FormNumberField
                      path="ageDuringLossOfCloseIndividual"
                      label={<FormattedMessage id="AGE_DURING_LOSS_OF_CLOSE_INDIVIDUAL" />}
                    />
                  );
                }}
              </FormField>
            </Flex>
            <Flex item>
              <Divider />
            </Flex>
            <Flex item container spacing="tiny">
              <Flex item>
                <FormNumberField
                  path="adoptionAge"
                  label={<FormattedMessage id="ADOPTION_AGE" />}
                />
              </Flex>
              <Flex item>
                <FormField path="adoptionAge">
                  {({ value }) => {
                    if (value == null) {
                      return null;
                    }
                    return (
                      <Flex item>
                        <FormNumberField
                          path="numberOfAdoptions"
                          label={<FormattedMessage id="NUMBER_OF_ADOPTIONS" />}
                          allowDecimal={false}
                          isAllowed={(value) => value == null || value > 0}
                        />
                      </Flex>
                    );
                  }}
                </FormField>
              </Flex>
              <Flex item>
                <FormField<number | null> path="numberOfAdoptions">
                  {({ value }) => {
                    if (value == null || value <= 1) {
                      return null;
                    }
                    return (
                      <>
                        <Label>
                          <FormattedMessage id="REASON_OF_MULTIPLE_ADOPTIONS" />
                        </Label>
                        <Flex item container spacing="tiny">
                          <FormArrayField path="reasonOfMultipleAdoptions">
                            {({ items, add, remove }) => (
                              <Flex item container spacing="tiny" align="baseline">
                                {items.map((_0, index) => (
                                  <Flex key={index.toString()} item maxWidth={152}>
                                    <FormSelectField path={`reasonOfMultipleAdoptions[${index}]`}>
                                      <CaseHistoryReasonOfMultipleAdoptionsTypeSelectOptions />
                                    </FormSelectField>
                                  </Flex>
                                ))}
                                <Flex item>
                                  <Button
                                    variant="text"
                                    size="tiny"
                                    color="danger"
                                    onClick={remove}
                                    disabled={items.length === 1}
                                  >
                                    <MinusIcon />
                                  </Button>
                                </Flex>
                                <Flex item>
                                  <Button variant="text" size="tiny" color="success" onClick={add}>
                                    <PlusIcon />
                                  </Button>
                                </Flex>
                              </Flex>
                            )}
                          </FormArrayField>
                        </Flex>
                      </>
                    );
                  }}
                </FormField>
              </Flex>
            </Flex>
            <Flex item>
              <Divider />
            </Flex>
            <Flex item container spacing="tiny" align="baseline">
              <Flex item>
                <FormField<boolean | null> path="attendsKindergarten">
                  {({ value }) => (
                    <FormNumberField
                      disabled={!!value}
                      path="schoolMark"
                      label={<FormattedMessage id="SCHOOL_MARK" />}
                    />
                  )}
                </FormField>
              </Flex>
              <Flex item>
                <FormCheckboxField
                  color="secondary"
                  path="attendsKindergarten"
                  label={<FormattedMessage id="ATTENDS_KINDERGARTEN" />}
                />
              </Flex>
            </Flex>
            <Flex item>
              <FormCheckboxField
                color="secondary"
                path="diagnosedIntelectualDevelopmentProblems"
                label={<FormattedMessage id="DIAGNOSED_INTELECTUAL_DEVELOPMENT_PROBLEMS" />}
              />
            </Flex>
            <>
              <FormField<boolean | null> path="diagnosedIntelectualDevelopmentProblems">
                {({ value }) =>
                  value ? (
                    <>
                      <Flex item>
                        <FormCheckboxField
                          color="secondary"
                          path="adaptedEducationProgram"
                          label={<FormattedMessage id="ADAPTED_EDUCATION_PROGRAM" />}
                        />
                      </Flex>
                      <Flex item>
                        <FormCheckboxField
                          color="secondary"
                          path="individualizedEducationProgram"
                          label={<FormattedMessage id="INDIVIDUALIZED_EDUCATION_PROGRAM" />}
                        />
                      </Flex>
                    </>
                  ) : null
                }
              </FormField>
            </>
            <Flex item>
              <Divider />
            </Flex>
            <Flex item>
              <Label>
                <FormattedMessage id="FURTHER_ABUSES" />
              </Label>
              <Flex item container spacing="tiny">
                <FormArrayField path="furtherAbuses">
                  {({ items, add, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {items.map((_0, index) => (
                        <Flex key={index.toString()} item maxWidth={152}>
                          <FormSelectField path={`furtherAbuses[${index}]`}>
                            <CaseHistoryAbuseTypeSelectOptions />
                          </FormSelectField>
                        </Flex>
                      ))}
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="danger"
                          onClick={remove}
                          disabled={items.length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button variant="text" size="tiny" color="success" onClick={add}>
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </FormArrayField>
              </Flex>
            </Flex>
            <Flex item>
              <FormField<any[] | null> path="furtherAbuses">
                {({ value }) => {
                  if (!value || value.every((val) => !val)) {
                    return null;
                  }
                  return (
                    <FormSelectField
                      path="reportedFurtherAbuses"
                      label={<FormattedMessage id="REPORTED_FURTHER_ABUSES" />}
                    >
                      <CaseHistoryReportedAbuseTypeSelectOptions />
                    </FormSelectField>
                  );
                }}
              </FormField>
            </Flex>
            <Flex item>
              <Divider />
            </Flex>
            <Flex item>
              <FormTextAreaField
                path="familyHeredity"
                rows={5}
                label={<FormattedMessage id="FAMILY_HEREDITY" />}
              />
            </Flex>
            <Flex item>
              <Divider />
            </Flex>
            <Flex item>
              <FormTextAreaField path="ptsp" rows={5} label={<FormattedMessage id="PTSP" />} />
            </Flex>
            <Flex item container justify="flex-end">
              <FormSubmittingState>
                {(submitting) => (
                  <Button disabled={submitting} variant="primary" type="submit">
                    <FormattedMessage id="SAVE" />
                  </Button>
                )}
              </FormSubmittingState>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};

const ComposedCaseHistoryManage = createFragmentContainer(CaseHistoryManage, {
  caseHistory: graphql`
    fragment CaseHistoryManage_caseHistory on CaseHistory {
      id
      rowId
      caseStudyRowId
      accompaniedBy
      adaptedEducationProgram
      adoptionAge
      ageDuringLossOfCloseIndividual
      arrivalReason
      attendsKindergarten
      diagnosedIntelectualDevelopmentProblems
      divorceOutcome
      divorcedParents
      earlierProfessionalHelp
      familyHeredity
      furtherAbuses
      individualizedEducationProgram
      involvedReferral
      livesWith
      lossOfCloseIndividual
      numberOfAdoptions
      parentsInJail
      previousTreatment
      ptsp
      reasonOfMultipleAdoptions
      referral
      referralDiagnosis
      reportedFurtherAbuses
      schoolMark
    }
  `,
});
export { ComposedCaseHistoryManage as CaseHistoryManage };
