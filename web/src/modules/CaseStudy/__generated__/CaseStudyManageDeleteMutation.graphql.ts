/**
 * @generated SignedSource<<688322a7638cf4347e5c0475c93b9ec7>>
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
                      {
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
                                  (v6/*: any*/),
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
                                  (v6/*: any*/),
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
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "external",
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
                "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
              },
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
    "cacheID": "04b6a17f6d6fac30018dac2b74245602",
    "id": null,
    "metadata": {},
    "name": "CaseStudyManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyManageDeleteMutation(\n  $input: DeleteCaseStudyInput!\n) {\n  deleteCaseStudy(input: $input) {\n    clientByClientRowId {\n      ...ClientCaseStudies_client\n      id\n    }\n  }\n}\n\nfragment ClientCaseStudies_client on Client {\n  rowId\n  caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      title\n      concluded\n      conclusion: caseStudyConclusionByCaseStudyRowId {\n        type\n        id\n      }\n      sortedEvents {\n        nodes {\n          ...EventsTable_events\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    external\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "9cff8fd1404e40d240f786a879b2b714";
}

export default node;
