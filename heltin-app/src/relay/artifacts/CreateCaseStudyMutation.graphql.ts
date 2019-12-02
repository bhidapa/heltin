/* tslint:disable */
/* @relayHash 230fbb0a0ce3b2e16241a856f86aec7e */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type CreateCaseStudyInput = {
    readonly clientMutationId?: string | null;
    readonly clientRowId?: string | null;
    readonly groupRowId?: string | null;
    readonly title: string;
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
  title
  startedAt
  endedAt
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateCaseStudyInput!",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
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
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
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
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCaseStudyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudy",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientByClientRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudiesByClientRowId",
                "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v3/*: any*/),
                "concreteType": "CaseStudiesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudy",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": "caseStudyTreatments",
                        "name": "caseStudyTreatmentsByCaseStudyRowId",
                        "storageKey": "caseStudyTreatmentsByCaseStudyRowId(orderBy:[\"STARTED_AT_DESC\"])",
                        "args": (v5/*: any*/),
                        "concreteType": "CaseStudyTreatmentsConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "nodes",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CaseStudyTreatment",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              {
                                "kind": "FragmentSpread",
                                "name": "CaseStudyTreatmentRow_item",
                                "args": null
                              }
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "caseStudyConclusions",
                        "name": "caseStudyConclusionsByCaseStudyRowId",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CaseStudyConclusionsConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "nodes",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CaseStudyConclusion",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v6/*: any*/)
                            ]
                          }
                        ]
                      }
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
  "operation": {
    "kind": "Operation",
    "name": "CreateCaseStudyMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudy",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v7/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientByClientRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudiesByClientRowId",
                "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v3/*: any*/),
                "concreteType": "CaseStudiesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudy",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": "caseStudyTreatments",
                        "name": "caseStudyTreatmentsByCaseStudyRowId",
                        "storageKey": "caseStudyTreatmentsByCaseStudyRowId(orderBy:[\"STARTED_AT_DESC\"])",
                        "args": (v5/*: any*/),
                        "concreteType": "CaseStudyTreatmentsConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "nodes",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CaseStudyTreatment",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v4/*: any*/),
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "startedAt",
                                "args": null,
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "name": "endedAt",
                                "args": null,
                                "storageKey": null
                              },
                              (v7/*: any*/)
                            ]
                          }
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": "caseStudyConclusions",
                        "name": "caseStudyConclusionsByCaseStudyRowId",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "CaseStudyConclusionsConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "nodes",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "CaseStudyConclusion",
                            "plural": true,
                            "selections": [
                              (v2/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/)
                            ]
                          }
                        ]
                      },
                      (v7/*: any*/)
                    ]
                  }
                ]
              },
              (v7/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCaseStudyMutation",
    "id": null,
    "text": "mutation CreateCaseStudyMutation(\n  $input: CreateCaseStudyInput!\n) {\n  createCaseStudy(input: $input) {\n    caseStudy {\n      rowId\n      id\n    }\n    clientByClientRowId {\n      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          rowId\n          title\n          caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {\n            nodes {\n              rowId\n              ...CaseStudyTreatmentRow_item\n              id\n            }\n          }\n          caseStudyConclusions: caseStudyConclusionsByCaseStudyRowId {\n            nodes {\n              rowId\n              type\n              id\n            }\n          }\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyTreatmentRow_item on CaseStudyTreatment {\n  title\n  startedAt\n  endedAt\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '93e6db32f14d53cbd399ea9f3d27fd23';
export default node;
