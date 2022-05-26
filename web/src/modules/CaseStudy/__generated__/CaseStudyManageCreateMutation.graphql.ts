/**
 * @generated SignedSource<<5d788e1afe9500eda1a03ae8610ec885>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateCaseStudyInput = {
  clientMutationId?: string | null;
  title: string;
  clientRowId: string;
};
export type CaseStudyManageCreateMutation$variables = {
  input: CreateCaseStudyInput;
};
export type CaseStudyManageCreateMutation$data = {
  readonly createCaseStudy: {
    readonly caseStudy: {
      readonly rowId: string;
      readonly client: {
        readonly rowId: string;
        readonly " $fragmentSpreads": FragmentRefs<"ClientCaseStudies_client">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyManage_caseStudy">;
    } | null;
  } | null;
};
export type CaseStudyManageCreateMutation = {
  variables: CaseStudyManageCreateMutation$variables;
  response: CaseStudyManageCreateMutation$data;
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
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v6 = {
  "alias": "conclusion",
  "args": null,
  "concreteType": "CaseStudyConclusion",
  "kind": "LinkedField",
  "name": "caseStudyConclusionByCaseStudyRowId",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v7 = {
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
    "name": "CaseStudyManageCreateMutation",
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
              {
                "kind": "RequiredField",
                "field": {
                  "alias": "client",
                  "args": null,
                  "concreteType": "Client",
                  "kind": "LinkedField",
                  "name": "clientByClientRowId",
                  "plural": false,
                  "selections": [
                    (v2/*: any*/),
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ClientCaseStudies_client"
                    }
                  ],
                  "storageKey": null
                },
                "action": "THROW",
                "path": "createCaseStudy.caseStudy.client"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyManage_caseStudy"
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
              {
                "alias": "client",
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
                          "CREATED_AT_DESC"
                        ]
                      }
                    ],
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
                          (v3/*: any*/),
                          (v2/*: any*/),
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "concluded",
                            "storageKey": null
                          },
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "EventsConnection",
                            "kind": "LinkedField",
                            "name": "sortedEvents",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Event",
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
                                    "name": "clientRowId",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": "caseStudy",
                                    "args": null,
                                    "concreteType": "CaseStudy",
                                    "kind": "LinkedField",
                                    "name": "caseStudyByCaseStudyRowId",
                                    "plural": false,
                                    "selections": [
                                      (v2/*: any*/),
                                      (v4/*: any*/),
                                      (v7/*: any*/),
                                      (v3/*: any*/)
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
                                          (v3/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v7/*: any*/),
                                      (v3/*: any*/)
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
                                      (v3/*: any*/)
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
                                      (v5/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "concludedAt",
                                        "storageKey": null
                                      },
                                      (v3/*: any*/)
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
                        "storageKey": null
                      }
                    ],
                    "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])"
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v4/*: any*/),
              (v6/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7b3fd05b676266ef86791795f6c872ff",
    "id": null,
    "metadata": {},
    "name": "CaseStudyManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyManageCreateMutation(\n  $input: CreateCaseStudyInput!\n) {\n  createCaseStudy(input: $input) {\n    caseStudy {\n      rowId\n      client: clientByClientRowId {\n        rowId\n        ...ClientCaseStudies_client\n        id\n      }\n      ...CaseStudyManage_caseStudy\n      id\n    }\n  }\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n  conclusion: caseStudyConclusionByCaseStudyRowId {\n    type\n    id\n  }\n}\n\nfragment ClientCaseStudies_client on Client {\n  rowId\n  caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {\n    nodes {\n      id\n      rowId\n      title\n      concluded\n      conclusion: caseStudyConclusionByCaseStudyRowId {\n        type\n        id\n      }\n      sortedEvents {\n        nodes {\n          ...EventsTable_events\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "560479456e0917bacc6501709b10aa5a";
}

export default node;
