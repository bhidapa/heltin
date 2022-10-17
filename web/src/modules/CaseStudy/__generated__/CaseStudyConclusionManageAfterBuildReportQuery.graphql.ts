/**
 * @generated SignedSource<<33b8192b9a1c5a893fc253fd1585301d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionManageAfterBuildReportQuery$variables = {
  conclusionRowId: string;
};
export type CaseStudyConclusionManageAfterBuildReportQuery$data = {
  readonly caseStudyConclusionByRowId: {
    readonly caseStudyConclusionFilesByCaseStudyConclusionRowId: {
      readonly __id: string;
      readonly nodes: ReadonlyArray<{
        readonly file: {
          readonly " $fragmentSpreads": FragmentRefs<"Files_files">;
        };
      }>;
    };
  } | null;
};
export type CaseStudyConclusionManageAfterBuildReportQuery = {
  response: CaseStudyConclusionManageAfterBuildReportQuery$data;
  variables: CaseStudyConclusionManageAfterBuildReportQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
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
    "variableName": "conclusionRowId"
  }
],
v2 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "CREATED_AT_DESC"
  }
],
v3 = {
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyConclusionManageAfterBuildReportQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyConclusion",
        "kind": "LinkedField",
        "name": "caseStudyConclusionByRowId",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
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
                    "path": "caseStudyConclusionByRowId.caseStudyConclusionFilesByCaseStudyConclusionRowId.nodes.file"
                  }
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:\"CREATED_AT_DESC\")"
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
    "name": "CaseStudyConclusionManageAfterBuildReportQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyConclusion",
        "kind": "LinkedField",
        "name": "caseStudyConclusionByRowId",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
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
                      (v4/*: any*/),
                      (v5/*: any*/),
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
                          (v5/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fullName",
                            "storageKey": null
                          },
                          {
                            "alias": "therapist",
                            "args": null,
                            "concreteType": "Therapist",
                            "kind": "LinkedField",
                            "name": "therapistByUserRowId",
                            "plural": false,
                            "selections": [
                              (v5/*: any*/),
                              (v4/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:\"CREATED_AT_DESC\")"
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f6462df0fe51566e8b09776a8efb07d9",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageAfterBuildReportQuery",
    "operationKind": "query",
    "text": "query CaseStudyConclusionManageAfterBuildReportQuery(\n  $conclusionRowId: UUID!\n) {\n  caseStudyConclusionByRowId(rowId: $conclusionRowId) {\n    caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: CREATED_AT_DESC) {\n      nodes {\n        file: fileByFileRowId {\n          ...Files_files\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment Files_files on File {\n  id\n  rowId\n  link\n  name\n  protected\n  createdAt\n  createdBy: userByCreatedBy {\n    rowId\n    fullName\n    therapist: therapistByUserRowId {\n      rowId\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "80df3232ba97eee8ef4729031eb8be76";
}

export default node;
