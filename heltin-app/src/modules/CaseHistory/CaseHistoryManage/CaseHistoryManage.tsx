/**
 *
 * CaseHistoryManage
 *
 */

import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import { usePromiseMutation } from 'relay/hooks';
import { CaseHistoryManage_caseHistory$key } from 'relay/artifacts/CaseHistoryManage_caseHistory.graphql';
import { CaseHistoryManageCreateMutation } from 'relay/artifacts/CaseHistoryManageCreateMutation.graphql';
import { CaseHistoryManageUpdateMutation } from 'relay/artifacts/CaseHistoryManageUpdateMutation.graphql';

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
  FormArrayField,
  FormField,
} from '@domonda/react-form';
import {
  FormSelectField,
  FormNumberField,
  FormCheckboxField,
  FormTextAreaField,
} from 'lib/FormFields';
import { CaseHistoryAccompaniedByTypeSelectOptions } from '../CaseHistoryAccompaniedByType';
import { CaseHistoryLivesWithTypeSelectOptions } from '../CaseHistoryLivesWithType';
import { CaseHistoryDivorceOutcomeTypeSelectOptions } from '../CaseHistoryDivorceOutcomeType';
import { CaseHistoryAbuseType, CaseHistoryAbuseTypeSelectOptions } from '../CaseHistoryAbuseType';
import { CaseHistoryAccompaniedByType } from '../CaseHistoryAccompaniedByType';
import {
  CaseHistoryArrivalReasonType,
  CaseHistoryArrivalReasonTypeSelectOptions,
} from '../CaseHistoryArrivalReasonType';
import { CaseHistoryDivorceOutcomeType } from '../CaseHistoryDivorceOutcomeType';
import {
  CaseHistoryDivorcedParentsType,
  CaseHistoryDivorcedParentsTypeSelectOptions,
} from '../CaseHistoryDivorcedParentsType';
import {
  CaseHistoryIndividualType,
  CaseHistoryIndividualTypeSelectOptions,
} from '../CaseHistoryIndividualType';
import { CaseHistoryLivesWithType } from '../CaseHistoryLivesWithType';
import {
  CaseHistoryParentsInJailType,
  CaseHistoryParentsInJailTypeSelectOptions,
} from '../CaseHistoryParentsInJailType';
import {
  CaseHistoryReasonOfMultipleAdoptionsType,
  CaseHistoryReasonOfMultipleAdoptionsTypeSelectOptions,
} from '../CaseHistoryReasonOfMultipleAdoptionsType';
import {
  CaseHistoryReferralType,
  CaseHistoryReferralTypeSelectOptions,
} from '../CaseHistoryReferralType';
import {
  CaseHistoryReportedAbuseType,
  CaseHistoryReportedAbuseTypeSelectOptions,
} from '../CaseHistoryReportedAbuseType';
import { ProfessionalType } from 'modules/Professional/ProfessionalType';
import { ProfessionalTypeSelectOptions } from 'modules/Professional/ProfessionalTypeSelectOptions';

export interface FormValues {
  caseStudyRowId: string;
  caseHistoryRowId: string | null; // when null, its getting created
  // arrival
  accompaniedBy: CaseHistoryAccompaniedByType | null;
  arrivalReason: CaseHistoryArrivalReasonType[] | null;
  // earlier treatments
  previousTreatment: string | null;
  earlierProfessionalHelp: ProfessionalType[] | null;
  referral: CaseHistoryReferralType[] | null;
  referralDiagnosis: string | null;
  involvedReferral: boolean | null;
  // parents
  divorcedParents: CaseHistoryDivorcedParentsType | null;
  divorceOutcome: CaseHistoryDivorceOutcomeType | null;
  parentsInJail: CaseHistoryParentsInJailType | null;
  // lives with
  livesWith: CaseHistoryLivesWithType[] | null;
  // death
  lossOfCloseIndividual: CaseHistoryIndividualType[] | null;
  ageDuringLossOfCloseIndividual: number | null;
  // adoption
  adoptionAge: number | null;
  numberOfAdoptions: number | null;
  reasonOfMultipleAdoptions: CaseHistoryReasonOfMultipleAdoptionsType[] | null;
  // education
  schoolMark: number | null;
  attendsKindergarten: boolean | null;
  diagnosedIntelectualDevelopmentProblems: boolean | null;
  adaptedEducationProgram: boolean | null;
  individualizedEducationProgram: boolean | null;
  // abuses
  furtherAbuses: CaseHistoryAbuseType[] | null;
  reportedFurtherAbuses: CaseHistoryReportedAbuseType | null;
  // other
  familyHeredity: string | null;
  ptsp: string | null;
}

export interface CaseHistoryManageProps {
  caseStudyRowId: UUID;
  caseHistory: CaseHistoryManage_caseHistory$key | null;
}

export const CaseHistoryManage: React.FC<CaseHistoryManageProps> = (props) => {
  const { caseStudyRowId, caseHistory: caseHistoryKey } = props;

  const caseHistory = useFragment(
    graphql`
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
    caseHistoryKey,
  );

  const createCaseHistory = usePromiseMutation<CaseHistoryManageCreateMutation>(graphql`
    mutation CaseHistoryManageCreateMutation($input: CreateCaseHistoryInput!) {
      createCaseHistory(input: $input) {
        caseHistory {
          ...CaseHistoryManage_caseHistory @relay(mask: false)
        }
      }
    }
  `);

  const updateCaseHistory = usePromiseMutation<CaseHistoryManageUpdateMutation>(graphql`
    mutation CaseHistoryManageUpdateMutation($input: UpdateCaseHistoryInput!) {
      updateCaseHistory(input: $input) {
        caseHistory {
          ...CaseHistoryManage_caseHistory @relay(mask: false)
        }
      }
    }
  `);

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
          if ((val as unknown[]).length === 0) {
            val = null;
          }
        }
        return { ...agg, [key]: val };
      }, {});

      if (caseHistoryRowId) {
        return updateCaseHistory({
          variables: {
            input: {
              rowId: caseHistoryRowId,
              ...input,
            },
          },
        });
      } else {
        return createCaseHistory({
          variables: {
            input: {
              ...input,
              caseStudyRowId,
            },
          },
        });
      }
    },
    [],
  );

  return (
    <Flex container spacing="small" direction="column">
      <Flex item>
        <Text size="medium" weight="medium">
          <FormattedMessage id="ANAMNESIS" />
        </Text>
      </Flex>
      <Flex item>
        <Form<FormValues>
          defaultValues={{
            caseStudyRowId,
            caseHistoryRowId: caseHistory ? caseHistory.rowId : null,
            // arival
            accompaniedBy: caseHistory
              ? (caseHistory.accompaniedBy as CaseHistoryAccompaniedByType)
              : CaseHistoryAccompaniedByType.NoOne,
            arrivalReason: caseHistory
              ? (caseHistory.arrivalReason as CaseHistoryArrivalReasonType[])
              : null,
            // earlier treatments
            previousTreatment: caseHistory ? caseHistory.previousTreatment : null,
            earlierProfessionalHelp: caseHistory
              ? (caseHistory.earlierProfessionalHelp as ProfessionalType[])
              : null,
            referral: caseHistory ? (caseHistory.referral as CaseHistoryReferralType[]) : null,
            referralDiagnosis: caseHistory ? caseHistory.referralDiagnosis : null,
            involvedReferral: caseHistory ? caseHistory.involvedReferral : null,
            // parents
            divorcedParents: caseHistory
              ? (caseHistory.divorcedParents as CaseHistoryDivorcedParentsType)
              : null,
            divorceOutcome: caseHistory
              ? (caseHistory.divorceOutcome as CaseHistoryDivorceOutcomeType)
              : null,
            parentsInJail: caseHistory
              ? (caseHistory.parentsInJail as CaseHistoryParentsInJailType)
              : null,
            // lives with
            livesWith: caseHistory ? (caseHistory.livesWith as CaseHistoryLivesWithType[]) : null,
            // death
            lossOfCloseIndividual: caseHistory
              ? (caseHistory.lossOfCloseIndividual as CaseHistoryIndividualType[])
              : null,
            ageDuringLossOfCloseIndividual: caseHistory
              ? caseHistory.ageDuringLossOfCloseIndividual
              : null,
            // adoption
            adoptionAge: caseHistory ? caseHistory.adoptionAge : null,
            numberOfAdoptions: caseHistory ? caseHistory.numberOfAdoptions : null,
            reasonOfMultipleAdoptions: caseHistory
              ? (caseHistory.reasonOfMultipleAdoptions as CaseHistoryReasonOfMultipleAdoptionsType[])
              : null,
            // education
            schoolMark: caseHistory ? caseHistory.schoolMark : null,
            attendsKindergarten: caseHistory ? caseHistory.attendsKindergarten : null,
            diagnosedIntelectualDevelopmentProblems: caseHistory
              ? caseHistory.diagnosedIntelectualDevelopmentProblems
              : null,
            adaptedEducationProgram: caseHistory ? caseHistory.adaptedEducationProgram : null,
            individualizedEducationProgram: caseHistory
              ? caseHistory.individualizedEducationProgram
              : null,
            // abuses
            furtherAbuses: caseHistory
              ? (caseHistory.furtherAbuses as CaseHistoryAbuseType[])
              : null,
            reportedFurtherAbuses: caseHistory
              ? (caseHistory.reportedFurtherAbuses as CaseHistoryReportedAbuseType)
              : null,
            // other
            familyHeredity: caseHistory ? caseHistory.familyHeredity : null,
            ptsp: caseHistory ? caseHistory.ptsp : null,
          }}
          resetOnDefaultValuesChange
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
                  {({ items, insert, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {(items ?? []).map((_0, index) => (
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
                          onClick={() => remove()}
                          disabled={(items ?? []).length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="success"
                          onClick={() => insert(null)}
                        >
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
                  {({ items, insert, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {(items ?? []).map((_0, index) => (
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
                          onClick={() => remove()}
                          disabled={(items ?? []).length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="success"
                          onClick={() => insert(null)}
                        >
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
                  {({ items, insert, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {(items ?? []).map((_0, index) => (
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
                          onClick={() => remove()}
                          disabled={(items ?? []).length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="success"
                          onClick={() => insert(null)}
                        >
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </FormArrayField>
              </Flex>
            </Flex>
            <Flex item>
              <FormField<unknown[] | null> path="referral">
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
              <FormField<unknown[] | null> path="referral">
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
                  {({ items, insert, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {(items ?? []).map((_0, index) => (
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
                          onClick={() => remove()}
                          disabled={(items ?? []).length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="success"
                          onClick={() => insert(null)}
                        >
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
                  {({ items, insert, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {(items ?? []).map((_0, index) => (
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
                          onClick={() => remove()}
                          disabled={(items ?? []).length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="success"
                          onClick={() => insert(null)}
                        >
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </FormArrayField>
              </Flex>
            </Flex>
            <Flex item maxWidth={292}>
              <FormField<unknown[] | null> path="lossOfCloseIndividual">
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
                          scale={0}
                          min={1}
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
                            {({ items, insert, remove }) => (
                              <Flex item container spacing="tiny" align="baseline">
                                {(items ?? []).map((_0, index) => (
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
                                    onClick={() => remove()}
                                    disabled={(items ?? []).length === 1}
                                  >
                                    <MinusIcon />
                                  </Button>
                                </Flex>
                                <Flex item>
                                  <Button
                                    variant="text"
                                    size="tiny"
                                    color="success"
                                    onClick={() => insert(null)}
                                  >
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
                  {({ items, insert, remove }) => (
                    <Flex item container spacing="tiny" align="baseline">
                      {(items ?? []).map((_0, index) => (
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
                          onClick={() => remove()}
                          disabled={(items ?? []).length === 1}
                        >
                          <MinusIcon />
                        </Button>
                      </Flex>
                      <Flex item>
                        <Button
                          variant="text"
                          size="tiny"
                          color="success"
                          onClick={() => insert(null)}
                        >
                          <PlusIcon />
                        </Button>
                      </Flex>
                    </Flex>
                  )}
                </FormArrayField>
              </Flex>
            </Flex>
            <Flex item>
              <FormField<unknown[] | null> path="furtherAbuses">
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
