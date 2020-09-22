/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateCaseStudyConclusionFileInput = {
    caseStudyConclusionRowId: string;
    clientMutationId?: string | null;
    fileData: string;
    fileName: string;
};
export type CaseStudyConclusionFilesManageCreateMutationVariables = {
    input: CreateCaseStudyConclusionFileInput;
};
export type CaseStudyConclusionFilesManageCreateMutationResponse = {
    readonly createCaseStudyConclusionFile: {
        readonly caseStudyConclusionByCaseStudyConclusionRowId: {
            readonly caseStudyConclusionFilesByCaseStudyConclusionRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"CaseStudyConclusionFilesManage_caseStudyConclusionFiles">;
                }>;
            };
        };
    } | null;
};
export type CaseStudyConclusionFilesManageCreateMutation = {
    readonly response: CaseStudyConclusionFilesManageCreateMutationResponse;
    readonly variables: CaseStudyConclusionFilesManageCreateMutationVariables;
};



/*
mutation CaseStudyConclusionFilesManageCreateMutation(
  $input: CreateCaseStudyConclusionFileInput!
) {
  createCaseStudyConclusionFile(input: $input) {
    caseStudyConclusionByCaseStudyConclusionRowId {
      caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles
          id
        }
      }
      id
    }
  }
}

fragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {
  id
  rowId
  file: fileByFileRowId {
    rowId
    name
    id
  }
}
*/

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
    "name": "CaseStudyConclusionFilesManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionFilePayload",
        "kind": "LinkedField",
        "name": "createCaseStudyConclusionFile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusionByCaseStudyConclusionRowId",
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
    "name": "CaseStudyConclusionFilesManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyConclusionFilePayload",
        "kind": "LinkedField",
        "name": "createCaseStudyConclusionFile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudyConclusion",
            "kind": "LinkedField",
            "name": "caseStudyConclusionByCaseStudyConclusionRowId",
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7514c401ccfafacbe885988662872ace",
    "id": null,
    "metadata": {},
    "name": "CaseStudyConclusionFilesManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation CaseStudyConclusionFilesManageCreateMutation(\n  $input: CreateCaseStudyConclusionFileInput!\n) {\n  createCaseStudyConclusionFile(input: $input) {\n    caseStudyConclusionByCaseStudyConclusionRowId {\n      caseStudyConclusionFilesByCaseStudyConclusionRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseStudyConclusionFilesManage_caseStudyConclusionFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudyConclusionFilesManage_caseStudyConclusionFiles on CaseStudyConclusionFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '12f2604565368fc6ceb48554b12dce8b';
export default node;
