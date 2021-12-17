/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CaseStudyConclusionManageMemoBuiltQueryVariables = {
    conclusionRowId: string;
};
export type CaseStudyConclusionManageMemoBuiltQueryResponse = {
    readonly caseStudyConclusion: {
        readonly caseStudyConclusionFiles: {
            readonly nodes: ReadonlyArray<{
                readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionFilesManage_caseStudyConclusionFiles">;
            }>;
        };
    } | null;
};
export type CaseStudyConclusionManageMemoBuiltQuery = {
    readonly response: CaseStudyConclusionManageMemoBuiltQueryResponse;
    readonly variables: CaseStudyConclusionManageMemoBuiltQueryVariables;
};



/*
query CaseStudyConclusionManageMemoBuiltQuery(
  $conclusionRowId: UUID!
) {
  caseStudyConclusion: caseStudyConclusionByRowId(rowId: $conclusionRowId) {
    caseStudyConclusionFiles: caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {
      nodes {
        ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles
        id
      }
    }
    id
  }
}

fragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {
  id
  rowId
  file: fileByFileRowId {
    rowId
    name
    protected
    id
  }
}
*/

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
    "value": [
      "CREATED_AT_ASC"
    ]
  }
],
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
  "name": "rowId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CaseStudyConclusionManageMemoBuiltQuery",
    "selections": [
      {
        "alias": "caseStudyConclusion",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyConclusion",
        "kind": "LinkedField",
        "name": "caseStudyConclusionByRowId",
        "plural": false,
        "selections": [
          {
            "alias": "caseStudyConclusionFiles",
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
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CaseStudyConclusionFilesManage_caseStudyConclusionFiles"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "name": "CaseStudyConclusionManageMemoBuiltQuery",
    "selections": [
      {
        "alias": "caseStudyConclusion",
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyConclusion",
        "kind": "LinkedField",
        "name": "caseStudyConclusionByRowId",
        "plural": false,
        "selections": [
          {
            "alias": "caseStudyConclusionFiles",
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
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": "file",
                    "args": null,
                    "concreteType": "File",
                    "kind": "LinkedField",
                    "name": "fileByFileRowId",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
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
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy:[\"CREATED_AT_ASC\"])"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "580ae3f9f0e31f776c034cd57b90cb6a",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionManageMemoBuiltQuery",
    "operationKind": "query",
    "text": "query CaseStudyConclusionManageMemoBuiltQuery(\n  $conclusionRowId: UUID!\n) {\n  caseStudyConclusion: caseStudyConclusionByRowId(rowId: $conclusionRowId) {\n    caseStudyConclusionFiles: caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {\n      nodes {\n        ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    protected\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '2caa33f542e3ac1ecabb5efcdc631198';
export default node;
