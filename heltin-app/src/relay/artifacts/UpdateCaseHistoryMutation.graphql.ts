/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type CaseHistoryAbuseType = "ABUSE_WITNESS" | "BULLYING" | "CYBER_BULLYING" | "EMOTIONAL_ABUSE" | "NEGLECTION" | "OTHER" | "PARENT_MANIPULATION" | "PHYSICAL_ABUSE" | "SEXUAL_ABUSE";
export type CaseHistoryAccompaniedByType = "FAMILY" | "FATHER" | "MOTHER" | "NONE";
export type CaseHistoryArrivalReasonType = "ABUSE_WITNESS" | "ADDICTION" | "ADHD" | "ANXIETY" | "ATTENTION_PROBLEMS" | "BEHAVIORAL_PROBLEMS" | "BEHAVIOURAL_PROBLEMS" | "BULLYING" | "COMMUNICATION_PROBLEMS" | "COUPLE_PROBLEMS" | "CYBER_BULLYING" | "DEPRESION_SYMPTOMS" | "DIVORCE" | "DYSGRAPHIA" | "DYSLEXIA" | "EMOTIONAL_ABUSE" | "EMOTIONAL_PROBLEMS" | "GRIEVE" | "LEARNING_PROBLEMS" | "LOSS" | "NEGLECTION" | "NEURO_DEVELOPMENT_DISORDER" | "OTHER" | "PARENT_MANIPULATION" | "PHYSICAL_ABUSE" | "SEXUAL_ABUSE" | "SLEEP_DEFICIENCY" | "SUICIDAL_THOUGHTS" | "TALKING_ISSUES" | "TRAUMA";
export type CaseHistoryDeceasedType = "BROTHER" | "FATHER" | "FOSTER_FATHER" | "FOSTER_MOTHER" | "MOTHER" | "SISTER" | "STEP_BROTHER" | "STEP_FATHER" | "STEP_MOTHER" | "STEP_SISTER";
export type CaseHistoryDivorceOutcomeType = "HIGH_CONFLICT" | "LOW_CONFLICT" | "MEDIUM_CONFLICT" | "NO_CONFLICT" | "UNKNOWN";
export type CaseHistoryDivorcedParentsType = "IN_PROCESS" | "NO" | "YES";
export type CaseHistoryIndividualType = "AUNT" | "BROTHER" | "COUSIN" | "FATHER" | "FOSTER_FATHER" | "FOSTER_MOTHER" | "FRIEND" | "GRANDFATHER" | "GRANDMOTHER" | "LOVER" | "MOTHER" | "SISTER" | "STEP_BROTHER" | "STEP_FATHER" | "STEP_MOTHER" | "STEP_SISTER" | "UNCLE";
export type CaseHistoryLivesWithType = "ALONE" | "AUNT" | "BROTHER" | "COUSIN" | "FATHER" | "FOSTER_FATHER" | "FOSTER_HOUSE" | "FOSTER_MOTHER" | "GRANDFATHER" | "GRANDMOTHER" | "MOTHER" | "SISTER" | "STEP_BROTHER" | "STEP_FATHER" | "STEP_MOTHER" | "STEP_SISTER" | "UNCLE";
export type CaseHistoryParentsInJailType = "FATHER" | "FATHER_AND_MOTHER" | "MOTHER";
export type CaseHistoryReasonOfMultipleAdoptionsType = "ABUSE" | "LOSS_OF_FOSTER_PARENT" | "NEGLECTION" | "OTHER";
export type CaseHistoryReferralType = "COURT" | "HOSPITAL" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "OTHER" | "PEDIATRIST" | "POLICE" | "PSYCHIATRIST" | "SCHOOL" | "SELF" | "SOCIAL_WORK_CENTER";
export type CaseHistoryReportedAbuseType = "COURT" | "NOT_REPORTED" | "SOCIAL_WORK_CENTER";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type UpdateCaseHistoryInput = {
    readonly accompaniedBy?: CaseHistoryAccompaniedByType | null;
    readonly adaptedEducationProgram?: boolean | null;
    readonly adoptionAge?: number | null;
    readonly ageDuringLossOfCloseIndividual?: number | null;
    readonly arrivalReason?: ReadonlyArray<CaseHistoryArrivalReasonType | null> | null;
    readonly attendsKindergarten?: boolean | null;
    readonly caseStudySessionRowId?: string | null;
    readonly clientMutationId?: string | null;
    readonly deceased?: ReadonlyArray<CaseHistoryDeceasedType | null> | null;
    readonly diagnosedIntelectualDevelopmentProblems?: boolean | null;
    readonly divorceOutcome?: CaseHistoryDivorceOutcomeType | null;
    readonly divorcedParents?: CaseHistoryDivorcedParentsType | null;
    readonly earlierProfessionalHelp?: ReadonlyArray<MentalHealthProfessionalType | null> | null;
    readonly familyHeredity?: string | null;
    readonly furtherAbuses?: ReadonlyArray<CaseHistoryAbuseType | null> | null;
    readonly individualizedEducationProgram?: boolean | null;
    readonly involvedReferral?: boolean | null;
    readonly livesWith?: ReadonlyArray<CaseHistoryLivesWithType | null> | null;
    readonly lossOfCloseIndividual?: ReadonlyArray<CaseHistoryIndividualType | null> | null;
    readonly numberOfAdoptions?: number | null;
    readonly parentsInJail?: CaseHistoryParentsInJailType | null;
    readonly previousTreatment?: string | null;
    readonly ptsp?: string | null;
    readonly reasonOfMultipleAdoptions?: ReadonlyArray<CaseHistoryReasonOfMultipleAdoptionsType | null> | null;
    readonly referral?: ReadonlyArray<CaseHistoryReferralType | null> | null;
    readonly referralDiagnosis?: string | null;
    readonly reportedFurtherAbuses?: CaseHistoryReportedAbuseType | null;
    readonly rowId: string;
    readonly schoolMark?: number | null;
};
export type UpdateCaseHistoryMutationVariables = {
    input: UpdateCaseHistoryInput;
};
export type UpdateCaseHistoryMutationResponse = {
    readonly updateCaseHistory: {
        readonly caseHistory: {
            readonly id: string;
            readonly rowId: string;
            readonly caseStudyRowId: string;
            readonly accompaniedBy: CaseHistoryAccompaniedByType | null;
            readonly adaptedEducationProgram: boolean | null;
            readonly adoptionAge: number | null;
            readonly ageDuringLossOfCloseIndividual: number | null;
            readonly arrivalReason: ReadonlyArray<CaseHistoryArrivalReasonType | null> | null;
            readonly attendsKindergarten: boolean | null;
            readonly deceased: ReadonlyArray<CaseHistoryDeceasedType | null> | null;
            readonly diagnosedIntelectualDevelopmentProblems: boolean | null;
            readonly divorceOutcome: CaseHistoryDivorceOutcomeType | null;
            readonly divorcedParents: CaseHistoryDivorcedParentsType | null;
            readonly earlierProfessionalHelp: ReadonlyArray<MentalHealthProfessionalType | null> | null;
            readonly familyHeredity: string | null;
            readonly furtherAbuses: ReadonlyArray<CaseHistoryAbuseType | null> | null;
            readonly individualizedEducationProgram: boolean | null;
            readonly involvedReferral: boolean | null;
            readonly livesWith: ReadonlyArray<CaseHistoryLivesWithType | null> | null;
            readonly lossOfCloseIndividual: ReadonlyArray<CaseHistoryIndividualType | null> | null;
            readonly numberOfAdoptions: number | null;
            readonly parentsInJail: CaseHistoryParentsInJailType | null;
            readonly previousTreatment: string | null;
            readonly ptsp: string | null;
            readonly reasonOfMultipleAdoptions: ReadonlyArray<CaseHistoryReasonOfMultipleAdoptionsType | null> | null;
            readonly referral: ReadonlyArray<CaseHistoryReferralType | null> | null;
            readonly referralDiagnosis: string | null;
            readonly reportedFurtherAbuses: CaseHistoryReportedAbuseType | null;
            readonly schoolMark: number | null;
        } | null;
    } | null;
};
export type UpdateCaseHistoryMutation = {
    readonly response: UpdateCaseHistoryMutationResponse;
    readonly variables: UpdateCaseHistoryMutationVariables;
};



/*
mutation UpdateCaseHistoryMutation(
  $input: UpdateCaseHistoryInput!
) {
  updateCaseHistory(input: $input) {
    caseHistory {
      id
      rowId
      caseStudyRowId
      accompaniedBy
      adaptedEducationProgram
      adoptionAge
      ageDuringLossOfCloseIndividual
      arrivalReason
      attendsKindergarten
      deceased
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
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCaseHistoryInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateCaseHistory",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateCaseHistoryPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "caseHistory",
        "storageKey": null,
        "args": null,
        "concreteType": "CaseHistory",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rowId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "caseStudyRowId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "accompaniedBy",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "adaptedEducationProgram",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "adoptionAge",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "ageDuringLossOfCloseIndividual",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "arrivalReason",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "attendsKindergarten",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "deceased",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "diagnosedIntelectualDevelopmentProblems",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "divorceOutcome",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "divorcedParents",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "earlierProfessionalHelp",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "familyHeredity",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "furtherAbuses",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "individualizedEducationProgram",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "involvedReferral",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "livesWith",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "lossOfCloseIndividual",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "numberOfAdoptions",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "parentsInJail",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "previousTreatment",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "ptsp",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "reasonOfMultipleAdoptions",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "referral",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "referralDiagnosis",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "reportedFurtherAbuses",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "schoolMark",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCaseHistoryMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCaseHistoryMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateCaseHistoryMutation",
    "id": null,
    "text": "mutation UpdateCaseHistoryMutation(\n  $input: UpdateCaseHistoryInput!\n) {\n  updateCaseHistory(input: $input) {\n    caseHistory {\n      id\n      rowId\n      caseStudyRowId\n      accompaniedBy\n      adaptedEducationProgram\n      adoptionAge\n      ageDuringLossOfCloseIndividual\n      arrivalReason\n      attendsKindergarten\n      deceased\n      diagnosedIntelectualDevelopmentProblems\n      divorceOutcome\n      divorcedParents\n      earlierProfessionalHelp\n      familyHeredity\n      furtherAbuses\n      individualizedEducationProgram\n      involvedReferral\n      livesWith\n      lossOfCloseIndividual\n      numberOfAdoptions\n      parentsInJail\n      previousTreatment\n      ptsp\n      reasonOfMultipleAdoptions\n      referral\n      referralDiagnosis\n      reportedFurtherAbuses\n      schoolMark\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ffad547c148153d1e96f743dec58b09f';
export default node;
