/**
 * @generated SignedSource<<bd9171f4dffcb39d27b8d789f1835b33>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type CreateCaseStudyConclusionInput = {
  caseStudyRowId: string;
  clientMutationId?: string | null;
  concludedAt: string;
  description: string;
  privateDescription?: string | null;
  type: CaseStudyConclusionType;
};
export type CaseStudyConclusionManageCreateMutation$variables = {
  input: CreateCaseStudyConclusionInput;
};
export type CaseStudyConclusionManageCreateMutation$data = {
  readonly createCaseStudyConclusion: {
    readonly conclusion: {
      readonly caseStudy: {
        readonly client: {
          readonly " $fragmentSpreads": FragmentRefs<"ClientCaseStudies_client" | "ClientsTable_client">;
        } | null;
        readonly clientRowId: string | null;
        readonly concluded: boolean;
        readonly rowId: string;
        readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_caseStudy" | "ClientsCaseStudiesDetailsPage_caseStudy">;
      };
      readonly rowId: string;
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_conclusion">;
    } | null;
  } | null;
};
export type CaseStudyConclusionManageCreateMutation = {
  response: CaseStudyConclusionManageCreateMutation$data;
  variables: CaseStudyConclusionManageCreateMutation$variables;
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
  "name": "clientRowId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "concluded",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_ASC"
    ]
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v10 = {
  "alias": "conclusion",
  "args": null,
  "concreteType": "CaseStudyConclusion",
  "kind": "LinkedField",
  "name": "caseStudyConclusionByCaseStudyRowId",
  "plural": false,
  "selections": [
    (v9/*: any*/),
    (v7/*: any*/)
  ],
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "concludedAt",
  "storageKey": null
},
v13 = [
  (v6/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "nodes",
    "plural": true,
    "selections": [
      (v7/*: any*/),
      (v9/*: any*/),
      (v3/*: any*/),
      {
        "alias": "caseStudy",
        "args": null,
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByCaseStudyRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v8/*: any*/),
          (v11/*: any*/),
          (v7/*: any*/)
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
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          (v11/*: any*/),
          (v7/*: any*/)
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
          (v8/*: any*/),
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
          (v9/*: any*/),
          (v12/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v14 = {
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
    "name": "CaseStudyConclusionManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyConclusion",
        "plural": false,
        "selections": [
          {
            "alias": "conclusion",
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "kind": "RequiredField",
                "field": {
                  "alias": "caseStudy",
                  "args": null,
                  "concreteType": "CaseStudy",
                  "kind": "LinkedField",
                  "name": "caseStudyByCaseStudyRowId",
                  "plural": false,
                  "selections": [
                    (v2/*: any*/),
                    (v3/*: any*/),
                    (v4/*: any*/),
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
                          "name": "ClientCaseStudies_client"
                        },
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "ClientsTable_client"
                        }
                      ],
                      "storageKey": null
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ClientsCaseStudiesDetailsPage_caseStudy"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "CaseStudyConclusionManage_caseStudy"
                    }
                  ],
                  "storageKey": null
                },
                "action": "THROW",
                "path": "createCaseStudyConclusion.conclusion.caseStudy"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyConclusionManage_conclusion"
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
    "name": "CaseStudyConclusionManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyConclusion",
        "plural": false,
        "selections": [
          {
            "alias": "conclusion",
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusion",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": "caseStudy",
                "args": null,
                "concreteType": "CaseStudy",
                "kind": "LinkedField",
                "name": "caseStudyByCaseStudyRowId",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
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
                        "args": (v5/*: any*/),
                        "concreteType": "CaseStudiesConnection",
                        "kind": "LinkedField",
                        "name": "caseStudiesByClientRowId",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "CaseStudy",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v7/*: any*/),
                              (v2/*: any*/),
                              (v3/*: any*/),
                              (v8/*: any*/),
                              (v4/*: any*/),
                              (v10/*: any*/),
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
                                "selections": (v13/*: any*/),
                                "storageKey": "sortedEvents(first:5)"
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "number",
                        "storageKey": null
                      },
                      (v14/*: any*/),
                      {
                        "alias": "assignedTherapists",
                        "args": null,
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
                              {
                                "alias": "therapist",
                                "args": null,
                                "concreteType": "Therapist",
                                "kind": "LinkedField",
                                "name": "therapistByTherapistRowId",
                                "plural": false,
                                "selections": [
                                  (v2/*: any*/),
                                  (v14/*: any*/),
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": "treatments",
                        "args": null,
                        "concreteType": "CaseStudyTreatmentsConnection",
                        "kind": "LinkedField",
                        "name": "caseStudyTreatmentsByCaseStudiesClientRowId",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/),
                  (v10/*: any*/),
                  {
                    "alias": "assignedTherapists",
                    "args": (v5/*: any*/),
                    "concreteType": "CaseStudyTherapistsConnection",
                    "kind": "LinkedField",
                    "name": "caseStudyTherapistsByCaseStudyRowId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseStudyTherapist",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v7/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "primary",
                            "storageKey": null
                          },
                          {
                            "alias": "therapist",
                            "args": null,
                            "concreteType": "Therapist",
                            "kind": "LinkedField",
                            "name": "therapistByTherapistRowId",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v9/*: any*/),
                              (v14/*: any*/),
                              (v7/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ClientExtension",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "__id",
                            "storageKey": null
                          }
                        ]
                      }
                    ],
                    "storageKey": "caseStudyTherapistsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EventsConnection",
                    "kind": "LinkedField",
                    "name": "sortedEvents",
                    "plural": false,
                    "selections": (v13/*: any*/),
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "privateDescription",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              (v12/*: any*/),
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
    "cacheID": "f67645debd7ec80f2d37f2573e25a4d9",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionManageCreateMutation(\n  $input: CreateCaseStudyConclusionInput!\n) {\n  createCaseStudyConclusion(input: $input) {\n    conclusion: caseStudyConclusion {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        rowId\n        clientRowId\n        concluded\n        client: clientByClientRowId {\n          ...ClientCaseStudies_client\n          ...ClientsTable_client\n          id\n        }\n        ...ClientsCaseStudiesDetailsPage_caseStudy\n        ...CaseStudyConclusionManage_caseStudy\n        id\n      }\n      ...CaseStudyConclusionManage_conclusion\n      id\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_casyStudy on CaseStudy {\n  rowId\n  assignedTherapists: caseStudyTherapistsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      primary\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_conclusion on CaseStudyConclusion {\n  rowId\n  type\n  privateDescription\n  description\n  concludedAt\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n  conclusion: caseStudyConclusionByCaseStudyRowId {\n    type\n    id\n  }\n}\n\nfragment ClientCaseStudies_client on Client {\n  rowId\n  caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n    totalCount\n    nodes {\n      id\n      rowId\n      clientRowId\n      title\n      concluded\n      conclusion: caseStudyConclusionByCaseStudyRowId {\n        type\n        id\n      }\n      someSortedEvents: sortedEvents(first: 5) {\n        totalCount\n        nodes {\n          ...EventsTable_events\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ClientsCaseStudiesDetailsPage_caseStudy on CaseStudy {\n  rowId\n  title\n  clientRowId\n  concluded\n  ...CaseStudyManage_caseStudy\n  ...CaseStudyAssignedTherapistsManage_casyStudy\n  sortedEvents {\n    totalCount\n    nodes {\n      ...EventsTable_events\n      id\n    }\n  }\n}\n\nfragment ClientsTable_client on Client {\n  rowId\n  number\n  fullName\n  assignedTherapists: clientAssignedTherapistsByClientRowId {\n    nodes {\n      therapist: therapistByTherapistRowId {\n        rowId\n        fullName\n        id\n      }\n      id\n    }\n  }\n  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {\n    totalCount\n  }\n  caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      rowId\n      title\n      concluded\n      id\n    }\n  }\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    external\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "dab1e1e9547e051ceecb9709bc740df4";
}

export default node;
