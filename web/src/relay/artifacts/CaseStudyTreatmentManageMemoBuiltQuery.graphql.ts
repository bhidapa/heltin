/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentManageMemoBuiltQueryVariables = {
    treatmentRowId: string;
};
export type CaseStudyTreatmentManageMemoBuiltQueryResponse = {
    readonly caseStudyTreatmentByRowId: {
        readonly caseStudyTreatmentFiles: {
            readonly nodes: ReadonlyArray<{
                readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles">;
            }>;
        };
    } | null;
};
export type CaseStudyTreatmentManageMemoBuiltQuery = {
    readonly response: CaseStudyTreatmentManageMemoBuiltQueryResponse;
    readonly variables: CaseStudyTreatmentManageMemoBuiltQueryVariables;
};



/*
query CaseStudyTreatmentManageMemoBuiltQuery(
  $treatmentRowId: UUID!
) {
  caseStudyTreatmentByRowId(rowId: $treatmentRowId) {
    caseStudyTreatmentFiles: caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {
      nodes {
        ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles
        id
      }
    }
    id
  }
}

fragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile {
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
    "name": "treatmentRowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "treatmentRowId"
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
    "name": "CaseStudyTreatmentManageMemoBuiltQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyTreatment",
        "kind": "LinkedField",
        "name": "caseStudyTreatmentByRowId",
        "plural": false,
        "selections": [
          {
            "alias": "caseStudyTreatmentFiles",
            "args": (v2/*: any*/),
            "concreteType": "CaseStudyTreatmentFilesConnection",
            "kind": "LinkedField",
            "name": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseStudyTreatmentFile",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "name": "CaseStudyTreatmentManageMemoBuiltQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CaseStudyTreatment",
        "kind": "LinkedField",
        "name": "caseStudyTreatmentByRowId",
        "plural": false,
        "selections": [
          {
            "alias": "caseStudyTreatmentFiles",
            "args": (v2/*: any*/),
            "concreteType": "CaseStudyTreatmentFilesConnection",
            "kind": "LinkedField",
            "name": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CaseStudyTreatmentFile",
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
            "storageKey": "caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy:[\"CREATED_AT_ASC\"])"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "aa4d19bc4dfa4ddb070b2e2f3b7a04d6",
    "id": null,
    "metadata": {},
    "name": "CaseStudyTreatmentManageMemoBuiltQuery",
    "operationKind": "query",
    "text": "query CaseStudyTreatmentManageMemoBuiltQuery(\n  $treatmentRowId: UUID!\n) {\n  caseStudyTreatmentByRowId(rowId: $treatmentRowId) {\n    caseStudyTreatmentFiles: caseStudyTreatmentFilesByCaseStudyTreatmentRowId(orderBy: [CREATED_AT_ASC]) {\n      nodes {\n        ...CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyTreatmentFilesManage_caseStudyTreatmentFiles on CaseStudyTreatmentFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    protected\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '8edadd806f879b3ecb4bb1cf512e9f69';
export default node;
