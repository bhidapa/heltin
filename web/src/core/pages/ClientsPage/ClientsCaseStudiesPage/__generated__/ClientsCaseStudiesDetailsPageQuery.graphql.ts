/**
 * @generated SignedSource<<acba09aab520d77caff2af8bcf742c20>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCaseStudiesDetailsPageQuery$variables = {
  clientRowId: string;
  caseStudyRowId: string;
};
export type ClientsCaseStudiesDetailsPageQuery$data = {
  readonly client: {
    readonly rowId: string;
    readonly fullName: string;
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyManage_client">;
  } | null;
  readonly caseStudy: {
    readonly rowId: string;
    readonly title: string;
    readonly clientRowId: string | null;
    readonly concluded: boolean;
    readonly sortedEvents: {
      readonly nodes: ReadonlyArray<{
        readonly " $fragmentSpreads": FragmentRefs<"EventsTable_events">;
      }>;
    };
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyManage_caseStudy" | "CaseStudyAssignedTherapistsManage_casyStudy">;
  } | null;
  readonly filterForms: {
    readonly nodes: ReadonlyArray<{
      readonly rowId: string;
      readonly name: string;
    }>;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyAssignedTherapistsManage_query">;
};
export type ClientsCaseStudiesDetailsPageQuery = {
  variables: ClientsCaseStudiesDetailsPageQuery$variables;
  response: ClientsCaseStudiesDetailsPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "caseStudyRowId"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "clientRowId"
},
v2 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "clientRowId"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "caseStudyRowId"
  }
],
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
  "name": "clientRowId",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "concluded",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsCaseStudiesDetailsPageQuery",
    "selections": [
      {
        "alias": "client",
        "args": (v2/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyManage_client"
          }
        ],
        "storageKey": null
      },
      {
        "alias": "caseStudy",
        "args": (v5/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyManage_caseStudy"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyAssignedTherapistsManage_casyStudy"
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
              (v3/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CaseStudyAssignedTherapistsManage_query"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "ClientsCaseStudiesDetailsPageQuery",
    "selections": [
      {
        "alias": "client",
        "args": (v2/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v4/*: any*/),
          (v10/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "caseStudy",
        "args": (v5/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          {
            "alias": "conclusion",
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusionByCaseStudyRowId",
            "plural": false,
            "selections": [
              (v11/*: any*/),
              (v10/*: any*/)
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
                  (v10/*: any*/),
                  (v3/*: any*/),
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
                      (v3/*: any*/),
                      (v11/*: any*/),
                      (v4/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v12/*: any*/)
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
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Event",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": "caseStudy",
                    "args": null,
                    "concreteType": "CaseStudy",
                    "kind": "LinkedField",
                    "name": "caseStudyByCaseStudyRowId",
                    "plural": false,
                    "selections": [
                      (v3/*: any*/),
                      (v6/*: any*/),
                      (v12/*: any*/),
                      (v10/*: any*/)
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
                      (v3/*: any*/),
                      {
                        "alias": "form",
                        "args": null,
                        "concreteType": "Form",
                        "kind": "LinkedField",
                        "name": "formByFormRowId",
                        "plural": false,
                        "selections": [
                          (v9/*: any*/),
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v12/*: any*/),
                      (v10/*: any*/)
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
                      (v3/*: any*/),
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
                      (v10/*: any*/)
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
                      (v3/*: any*/),
                      (v11/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "concludedAt",
                        "storageKey": null
                      },
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v10/*: any*/)
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
              (v3/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
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
              (v10/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "filterTherapists(first:10)"
      }
    ]
  },
  "params": {
    "cacheID": "728fa58e51ae4a961ea16257103b809c",
    "id": null,
    "metadata": {},
    "name": "ClientsCaseStudiesDetailsPageQuery",
    "operationKind": "query",
    "text": "query ClientsCaseStudiesDetailsPageQuery(\n  $clientRowId: UUID!\n  $caseStudyRowId: UUID!\n) {\n  client: clientByRowId(rowId: $clientRowId) {\n    rowId\n    fullName\n    ...CaseStudyManage_client\n    id\n  }\n  caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {\n    rowId\n    title\n    clientRowId\n    concluded\n    ...CaseStudyManage_caseStudy\n    ...CaseStudyAssignedTherapistsManage_casyStudy\n    sortedEvents {\n      nodes {\n        ...EventsTable_events\n        id\n      }\n    }\n    id\n  }\n  filterForms {\n    nodes {\n      rowId\n      name\n      id\n    }\n  }\n  ...CaseStudyAssignedTherapistsManage_query\n}\n\nfragment AutocompleteTherapist_query on Query {\n  filterTherapists(first: 10) {\n    nodes {\n      id\n      rowId\n      fullName\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_casyStudy on CaseStudy {\n  rowId\n  assignedTherapists: caseStudyTherapistsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      primary\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_query on Query {\n  ...AutocompleteTherapist_query\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n  conclusion: caseStudyConclusionByCaseStudyRowId {\n    type\n    id\n  }\n}\n\nfragment CaseStudyManage_client on Client {\n  rowId\n  fullName\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "e79b5b621e6739f7f6226d87f2f84e4f";
}

export default node;
