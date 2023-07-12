/**
 * @generated SignedSource<<1000027b8e74a1bcd2e5985efc17d1f8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseStudyInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type CaseStudyManageDeleteMutation$variables = {
  input: DeleteCaseStudyInput;
};
export type CaseStudyManageDeleteMutation$data = {
  readonly deleteCaseStudy: {
    readonly clientByClientRowId: {
      readonly " $fragmentSpreads": FragmentRefs<"ClientCaseStudies_client">;
    } | null;
  } | null;
};
export type CaseStudyManageDeleteMutation = {
  response: CaseStudyManageDeleteMutation$data;
  variables: CaseStudyManageDeleteMutation$variables;
};

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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientRowId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudy",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ClientCaseStudies_client"
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
    "name": "CaseStudyManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudy",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": "caseStudies",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": [
                      "CREATED_AT_ASC"
                    ]
                  }
                ],
                "concreteType": "CaseStudiesConnection",
                "kind": "LinkedField",
                "name": "caseStudiesByClientRowId",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CaseStudy",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v4/*: any*/),
                      (v2/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "concluded",
                        "storageKey": null
                      },
                      {
                        "alias": "conclusion",
                        "args": null,
                        "concreteType": "CaseStudyConclusion",
                        "kind": "LinkedField",
                        "name": "caseStudyConclusionByCaseStudyRowId",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": "someSortedEvents",
                        "args": [
                          {
                            "kind": "Literal",
                            "name": "first",
                            "value": 5
                          }
                        ],
                        "concreteType": "EventsConnection",
                        "kind": "LinkedField",
                        "name": "sortedEvents",
                        "plural": false,
                        "selections": [
                          (v3/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Event",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v4/*: any*/),
                              (v7/*: any*/),
                              (v5/*: any*/),
                              {
                                "alias": "caseStudy",
                                "args": null,
                                "concreteType": "CaseStudy",
                                "kind": "LinkedField",
                                "name": "caseStudyByCaseStudyRowId",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  (v6/*: any*/),
                                  (v8/*: any*/),
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "formResponse",
                                "args": null,
                                "concreteType": "FormResponse",
                                "kind": "LinkedField",
                                "name": "formResponseByFormResponseRowId",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  {
                                    "alias": "form",
                                    "args": null,
                                    "concreteType": "Form",
                                    "kind": "LinkedField",
                                    "name": "formByFormRowId",
                                    "plural": false,
                                    "selections": [
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "name",
                                        "storageKey": null
                                      },
                                      (v4/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v8/*: any*/),
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "treatment",
                                "args": null,
                                "concreteType": "CaseStudyTreatment",
                                "kind": "LinkedField",
                                "name": "caseStudyTreatmentByCaseStudyTreatmentRowId",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "external",
                                    "storageKey": null
                                  },
                                  (v6/*: any*/),
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
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              },
                              {
                                "alias": "conclusion",
                                "args": null,
                                "concreteType": "CaseStudyConclusion",
                                "kind": "LinkedField",
                                "name": "caseStudyConclusionByCaseStudyConclusionRowId",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  (v7/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "concludedAt",
                                    "storageKey": null
                                  },
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "sortedEvents(first:5)"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
              },
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "10fbbae52925b1f2dcc44b4e2fdbc52e",
    "id": null,
    "metadata": {},
    "name": "CaseStudyManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyManageDeleteMutation(\n  $input: DeleteCaseStudyInput!\n) {\n  deleteCaseStudy(input: $input) {\n    clientByClientRowId {\n      ...ClientCaseStudies_client\n      id\n    }\n  }\n}\n\nfragment ClientCaseStudies_client on Client {\n  rowId\n  caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n    totalCount\n    nodes {\n      id\n      rowId\n      clientRowId\n      title\n      concluded\n      conclusion: caseStudyConclusionByCaseStudyRowId {\n        type\n        id\n      }\n      someSortedEvents: sortedEvents(first: 5) {\n        totalCount\n        nodes {\n          ...EventsTable_events\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    external\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "9cff8fd1404e40d240f786a879b2b714";
}

export default node;
