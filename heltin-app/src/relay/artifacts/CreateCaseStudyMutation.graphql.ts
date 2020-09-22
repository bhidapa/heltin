/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type CreateCaseStudyInput = {
    clientMutationId?: string | null;
    title: string;
    clientRowId?: string | null;
    groupRowId?: string | null;
};
export type CreateCaseStudyMutationVariables = {
    input: CreateCaseStudyInput;
};
export type CreateCaseStudyMutationResponse = {
    readonly createCaseStudy: {
        readonly caseStudy: {
            readonly rowId: string;
        } | null;
        readonly clientByClientRowId: {
            readonly caseStudiesByClientRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly rowId: string;
                    readonly title: string;
                    readonly caseStudyTreatments: {
                        readonly nodes: ReadonlyArray<{
                            readonly rowId: string;
                            readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentRow_item">;
                        }>;
                    };
                    readonly caseStudyConclusions: {
                        readonly nodes: ReadonlyArray<{
                            readonly rowId: string;
                            readonly type: CaseStudyConclusionType;
                        }>;
                    };
                }>;
            };
        } | null;
    } | null;
};
export type CreateCaseStudyMutation = {
    readonly response: CreateCaseStudyMutationResponse;
    readonly variables: CreateCaseStudyMutationVariables;
};



/*
mutation CreateCaseStudyMutation(
  $input: CreateCaseStudyInput!
) {
  createCaseStudy(input: $input) {
    caseStudy {
      rowId
      id
    }
    clientByClientRowId {
      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          rowId
          title
          caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {
            nodes {
              rowId
              ...CaseStudyTreatmentRow_item
              id
            }
          }
          caseStudyConclusions: caseStudyConclusionsByCaseStudyRowId {
            nodes {
              rowId
              type
              id
            }
          }
          id
        }
      }
      id
    }
  }
}

fragment CaseStudyTreatmentRow_item on CaseStudyTreatment {
  rowId
  caseStudyRowId
  title
  startedAt
  endedAt
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v3 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_ASC"
    ]
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "STARTED_AT_DESC"
    ]
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCaseStudyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyPayload",
        "kind": "LinkedField",
        "name": "createCaseStudy",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v3/*: any*/),
                "concreteType": "CaseStudiesConnection",
                "kind": "LinkedField",
                "name": "caseStudiesByClientRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CaseStudy",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": "caseStudyTreatments",
                        "args": (v5/*: any*/),
                        "concreteType": "CaseStudyTreatmentsConnection",
                        "kind": "LinkedField",
                        "name": "caseStudyTreatmentsByCaseStudyRowId",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CaseStudyTreatment",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "args": null,
                                "kind": "FragmentSpread",
                                "name": "CaseStudyTreatmentRow_item"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "caseStudyTreatmentsByCaseStudyRowId(orderBy:[\"STARTED_AT_DESC\"])"
                      },
                      {
                        "alias": "caseStudyConclusions",
                        "args": null,
                        "concreteType": "CaseStudyConclusionsConnection",
                        "kind": "LinkedField",
                        "name": "caseStudyConclusionsByCaseStudyRowId",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CaseStudyConclusion",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v6/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "name": "CreateCaseStudyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyPayload",
        "kind": "LinkedField",
        "name": "createCaseStudy",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v3/*: any*/),
                "concreteType": "CaseStudiesConnection",
                "kind": "LinkedField",
                "name": "caseStudiesByClientRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CaseStudy",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": "caseStudyTreatments",
                        "args": (v5/*: any*/),
                        "concreteType": "CaseStudyTreatmentsConnection",
                        "kind": "LinkedField",
                        "name": "caseStudyTreatmentsByCaseStudyRowId",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CaseStudyTreatment",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "caseStudyRowId",
                                "storageKey": null
                              },
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "startedAt",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "endedAt",
                                "storageKey": null
                              },
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "caseStudyTreatmentsByCaseStudyRowId(orderBy:[\"STARTED_AT_DESC\"])"
                      },
                      {
                        "alias": "caseStudyConclusions",
                        "args": null,
                        "concreteType": "CaseStudyConclusionsConnection",
                        "kind": "LinkedField",
                        "name": "caseStudyConclusionsByCaseStudyRowId",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CaseStudyConclusion",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6b2341ea4deeadd3b8bf843ec2f19f8c",
    "id": null,
    "metadata": {},
    "name": "CreateCaseStudyMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCaseStudyMutation(\n  $input: CreateCaseStudyInput!\n) {\n  createCaseStudy(input: $input) {\n    caseStudy {\n      rowId\n      id\n    }\n    clientByClientRowId {\n      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          rowId\n          title\n          caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {\n            nodes {\n              rowId\n              ...CaseStudyTreatmentRow_item\n              id\n            }\n          }\n          caseStudyConclusions: caseStudyConclusionsByCaseStudyRowId {\n            nodes {\n              rowId\n              type\n              id\n            }\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentRow_item on CaseStudyTreatment {\n  rowId\n  caseStudyRowId\n  title\n  startedAt\n  endedAt\n}\n"
  }
};
})();
(node as any).hash = '93e6db32f14d53cbd399ea9f3d27fd23';
export default node;
