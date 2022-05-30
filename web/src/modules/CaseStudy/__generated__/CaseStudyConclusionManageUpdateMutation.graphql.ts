/**
 * @generated SignedSource<<465a18265e7dbe9e7eeff15d0f80be56>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionType = "TREATMENT_COMPLETION" | "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL";
export type UpdateCaseStudyConclusionInput = {
  clientMutationId?: string | null;
  rowId: string;
  type: CaseStudyConclusionType;
  concludedAt: string;
  description: string;
  privateDescription?: string | null;
};
export type CaseStudyConclusionManageUpdateMutation$variables = {
  input: UpdateCaseStudyConclusionInput;
};
export type CaseStudyConclusionManageUpdateMutation$data = {
  readonly updateCaseStudyConclusion: {
    readonly conclusion: {
      readonly rowId: string;
      readonly caseStudy: {
        readonly concluded: boolean;
        readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_caseStudy" | "ClientsCaseStudiesDetailsPage_caseStudy">;
      };
      readonly eventsByCaseStudyConclusionRowId: {
        readonly nodes: ReadonlyArray<{
          readonly " $fragmentSpreads": FragmentRefs<"EventsTable_events">;
        }>;
      };
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_conclusion">;
    } | null;
  } | null;
};
export type CaseStudyConclusionManageUpdateMutation = {
  variables: CaseStudyConclusionManageUpdateMutation$variables;
  response: CaseStudyConclusionManageUpdateMutation$data;
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
  "name": "concluded",
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
  "name": "fullName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientRowId",
  "storageKey": null
},
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
  "name": "concludedAt",
  "storageKey": null
},
v11 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "nodes",
    "plural": true,
    "selections": [
      (v6/*: any*/),
      (v8/*: any*/),
      (v7/*: any*/),
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
          (v6/*: any*/)
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
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v9/*: any*/),
          (v6/*: any*/)
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
          (v6/*: any*/)
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
          (v8/*: any*/),
          (v10/*: any*/),
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyConclusionManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyConclusion",
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
                    (v3/*: any*/),
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "CaseStudyConclusionManage_caseStudy"
                    },
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "ClientsCaseStudiesDetailsPage_caseStudy"
                    }
                  ],
                  "storageKey": null
                },
                "action": "THROW",
                "path": "updateCaseStudyConclusion.conclusion.caseStudy"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyConclusionManage_conclusion"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "EventsConnection",
                "kind": "LinkedField",
                "name": "eventsByCaseStudyConclusionRowId",
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
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "EventsTable_events"
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
    "name": "CaseStudyConclusionManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyConclusionPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyConclusion",
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
                  (v3/*: any*/),
                  (v2/*: any*/),
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
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  {
                    "alias": "conclusion",
                    "args": null,
                    "concreteType": "CaseStudyConclusion",
                    "kind": "LinkedField",
                    "name": "caseStudyConclusionByCaseStudyRowId",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v6/*: any*/)
                    ],
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
                          (v6/*: any*/),
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
                              (v8/*: any*/),
                              (v5/*: any*/),
                              (v6/*: any*/)
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "EventsConnection",
                    "kind": "LinkedField",
                    "name": "sortedEvents",
                    "plural": false,
                    "selections": (v11/*: any*/),
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v8/*: any*/),
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
              (v10/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "EventsConnection",
                "kind": "LinkedField",
                "name": "eventsByCaseStudyConclusionRowId",
                "plural": false,
                "selections": (v11/*: any*/),
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "acef4db7cf122065589412baa2d866a0",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionManageUpdateMutation(\n  $input: UpdateCaseStudyConclusionInput!\n) {\n  updateCaseStudyConclusion(input: $input) {\n    conclusion: caseStudyConclusion {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        concluded\n        ...CaseStudyConclusionManage_caseStudy\n        ...ClientsCaseStudiesDetailsPage_caseStudy\n        id\n      }\n      ...CaseStudyConclusionManage_conclusion\n      eventsByCaseStudyConclusionRowId {\n        nodes {\n          ...EventsTable_events\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_casyStudy on CaseStudy {\n  rowId\n  assignedTherapists: caseStudyTherapistsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      primary\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_conclusion on CaseStudyConclusion {\n  rowId\n  type\n  privateDescription\n  description\n  concludedAt\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n  conclusion: caseStudyConclusionByCaseStudyRowId {\n    type\n    id\n  }\n}\n\nfragment ClientsCaseStudiesDetailsPage_caseStudy on CaseStudy {\n  rowId\n  title\n  clientRowId\n  concluded\n  ...CaseStudyManage_caseStudy\n  ...CaseStudyAssignedTherapistsManage_casyStudy\n  sortedEvents {\n    nodes {\n      ...EventsTable_events\n      id\n    }\n  }\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "b73b1328f725d0e62c215172817f78fc";
}

export default node;
