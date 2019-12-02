/* tslint:disable */
/* @relayHash e410e990cc4cbadd7013399135e8d7be */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudiesDetailPageQueryVariables = {
    rowId: string;
};
export type CaseStudiesDetailPageQueryResponse = {
    readonly caseStudy: {
        readonly title: string;
        readonly caseHistories: {
            readonly nodes: ReadonlyArray<{
                readonly rowId: string;
                readonly caseHistoryFiles: {
                    readonly nodes: ReadonlyArray<{
                        readonly " $fragmentRefs": FragmentRefs<"CaseHistoryFilesManage_caseHistoryFiles">;
                    }>;
                };
                readonly " $fragmentRefs": FragmentRefs<"CaseHistoryManage_caseHistory">;
            }>;
        };
        readonly client: {
            readonly " $fragmentRefs": FragmentRefs<"CaseStudyManage_client">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"CaseStudyManage_caseStudy" | "CaseStudyProfessionalsManage_caseStudy">;
    } | null;
};
export type CaseStudiesDetailPageQuery = {
    readonly response: CaseStudiesDetailPageQueryResponse;
    readonly variables: CaseStudiesDetailPageQueryVariables;
};



/*
query CaseStudiesDetailPageQuery(
  $rowId: UUID!
) {
  caseStudy: caseStudyByRowId(rowId: $rowId) {
    title
    caseHistories: caseHistoriesByCaseStudyRowId {
      nodes {
        rowId
        ...CaseHistoryManage_caseHistory
        caseHistoryFiles: caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {
          nodes {
            ...CaseHistoryFilesManage_caseHistoryFiles
            id
          }
        }
        id
      }
    }
    client: clientByClientRowId {
      ...CaseStudyManage_client
      id
    }
    ...CaseStudyManage_caseStudy
    ...CaseStudyProfessionalsManage_caseStudy
    id
  }
}

fragment CaseHistoryFilesManage_caseHistoryFiles on CaseHistoryFile {
  id
  rowId
  file: fileByFileRowId {
    rowId
    name
    id
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

fragment CaseStudyManage_caseStudy on CaseStudy {
  rowId
  title
}

fragment CaseStudyManage_client on Client {
  rowId
  fullName
}

fragment CaseStudyProfessionalsManage_caseStudy on CaseStudy {
  rowId
  caseStudyProfessionals: caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {
    nodes {
      rowId
      professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {
        rowId
        type
        fullName
        id
      }
      primary
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "rowId",
    "type": "UUID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "rowId"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_ASC"
    ]
  }
],
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CaseStudiesDetailPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "caseStudy",
        "name": "caseStudyByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": "caseHistories",
            "name": "caseHistoriesByCaseStudyRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseHistoriesConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "CaseHistory",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": "caseHistoryFiles",
                    "name": "caseHistoryFilesByCaseHistoryRowId",
                    "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])",
                    "args": (v4/*: any*/),
                    "concreteType": "CaseHistoryFilesConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "nodes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CaseHistoryFile",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "FragmentSpread",
                            "name": "CaseHistoryFilesManage_caseHistoryFiles",
                            "args": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "FragmentSpread",
                    "name": "CaseHistoryManage_caseHistory",
                    "args": null
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "client",
            "name": "clientByClientRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "CaseStudyManage_client",
                "args": null
              }
            ]
          },
          {
            "kind": "FragmentSpread",
            "name": "CaseStudyManage_caseStudy",
            "args": null
          },
          {
            "kind": "FragmentSpread",
            "name": "CaseStudyProfessionalsManage_caseStudy",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CaseStudiesDetailPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "caseStudy",
        "name": "caseStudyByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "LinkedField",
            "alias": "caseHistories",
            "name": "caseHistoriesByCaseStudyRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseHistoriesConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "CaseHistory",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v5/*: any*/),
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
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "caseHistoryFiles",
                    "name": "caseHistoryFilesByCaseHistoryRowId",
                    "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])",
                    "args": (v4/*: any*/),
                    "concreteType": "CaseHistoryFilesConnection",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "nodes",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CaseHistoryFile",
                        "plural": true,
                        "selections": [
                          (v5/*: any*/),
                          (v3/*: any*/),
                          {
                            "kind": "LinkedField",
                            "alias": "file",
                            "name": "fileByFileRowId",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "File",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "name",
                                "args": null,
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": "client",
            "name": "clientByClientRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v6/*: any*/),
              (v5/*: any*/)
            ]
          },
          (v3/*: any*/),
          {
            "kind": "LinkedField",
            "alias": "caseStudyProfessionals",
            "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
            "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])",
            "args": (v4/*: any*/),
            "concreteType": "CaseStudyMentalHealthProfessionalsConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "nodes",
                "storageKey": null,
                "args": null,
                "concreteType": "CaseStudyMentalHealthProfessional",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": "professional",
                    "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MentalHealthProfessional",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "type",
                        "args": null,
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v5/*: any*/)
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "primary",
                    "args": null,
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ]
              }
            ]
          },
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "CaseStudiesDetailPageQuery",
    "id": null,
    "text": "query CaseStudiesDetailPageQuery(\n  $rowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $rowId) {\n    title\n    caseHistories: caseHistoriesByCaseStudyRowId {\n      nodes {\n        rowId\n        ...CaseHistoryManage_caseHistory\n        caseHistoryFiles: caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {\n          nodes {\n            ...CaseHistoryFilesManage_caseHistoryFiles\n            id\n          }\n        }\n        id\n      }\n    }\n    client: clientByClientRowId {\n      ...CaseStudyManage_client\n      id\n    }\n    ...CaseStudyManage_caseStudy\n    ...CaseStudyProfessionalsManage_caseStudy\n    id\n  }\n}\n\nfragment CaseHistoryFilesManage_caseHistoryFiles on CaseHistoryFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n\nfragment CaseHistoryManage_caseHistory on CaseHistory {\n  id\n  rowId\n  caseStudyRowId\n  accompaniedBy\n  adaptedEducationProgram\n  adoptionAge\n  ageDuringLossOfCloseIndividual\n  arrivalReason\n  attendsKindergarten\n  diagnosedIntelectualDevelopmentProblems\n  divorceOutcome\n  divorcedParents\n  earlierProfessionalHelp\n  familyHeredity\n  furtherAbuses\n  individualizedEducationProgram\n  involvedReferral\n  livesWith\n  lossOfCloseIndividual\n  numberOfAdoptions\n  parentsInJail\n  previousTreatment\n  ptsp\n  reasonOfMultipleAdoptions\n  referral\n  referralDiagnosis\n  reportedFurtherAbuses\n  schoolMark\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n}\n\nfragment CaseStudyManage_client on Client {\n  rowId\n  fullName\n}\n\nfragment CaseStudyProfessionalsManage_caseStudy on CaseStudy {\n  rowId\n  caseStudyProfessionals: caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      rowId\n      professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      primary\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c59ab48861f8625109f329f666c2134d';
export default node;
