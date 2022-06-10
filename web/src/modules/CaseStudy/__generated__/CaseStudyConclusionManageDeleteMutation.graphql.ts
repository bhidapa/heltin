/**
 * @generated SignedSource<<eb0b654927ad2dc8c6f67af45b867267>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseStudyConclusionInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type CaseStudyConclusionManageDeleteMutation$variables = {
  input: DeleteCaseStudyConclusionInput;
};
export type CaseStudyConclusionManageDeleteMutation$data = {
  readonly deleteCaseStudyConclusion: {
    readonly conclusion: {
      readonly caseStudyByCaseStudyRowId: {
        readonly clientByClientRowId: {
          readonly " $fragmentSpreads": FragmentRefs<"ClientCaseStudies_client" | "ClientsTable_client">;
        } | null;
        readonly " $fragmentSpreads": FragmentRefs<"ClientsCaseStudiesDetailsPage_caseStudy">;
      } | null;
      readonly rowId: string;
    } | null;
  } | null;
};
export type CaseStudyConclusionManageDeleteMutation = {
  response: CaseStudyConclusionManageDeleteMutation$data;
  variables: CaseStudyConclusionManageDeleteMutation$variables;
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
  "name": "concluded",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v7 = {
  "alias": "conclusion",
  "args": null,
  "concreteType": "CaseStudyConclusion",
  "kind": "LinkedField",
  "name": "caseStudyConclusionByCaseStudyRowId",
  "plural": false,
  "selections": [
    (v6/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientRowId",
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
        (v6/*: any*/),
        (v8/*: any*/),
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
            (v9/*: any*/),
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
            (v9/*: any*/),
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
            (v6/*: any*/),
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
},
v11 = {
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
    "name": "CaseStudyConclusionManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyConclusion",
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
                "alias": null,
                "args": null,
                "concreteType": "CaseStudy",
                "kind": "LinkedField",
                "name": "caseStudyByCaseStudyRowId",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CaseStudyConclusionManageDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyConclusion",
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
                "alias": null,
                "args": null,
                "concreteType": "CaseStudy",
                "kind": "LinkedField",
                "name": "caseStudyByCaseStudyRowId",
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
                              (v5/*: any*/),
                              (v7/*: any*/),
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])"
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "number",
                        "storageKey": null
                      },
                      (v11/*: any*/),
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
                              (v2/*: any*/),
                              (v11/*: any*/),
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v3/*: any*/)
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
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "totalCount",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v8/*: any*/),
                  (v5/*: any*/),
                  (v7/*: any*/),
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
                          (v3/*: any*/),
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
                              (v6/*: any*/),
                              (v11/*: any*/),
                              (v3/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v9/*: any*/)
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
                  (v10/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
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
    "cacheID": "88bd4cfa979754f4b0c91cf47eb4626d",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionManageDeleteMutation(\n  $input: DeleteCaseStudyConclusionInput!\n) {\n  deleteCaseStudyConclusion(input: $input) {\n    conclusion: caseStudyConclusion {\n      rowId\n      caseStudyByCaseStudyRowId {\n        clientByClientRowId {\n          ...ClientCaseStudies_client\n          ...ClientsTable_client\n          id\n        }\n        ...ClientsCaseStudiesDetailsPage_caseStudy\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_casyStudy on CaseStudy {\n  rowId\n  assignedTherapists: caseStudyTherapistsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      primary\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n  conclusion: caseStudyConclusionByCaseStudyRowId {\n    type\n    id\n  }\n}\n\nfragment ClientCaseStudies_client on Client {\n  rowId\n  caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {\n    nodes {\n      id\n      rowId\n      title\n      concluded\n      conclusion: caseStudyConclusionByCaseStudyRowId {\n        type\n        id\n      }\n      sortedEvents {\n        nodes {\n          ...EventsTable_events\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment ClientsCaseStudiesDetailsPage_caseStudy on CaseStudy {\n  rowId\n  title\n  clientRowId\n  concluded\n  ...CaseStudyManage_caseStudy\n  ...CaseStudyAssignedTherapistsManage_casyStudy\n  sortedEvents {\n    nodes {\n      ...EventsTable_events\n      id\n    }\n  }\n}\n\nfragment ClientsTable_client on Client {\n  rowId\n  number\n  fullName\n  latestAssignedTherapist {\n    therapist: therapistByTherapistRowId {\n      rowId\n      fullName\n      id\n    }\n    id\n  }\n  treatments: caseStudyTreatmentsByCaseStudiesClientRowId {\n    totalCount\n  }\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "1bf2b45db042fe9c75e62ef65633e1c3";
}

export default node;
