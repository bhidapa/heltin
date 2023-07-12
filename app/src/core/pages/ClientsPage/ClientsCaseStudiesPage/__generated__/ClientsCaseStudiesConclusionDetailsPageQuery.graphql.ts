/**
 * @generated SignedSource<<e2ab9471e1ea37ae53378b80db621c89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionType = "CANCELLATION_BY_CLIENT" | "CANCELLATION_BY_PARENT" | "FURTHER_REFERRAL" | "TREATMENT_COMPLETION";
export type ClientsCaseStudiesConclusionDetailsPageQuery$variables = {
  caseStudyRowId: string;
  conclusionRowId: string;
};
export type ClientsCaseStudiesConclusionDetailsPageQuery$data = {
  readonly caseStudy: {
    readonly client: {
      readonly fullName: string;
    };
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_caseStudy">;
  } | null;
  readonly conclusion: {
    readonly caseStudyRowId: string;
    readonly concludedAt: string;
    readonly conclusionFiles: {
      readonly __id: string;
      readonly nodes: ReadonlyArray<{
        readonly file: {
          readonly " $fragmentSpreads": FragmentRefs<"Files_files">;
        };
      }>;
    };
    readonly rowId: string;
    readonly type: CaseStudyConclusionType;
    readonly " $fragmentSpreads": FragmentRefs<"CaseStudyConclusionManage_conclusion">;
  };
};
export type ClientsCaseStudiesConclusionDetailsPageQuery = {
  response: ClientsCaseStudiesConclusionDetailsPageQuery$data;
  variables: ClientsCaseStudiesConclusionDetailsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "caseStudyRowId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "conclusionRowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "caseStudyRowId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "conclusionRowId"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "caseStudyRowId",
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "concludedAt",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "CREATED_AT_DESC"
  }
],
v9 = {
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
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsCaseStudiesConclusionDetailsPageQuery",
    "selections": [
      {
        "alias": "caseStudy",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
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
                (v2/*: any*/)
              ],
              "storageKey": null
            },
            "action": "THROW",
            "path": "caseStudy.client"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CaseStudyConclusionManage_caseStudy"
          }
        ],
        "storageKey": null
      },
      {
        "kind": "RequiredField",
        "field": {
          "alias": "conclusion",
          "args": (v3/*: any*/),
          "concreteType": "CaseStudyConclusion",
          "kind": "LinkedField",
          "name": "caseStudyConclusionByRowId",
          "plural": false,
          "selections": [
            (v4/*: any*/),
            (v5/*: any*/),
            (v6/*: any*/),
            (v7/*: any*/),
            {
              "alias": "conclusionFiles",
              "args": (v8/*: any*/),
              "concreteType": "CaseStudyConclusionFilesConnection",
              "kind": "LinkedField",
              "name": "caseStudyConclusionFilesByCaseStudyConclusionRowId",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "CaseStudyConclusionFile",
                  "kind": "LinkedField",
                  "name": "nodes",
                  "plural": true,
                  "selections": [
                    {
                      "kind": "RequiredField",
                      "field": {
                        "alias": "file",
                        "args": null,
                        "concreteType": "File",
                        "kind": "LinkedField",
                        "name": "fileByFileRowId",
                        "plural": false,
                        "selections": [
                          {
                            "args": null,
                            "kind": "FragmentSpread",
                            "name": "Files_files"
                          }
                        ],
                        "storageKey": null
                      },
                      "action": "THROW",
                      "path": "conclusion.conclusionFiles.nodes.file"
                    }
                  ],
                  "storageKey": null
                },
                (v9/*: any*/)
              ],
              "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:\"CREATED_AT_DESC\")"
            },
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "CaseStudyConclusionManage_conclusion"
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "conclusion"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientsCaseStudiesConclusionDetailsPageQuery",
    "selections": [
      {
        "alias": "caseStudy",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudy",
        "kind": "LinkedField",
        "name": "caseStudyByRowId",
        "plural": false,
        "selections": [
          {
            "alias": "client",
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "clientByClientRowId",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v10/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          (v10/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "conclusion",
        "args": (v3/*: any*/),
        "concreteType": "CaseStudyConclusion",
        "kind": "LinkedField",
        "name": "caseStudyConclusionByRowId",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": "conclusionFiles",
            "args": (v8/*: any*/),
            "concreteType": "CaseStudyConclusionFilesConnection",
            "kind": "LinkedField",
            "name": "caseStudyConclusionFilesByCaseStudyConclusionRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseStudyConclusionFile",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": "file",
                    "args": null,
                    "concreteType": "File",
                    "kind": "LinkedField",
                    "name": "fileByFileRowId",
                    "plural": false,
                    "selections": [
                      (v10/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "link",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "protected",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      },
                      {
                        "alias": "createdBy",
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "userByCreatedBy",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v2/*: any*/),
                          {
                            "alias": "therapist",
                            "args": null,
                            "concreteType": "Therapist",
                            "kind": "LinkedField",
                            "name": "therapistByUserRowId",
                            "plural": false,
                            "selections": [
                              (v4/*: any*/),
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v10/*: any*/)
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
              (v9/*: any*/)
            ],
            "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:\"CREATED_AT_DESC\")"
          },
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
          (v10/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "23bae30fa1ab083862f1f5c0890edba1",
    "id": null,
    "metadata": {},
    "name": "ClientsCaseStudiesConclusionDetailsPageQuery",
    "operationKind": "query",
    "text": "query ClientsCaseStudiesConclusionDetailsPageQuery(\n  $caseStudyRowId: UUID!\n  $conclusionRowId: UUID!\n) {\n  caseStudy: caseStudyByRowId(rowId: $caseStudyRowId) {\n    client: clientByClientRowId {\n      fullName\n      id\n    }\n    ...CaseStudyConclusionManage_caseStudy\n    id\n  }\n  conclusion: caseStudyConclusionByRowId(rowId: $conclusionRowId) {\n    rowId\n    caseStudyRowId\n    type\n    concludedAt\n    conclusionFiles: caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: CREATED_AT_DESC) {\n      nodes {\n        file: fileByFileRowId {\n          ...Files_files\n          id\n        }\n        id\n      }\n    }\n    ...CaseStudyConclusionManage_conclusion\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_caseStudy on CaseStudy {\n  rowId\n  title\n  client: clientByClientRowId {\n    rowId\n    fullName\n    id\n  }\n}\n\nfragment CaseStudyConclusionManage_conclusion on CaseStudyConclusion {\n  rowId\n  type\n  privateDescription\n  description\n  concludedAt\n}\n\nfragment Files_files on File {\n  id\n  rowId\n  link\n  name\n  protected\n  createdAt\n  createdBy: userByCreatedBy {\n    rowId\n    fullName\n    therapist: therapistByUserRowId {\n      rowId\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "c1ebd47bbdeae605d0f78a74fd524473";
}

export default node;
