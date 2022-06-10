/**
 * @generated SignedSource<<185e8f84e736e201c9bdf6fb4af81978>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateCaseStudyTreatmentInput = {
  clientMutationId?: string | null;
  description?: string | null;
  endedAt: string;
  external: boolean;
  privateDescription?: string | null;
  rowId: string;
  score?: number | null;
  startedAt: string;
  title: string;
};
export type CaseStudyTreatmentManageUpdateMutation$variables = {
  input: UpdateCaseStudyTreatmentInput;
};
export type CaseStudyTreatmentManageUpdateMutation$data = {
  readonly updateCaseStudyTreatment: {
    readonly treatment: {
      readonly caseStudy: {
        readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_caseStudy" | "ClientsCaseStudiesDetailsPage_caseStudy">;
      };
      readonly eventsByCaseStudyTreatmentRowId: {
        readonly nodes: ReadonlyArray<{
          readonly " $fragmentSpreads": FragmentRefs<"EventsTable_events">;
        }>;
      };
      readonly rowId: string;
      readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_treatment">;
    } | null;
  } | null;
};
export type CaseStudyTreatmentManageUpdateMutation = {
  response: CaseStudyTreatmentManageUpdateMutation$data;
  variables: CaseStudyTreatmentManageUpdateMutation$variables;
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
  "name": "title",
  "storageKey": null
},
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
  "name": "clientRowId",
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
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "external",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "startedAt",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endedAt",
  "storageKey": null
},
v12 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Event",
    "kind": "LinkedField",
    "name": "nodes",
    "plural": true,
    "selections": [
      (v5/*: any*/),
      (v7/*: any*/),
      (v6/*: any*/),
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
          (v8/*: any*/),
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
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v8/*: any*/),
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
          (v2/*: any*/),
          (v9/*: any*/),
          (v3/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
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
          (v2/*: any*/),
          (v7/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyTreatmentManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": "treatment",
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
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
                    {
                      "args": null,
                      "kind": "FragmentSpread",
                      "name": "CaseStudyTreatmentManage_caseStudy"
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
                "path": "updateCaseStudyTreatment.treatment.caseStudy"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CaseStudyTreatmentManage_treatment"
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "EventsConnection",
                "kind": "LinkedField",
                "name": "eventsByCaseStudyTreatmentRowId",
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
    "name": "CaseStudyTreatmentManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyTreatmentPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudyTreatment",
        "plural": false,
        "selections": [
          {
            "alias": "treatment",
            "args": null,
            "concreteType": "CaseStudyTreatment",
            "kind": "LinkedField",
            "name": "caseStudyTreatment",
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
                  {
                    "alias": "client",
                    "args": null,
                    "concreteType": "Client",
                    "kind": "LinkedField",
                    "name": "clientByClientRowId",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
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
                      (v5/*: any*/)
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
                          (v5/*: any*/),
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
                              (v7/*: any*/),
                              (v4/*: any*/),
                              (v5/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v8/*: any*/)
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
                    "selections": (v12/*: any*/),
                    "storageKey": null
                  },
                  (v5/*: any*/)
                ],
                "storageKey": null
              },
              (v9/*: any*/),
              (v3/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "score",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "EventsConnection",
                "kind": "LinkedField",
                "name": "eventsByCaseStudyTreatmentRowId",
                "plural": false,
                "selections": (v12/*: any*/),
                "storageKey": null
              },
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
    "cacheID": "bab3abf6b266848f849f5bef4b84b632",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyTreatmentManageUpdateMutation(\n  $input: UpdateCaseStudyTreatmentInput!\n) {\n  updateCaseStudyTreatment(input: $input) {\n    treatment: caseStudyTreatment {\n      rowId\n      caseStudy: caseStudyByCaseStudyRowId {\n        ...CaseStudyTreatmentManage_caseStudy\n        ...ClientsCaseStudiesDetailsPage_caseStudy\n        id\n      }\n      ...CaseStudyTreatmentManage_treatment\n      eventsByCaseStudyTreatmentRowId {\n        nodes {\n          ...EventsTable_events\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_casyStudy on CaseStudy {\n  rowId\n  assignedTherapists: caseStudyTherapistsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      primary\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n  conclusion: caseStudyConclusionByCaseStudyRowId {\n    type\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyTreatmentManage_treatment on CaseStudyTreatment {\n  rowId\n  external\n  title\n  startedAt\n  endedAt\n  privateDescription\n  description\n  score\n}\n\nfragment ClientsCaseStudiesDetailsPage_caseStudy on CaseStudy {\n  rowId\n  title\n  clientRowId\n  concluded\n  ...CaseStudyManage_caseStudy\n  ...CaseStudyAssignedTherapistsManage_casyStudy\n  sortedEvents {\n    nodes {\n      ...EventsTable_events\n      id\n    }\n  }\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    external\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "f9d2c1e1b546ef6f55c67541410847a5";
}

export default node;
