/**
 * @generated SignedSource<<4f587d4d5f1a84ffc97af664aa8e5d96>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCaseStudiesDetailsPageQuery$variables = {
  caseStudyRowId: string;
  clientRowId: string;
};
export type ClientsCaseStudiesDetailsPageQuery$data = {
  readonly caseStudy: {
    readonly title: string;
    readonly " $fragmentSpreads": FragmentRefs<"ClientsCaseStudiesDetailsPage_caseStudy">;
  } | null;
  readonly client: {
    readonly fullName: string;
    readonly rowId: string;
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyManage_client">;
  } | null;
  readonly filterForms: {
    readonly nodes: ReadonlyArray<{
      readonly name: string;
      readonly rowId: string;
    }>;
  } | null;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyAssignedTherapistsManage_query">;
};
export type ClientsCaseStudiesDetailsPageQuery = {
  response: ClientsCaseStudiesDetailsPageQuery$data;
  variables: ClientsCaseStudiesDetailsPageQuery$variables;
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
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "clientRowId",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v11 = {
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
          (v6/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClientsCaseStudiesDetailsPage_caseStudy"
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
              (v7/*: any*/)
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
          (v8/*: any*/)
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
          (v6/*: any*/),
          (v3/*: any*/),
          (v9/*: any*/),
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
              (v10/*: any*/),
              (v8/*: any*/)
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
                  (v8/*: any*/),
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
                      (v10/*: any*/),
                      (v4/*: any*/),
                      (v8/*: any*/)
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
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "totalCount",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Event",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v8/*: any*/),
                  (v10/*: any*/),
                  (v9/*: any*/),
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
                      (v11/*: any*/),
                      (v8/*: any*/)
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
                          (v7/*: any*/),
                          (v8/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v11/*: any*/),
                      (v8/*: any*/)
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
                      (v8/*: any*/)
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
                      (v10/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "concludedAt",
                        "storageKey": null
                      },
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v8/*: any*/)
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
              (v7/*: any*/),
              (v8/*: any*/)
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
            "name": "disabled",
            "value": false
          },
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
              (v8/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": "filterTherapists(disabled:false,first:10)"
      }
    ]
  },
  "params": {
    "cacheID": "f077596f83449d2ee8b669df080bf80b",
    "id": null,
    "metadata": {},
    "name": "ClientsCaseStudiesDetailsPageQuery",
    "operationKind": "query",
    "text": "query ClientsCaseStudiesDetailsPageQuery(\n  $clientRowId: UUID!\n  $caseStudyRowId: UUID!\n) {\n  client: clientByRowId(rowId: $clientRowId) {\n    rowId\n    fullName\n    ...CaseStudyManage_client\n    id\n  }\n  caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {\n    title\n    ...ClientsCaseStudiesDetailsPage_caseStudy\n    id\n  }\n  filterForms {\n    nodes {\n      rowId\n      name\n      id\n    }\n  }\n  ...CaseStudyAssignedTherapistsManage_query\n}\n\nfragment AutocompleteTherapist_query on Query {\n  filterTherapists(first: 10, disabled: false) {\n    nodes {\n      id\n      rowId\n      fullName\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_casyStudy on CaseStudy {\n  rowId\n  assignedTherapists: caseStudyTherapistsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      primary\n      therapist: therapistByTherapistRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n\nfragment CaseStudyAssignedTherapistsManage_query on Query {\n  ...AutocompleteTherapist_query\n}\n\nfragment CaseStudyManage_caseStudy on CaseStudy {\n  rowId\n  title\n  conclusion: caseStudyConclusionByCaseStudyRowId {\n    type\n    id\n  }\n}\n\nfragment CaseStudyManage_client on Client {\n  rowId\n  fullName\n}\n\nfragment ClientsCaseStudiesDetailsPage_caseStudy on CaseStudy {\n  rowId\n  title\n  clientRowId\n  concluded\n  ...CaseStudyManage_caseStudy\n  ...CaseStudyAssignedTherapistsManage_casyStudy\n  sortedEvents {\n    totalCount\n    nodes {\n      ...EventsTable_events\n      id\n    }\n  }\n}\n\nfragment EventsTable_events on Event {\n  id\n  type\n  clientRowId\n  caseStudy: caseStudyByCaseStudyRowId {\n    rowId\n    title\n    createdAt\n    id\n  }\n  formResponse: formResponseByFormResponseRowId {\n    rowId\n    form: formByFormRowId {\n      name\n      id\n    }\n    createdAt\n    id\n  }\n  treatment: caseStudyTreatmentByCaseStudyTreatmentRowId {\n    rowId\n    external\n    title\n    startedAt\n    endedAt\n    id\n  }\n  conclusion: caseStudyConclusionByCaseStudyConclusionRowId {\n    rowId\n    type\n    concludedAt\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "c36e293ba42a3e6cfab45cbae51608b3";
}

export default node;
