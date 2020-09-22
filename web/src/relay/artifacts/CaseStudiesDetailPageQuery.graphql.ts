/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "rowId"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudiesDetailPageQuery",
    "selections": [
      {
        "alias": "caseStudy",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": "caseHistories",
            "args": null,
            "concreteType": "CaseHistoriesConnection",
            "kind": "LinkedField",
            "name": "caseHistoriesByCaseStudyRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseHistory",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": "caseHistoryFiles",
                    "args": (v4/*: any*/),
                    "concreteType": "CaseHistoryFilesConnection",
                    "kind": "LinkedField",
                    "name": "caseHistoryFilesByCaseHistoryRowId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseHistoryFile",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "CaseHistoryFilesManage_caseHistoryFiles"
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])"
                  },
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
          },
          {
            "alias": "client",
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyManage_client"
              }
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyManage_caseStudy"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyProfessionalsManage_caseStudy"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudiesDetailPageQuery",
    "selections": [
      {
        "alias": "caseStudy",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": "caseHistories",
            "args": null,
            "concreteType": "CaseHistoriesConnection",
            "kind": "LinkedField",
            "name": "caseHistoriesByCaseStudyRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseHistory",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v5/*: any*/),
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
                  },
                  {
                    "alias": "caseHistoryFiles",
                    "args": (v4/*: any*/),
                    "concreteType": "CaseHistoryFilesConnection",
                    "kind": "LinkedField",
                    "name": "caseHistoryFilesByCaseHistoryRowId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseHistoryFile",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v5/*: any*/),
                          (v3/*: any*/),
                          {
                            "alias": "file",
                            "args": null,
                            "concreteType": "File",
                            "kind": "LinkedField",
                            "name": "fileByFileRowId",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "name",
                                "storageKey": null
                              },
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "client",
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v6/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/),
          {
            "alias": "caseStudyProfessionals",
            "args": (v4/*: any*/),
            "concreteType": "CaseStudyMentalHealthProfessionalsConnection",
            "kind": "LinkedField",
            "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseStudyMentalHealthProfessional",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": "professional",
                    "args": null,
                    "concreteType": "MentalHealthProfessional",
                    "kind": "LinkedField",
                    "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "type",
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "primary",
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f2ddb1fdb606947b8b5a61ffadef23cd",
    "id": null,
    "metadata": {},
    "name": "CaseStudiesDetailPageQuery",
    "operationKind": "query",
    "text": "query CaseStudiesDetailPageQuery(\n  $rowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $rowId) {\n    title\n    caseHistories: caseHistoriesByCaseStudyRowId {\n      nodes {\n        rowId\n        ...CaseHistoryManage_caseHistory\n        caseHistoryFiles: caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {\n          nodes {\n            ...CaseHistoryFilesManage_caseHistoryFiles\n            id\n          }\n        }\n        id\n      }\n    }\n    client: clientByClientRowId {\n      ...CaseStudyManage_client\n      id\n    }\n    ...CaseStudyManage_caseStudy\n    ...CaseStudyProfessionalsManage_caseStudy\n    id\n  }\n}\n\nfragment CaseHistoryFilesManage_caseHistoryFiles on CaseHistoryFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n\nfragment CaseHistoryManage_caseHistory on CaseHistory {\n  id\n  rowId\n  caseStudyRowId\n  accompaniedBy\n  adaptedEducationProgram\n  adoptionAge\n  ageDuringLossOfCloseIndividual\n  arrivalReason\n  attendsKindergarten\n  diagnosedIntelectualDevelopmentProblems\n  divorceOutcome\n  divorcedParents\n  earlierProfessionalHelp\n  familyHeredity\n  furtherAbuses\n  individualizedEducationProgram\n  involvedReferral\n  livesWith\n  lossOfCloseIndividual\n  numberOfAdoptions\n  parentsInJail\n  previousTreatment\n  ptsp\n  reasonOfMultipleAdoptions\n  referral\n  referralDiagnosis\n  reportedFurtherAbuses\n  schoolMark\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n}\n\nfragment CaseStudyManage_client on Client {\n  rowId\n  fullName\n}\n\nfragment CaseStudyProfessionalsManage_caseStudy on CaseStudy {\n  rowId\n  caseStudyProfessionals: caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      rowId\n      professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      primary\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c59ab48861f8625109f329f666c2134d';
export default node;
