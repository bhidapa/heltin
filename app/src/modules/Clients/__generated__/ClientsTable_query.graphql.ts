/**
 * @generated SignedSource<<a9801e70807e1b66ee2a4c9889aab4e0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsTable_query$data = {
  readonly filterClients: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly assignedTherapists: {
          readonly nodes: ReadonlyArray<{
            readonly therapist: {
              readonly fullName: string;
              readonly rowId: string;
            };
          }>;
        };
        readonly caseStudies: {
          readonly nodes: ReadonlyArray<{
            readonly concluded: boolean;
            readonly rowId: string;
            readonly title: string;
          }>;
        };
        readonly fullName: string;
        readonly number: number;
        readonly rowId: string;
        readonly treatments: {
          readonly totalCount: number;
        };
      };
    }>;
    readonly totalCount: number;
  };
  readonly viewer: {
    readonly isAdmin: boolean;
    readonly isTherapist: boolean;
  };
  readonly " $fragmentType": "ClientsTable_query";
};
export type ClientsTable_query$key = {
  readonly " $data"?: ClientsTable_query$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientsTable_query">;
};

import ClientsTableRefetchQuery_graphql from './ClientsTableRefetchQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "filterClients"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
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
  "name": "fullName",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "q"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": ClientsTableRefetchQuery_graphql
    }
  },
  "name": "ClientsTable_query",
  "selections": [
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isAdmin",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isTherapist",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "viewer"
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": "filterClients",
        "args": [
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "NUMBER_DESC"
          },
          {
            "kind": "Variable",
            "name": "searchText",
            "variableName": "q"
          }
        ],
        "concreteType": "ClientsConnection",
        "kind": "LinkedField",
        "name": "__ClientsTable_filterClients_connection",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "ClientsEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Client",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "number",
                    "storageKey": null
                  },
                  (v3/*: any*/),
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
                            "kind": "RequiredField",
                            "field": {
                              "alias": "therapist",
                              "args": null,
                              "concreteType": "Therapist",
                              "kind": "LinkedField",
                              "name": "therapistByTherapistRowId",
                              "plural": false,
                              "selections": [
                                (v2/*: any*/),
                                (v3/*: any*/)
                              ],
                              "storageKey": null
                            },
                            "action": "THROW",
                            "path": "filterClients.edges.node.assignedTherapists.nodes.therapist"
                          }
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
                      (v1/*: any*/)
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
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "title",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "concluded",
                            "storageKey": null
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
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "filterClients"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "99e41913e1fcc1e7e1de7890ecd270db";
}

export default node;
