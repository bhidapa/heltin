/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseHistoryAbuseType = "ABUSE_WITNESS" | "BULLYING" | "CYBER_BULLYING" | "EMOTIONAL_ABUSE" | "NEGLECTION" | "OTHER" | "PARENT_MANIPULATION" | "PHYSICAL_ABUSE" | "SEXUAL_ABUSE";
export type CaseHistoryAccompaniedByType = "FAMILY" | "FATHER" | "MOTHER" | "NO_ONE";
export type CaseHistoryArrivalReasonType = "ABUSE_WITNESS" | "ADDICTION" | "ADHD" | "ANXIETY" | "ATTENTION_PROBLEMS" | "BEHAVIOURAL_PROBLEMS" | "BULLYING" | "COMMUNICATION_PROBLEMS" | "COUPLE_PROBLEMS" | "CYBER_BULLYING" | "DEPRESION_SYMPTOMS" | "DIVORCE" | "DYSGRAPHIA" | "DYSLEXIA" | "EMOTIONAL_ABUSE" | "EMOTIONAL_PROBLEMS" | "GRIEVE" | "LEARNING_PROBLEMS" | "LOSS" | "NEGLECTION" | "NEURO_DEVELOPMENT_DISORDER" | "OTHER" | "PARENT_MANIPULATION" | "PHYSICAL_ABUSE" | "SEXUAL_ABUSE" | "SLEEP_DEFICIENCY" | "SUICIDAL_THOUGHTS" | "TALKING_ISSUES" | "TRAUMA";
export type CaseHistoryDivorceOutcomeType = "HIGH_CONFLICT" | "LOW_CONFLICT" | "MEDIUM_CONFLICT" | "NO_CONFLICT" | "UNKNOWN";
export type CaseHistoryDivorcedParentsType = "IN_PROCESS" | "NO" | "YES";
export type CaseHistoryIndividualType = "AUNT" | "BROTHER" | "COUSIN" | "FATHER" | "FOSTER_FATHER" | "FOSTER_MOTHER" | "FRIEND" | "GRANDFATHER" | "GRANDMOTHER" | "LOVER" | "MOTHER" | "SISTER" | "STEP_BROTHER" | "STEP_FATHER" | "STEP_MOTHER" | "STEP_SISTER" | "UNCLE";
export type CaseHistoryLivesWithType = "ALONE" | "AUNT" | "BROTHER" | "COUSIN" | "FATHER" | "FOSTER_FATHER" | "FOSTER_HOUSE" | "FOSTER_MOTHER" | "GRANDFATHER" | "GRANDMOTHER" | "MOTHER" | "SISTER" | "STEP_BROTHER" | "STEP_FATHER" | "STEP_MOTHER" | "STEP_SISTER" | "UNCLE";
export type CaseHistoryParentsInJailType = "FATHER" | "FATHER_AND_MOTHER" | "MOTHER";
export type CaseHistoryReasonOfMultipleAdoptionsType = "ABUSE" | "LOSS_OF_FOSTER_PARENT" | "NEGLECTION" | "OTHER";
export type CaseHistoryReferralType = "COURT" | "HOSPITAL" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "OTHER" | "PEDIATRIST" | "POLICE" | "PSYCHIATRIST" | "SCHOOL" | "SELF" | "SOCIAL_WORK_CENTER";
export type CaseHistoryReportedAbuseType = "COURT" | "NOT_REPORTED" | "SOCIAL_WORK_CENTER";
export type MentalHealthProfessionalType = "CLINICAL_PSYCHOLOGIST" | "DEFECTOLOGIST" | "NEUROLOGIST" | "NEUROPSYCHIATRIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER" | "SUPERVISOR";
export type CreateCaseHistoryInput = {
    clientMutationId?: string | null;
    caseStudyRowId: string;
    caseStudyTreatmentRowId?: string | null;
    accompaniedBy?: CaseHistoryAccompaniedByType | null;
    livesWith?: Array<CaseHistoryLivesWithType | null> | null;
    divorcedParents?: CaseHistoryDivorcedParentsType | null;
    divorceOutcome?: CaseHistoryDivorceOutcomeType | null;
    adoptionAge?: number | null;
    numberOfAdoptions?: number | null;
    reasonOfMultipleAdoptions?: Array<CaseHistoryReasonOfMultipleAdoptionsType | null> | null;
    arrivalReason?: Array<CaseHistoryArrivalReasonType | null> | null;
    earlierProfessionalHelp?: Array<MentalHealthProfessionalType | null> | null;
    referralDiagnosis?: string | null;
    referral?: Array<CaseHistoryReferralType | null> | null;
    involvedReferral?: boolean | null;
    previousTreatment?: string | null;
    attendsKindergarten?: boolean | null;
    schoolMark?: number | null;
    adaptedEducationProgram?: boolean | null;
    individualizedEducationProgram?: boolean | null;
    diagnosedIntelectualDevelopmentProblems?: boolean | null;
    furtherAbuses?: Array<CaseHistoryAbuseType | null> | null;
    reportedFurtherAbuses?: CaseHistoryReportedAbuseType | null;
    lossOfCloseIndividual?: Array<CaseHistoryIndividualType | null> | null;
    ageDuringLossOfCloseIndividual?: number | null;
    familyHeredity?: string | null;
    ptsp?: string | null;
    parentsInJail?: CaseHistoryParentsInJailType | null;
};
export type CaseStudyManageCreateMutationVariables = {
    input: CreateCaseHistoryInput;
};
export type CaseStudyManageCreateMutationResponse = {
    readonly createCaseHistory: {
        readonly caseHistory: {
            readonly " $fragmentRefs": FragmentRefs<"CaseHistoryManage_caseHistory">;
        } | null;
    } | null;
};
export type CaseStudyManageCreateMutation = {
    readonly response: CaseStudyManageCreateMutationResponse;
    readonly variables: CaseStudyManageCreateMutationVariables;
};



/*
mutation CaseStudyManageCreateMutation(
  $input: CreateCaseHistoryInput!
) {
  createCaseHistory(input: $input) {
    caseHistory {
      ...CaseHistoryManage_caseHistory
      id
    }
  }
}

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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseHistoryPayload",
        "kind": "LinkedField",
        "name": "createCaseHistory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseHistory",
            "kind": "LinkedField",
            "name": "caseHistory",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseHistoryManage_caseHistory"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudyManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseHistoryPayload",
        "kind": "LinkedField",
        "name": "createCaseHistory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseHistory",
            "kind": "LinkedField",
            "name": "caseHistory",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "rowId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "caseStudyRowId",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "accompaniedBy",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "adaptedEducationProgram",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "adoptionAge",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ageDuringLossOfCloseIndividual",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "arrivalReason",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "attendsKindergarten",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "diagnosedIntelectualDevelopmentProblems",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "divorceOutcome",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "divorcedParents",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "earlierProfessionalHelp",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "familyHeredity",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "furtherAbuses",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "individualizedEducationProgram",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "involvedReferral",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "livesWith",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "lossOfCloseIndividual",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "numberOfAdoptions",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "parentsInJail",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "previousTreatment",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "ptsp",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "reasonOfMultipleAdoptions",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "referral",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "referralDiagnosis",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "reportedFurtherAbuses",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "schoolMark",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "de0a8ed6005ed202fb2c0651b440c574",
    "id": null,
    "metadata": {},
    "name": "CaseStudyManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyManageCreateMutation(\n  $input: CreateCaseHistoryInput!\n) {\n  createCaseHistory(input: $input) {\n    caseHistory {\n      ...CaseHistoryManage_caseHistory\n      id\n    }\n  }\n}\n\nfragment CaseHistoryManage_caseHistory on CaseHistory {\n  id\n  rowId\n  caseStudyRowId\n  accompaniedBy\n  adaptedEducationProgram\n  adoptionAge\n  ageDuringLossOfCloseIndividual\n  arrivalReason\n  attendsKindergarten\n  diagnosedIntelectualDevelopmentProblems\n  divorceOutcome\n  divorcedParents\n  earlierProfessionalHelp\n  familyHeredity\n  furtherAbuses\n  individualizedEducationProgram\n  involvedReferral\n  livesWith\n  lossOfCloseIndividual\n  numberOfAdoptions\n  parentsInJail\n  previousTreatment\n  ptsp\n  reasonOfMultipleAdoptions\n  referral\n  referralDiagnosis\n  reportedFurtherAbuses\n  schoolMark\n}\n"
  }
};
})();
(node as any).hash = 'ad667b2f19cc6539e3fe149eca208429';
export default node;
