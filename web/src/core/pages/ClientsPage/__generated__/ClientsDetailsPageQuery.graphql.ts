/**
 * @generated SignedSource<<aa9baf4271ab5d24fd0e056c534d2d9b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsDetailsPageQuery$variables = {
  rowId: string;
};
export type ClientsDetailsPageQuery$data = {
  readonly client: {
    readonly fullName: string;
    readonly " $fragmentSpreads": FragmentRefs<"ClientAssignedTherapistsManage_client" | "ClientCaseStudies_client" | "ClientManage_client">;
  } | null;
  readonly filterForms: {
    readonly nodes: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"ClientCaseStudies_forms">;
    }>;
  } | null;
  readonly viewer: {
    readonly isAdmin: boolean;
    readonly isTherapist: boolean;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ClientAssignedTherapistsManage_query">;
};
export type ClientsDetailsPageQuery = {
  response: ClientsDetailsPageQuery$data;
  variables: ClientsDetailsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "rowId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAdmin",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isTherapist",
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "rowId"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
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
  "name": "rowId",
  "storageKey": null
},
v7 = [
  (v4/*: any*/),
  {
    "alias": "therapist",
    "args": null,
    "concreteType": "Therapist",
    "kind": "LinkedField",
    "name": "therapistByUserRowId",
    "plural": false,
    "selections": [
      (v6/*: any*/),
      (v5/*: any*/)
    ],
    "storageKey": null
  },
  (v5/*: any*/)
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsDetailsPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "ClientAssignedTherapistsManage_query"
      },
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "viewer",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v2/*: any*/)
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "viewer"
      },
      {
        "alias": "client",
        "args": (v3/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClientManage_client"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClientAssignedTherapistsManage_client"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClientCaseStudies_client"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FormsConnection",
        "kind": "LinkedField",
        "name": "filterForms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Form",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ClientCaseStudies_forms"
              }
            ],
            "storageKey": null
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
    "name": "ClientsDetailsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 10
          }
        ],
        "concreteType": "TherapistsConnection",
        "kind": "LinkedField",
        "name": "filterTherapists",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Therapist",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v5/*: any*/),
              (v6/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "filterTherapists(first:10)"
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "client",
        "args": (v3/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "number",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "dateOfBirth",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "telephone",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "gender",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "city",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "note",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "discrete",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "updatedAt",
            "storageKey": null
          },
          {
            "alias": "updatedBy",
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "userByUpdatedBy",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          {
            "alias": "createdBy",
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "userByCreatedBy",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "canViewerDelete",
            "storageKey": null
          },
          {
            "alias": "assignedTherapists",
            "args": [
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": [
                  "CREATED_AT_ASC"
                ]
              }
            ],
            "concreteType": "ClientAssignedTherapistsConnection",
            "kind": "LinkedField",
            "name": "clientAssignedTherapistsByClientRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "ClientAssignedTherapist",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v5/*: any*/),
                  (v6/*: any*/),
                  {
                    "alias": "therapist",
                    "args": null,
                    "concreteType": "Therapist",
                    "kind": "LinkedField",
                    "name": "therapistByTherapistRowId",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v8/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "clientAssignedTherapistsByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ClientAssignedTherapist",
            "kind": "LinkedField",
            "name": "latestAssignedTherapist",
            "plural": false,
            "selections": [
              {
                "alias": "therapist",
                "args": null,
                "concreteType": "Therapist",
                "kind": "LinkedField",
                "name": "therapistByTherapistRowId",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": null
          },
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
                  (v5/*: any*/),
                  (v6/*: any*/),
                  (v10/*: any*/),
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
                      (v8/*: any*/),
                      (v5/*: any*/)
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
                          (v5/*: any*/),
                          (v8/*: any*/),
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
                              (v6/*: any*/),
                              (v10/*: any*/),
                              (v9/*: any*/),
                              (v5/*: any*/)
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
                              (v6/*: any*/),
                              {
                                "alias": "form",
                                "args": null,
                                "concreteType": "Form",
                                "kind": "LinkedField",
                                "name": "formByFormRowId",
                                "plural": false,
                                "selections": [
                                  (v11/*: any*/),
                                  (v5/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v9/*: any*/),
                              (v5/*: any*/)
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
                              (v6/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "external",
                                "storageKey": null
                              },
                              (v10/*: any*/),
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
                              (v5/*: any*/)
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
                              (v6/*: any*/),
                              (v8/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "concludedAt",
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
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "FormsConnection",
        "kind": "LinkedField",
        "name": "filterForms",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Form",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v11/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9a42060b302d485db56b1edaf7e33afe",
    "id": null,
    "metadata": {},
    "name": "ClientsDetailsPageQuery",
    "operationKind": "query",
    "text": "query ClientsDetailsPageQuery(\n  $rowId: UUID!\n) {\n  ...ClientAssignedTherapistsManage_query\n  viewer {\n    isAdmin\n    isTherapist\n    id\n  }\n  client: clientByRowId(rowId: $rowId) {\n    fullName\n    ...ClientManage_client\n    ...ClientAssignedTherapistsManage_client\n    ...ClientCaseStudies_client\n    id\n  }\n  filterForms {\n    nodes {\n      ...ClientCaseStudies_forms\n      id\n    }\n  }\n}\n\nfragment AutocompleteTherapist_query on Query {\n  filterTherapists(first: 10) {\n    nodes {\n      id\n      rowId\n      fullName\n    }\n  }\n}\n\nfragment ClientAssignedTherapistsManage_client on Client {\n  rowId\n  assignedTherapists: clientAssignedTherapistsByClientRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n  latestAssignedTherapist {\n    therapist: therapistByTherapistRowId {\n      fullName\n      id\n    }\n    id\n  }\n}\n\nfragment ClientAssignedTherapistsManage_query on Query {\n  ...AutocompleteTherapist_query\n}\n\nfragment ClientCaseStudies_client on Client {\n  rowId\n  caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {\n    nodes {\n      id\n      rowId\n      title\n      concluded\n      conclusion: caseStudyConclusionByCaseStudyRowId {\n        type\n        id\n      }\n      sortedEvents {\n        nodes {\n          ...EventsTable_events\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ClientCaseStudies_forms on Form {\n  rowId\n  name\n}\n\nfragment ClientManage_client on Client {\n  rowId\n  fullName\n  number\n  firstName\n  lastName\n  dateOfBirth\n  telephone\n  gender\n  city\n  address\n  email\n  note\n  discrete\n  updatedAt\n  updatedBy: userByUpdatedBy {\n    fullName\n    therapist: therapistByUserRowId {\n      rowId\n      id\n    }\n    id\n  }\n  createdBy: userByCreatedBy {\n    fullName\n    therapist: therapistByUserRowId {\n      rowId\n      id\n    }\n    id\n  }\n  canViewerDelete\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    external\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "6e66e55bfdb36945913195192a736994";
}

export default node;
