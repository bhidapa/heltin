/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CreateCaseHistoryFileInput = {
    caseHistoryRowId: string;
    clientMutationId?: string | null;
    fileData: string;
    fileName: string;
};
export type CreateCaseHistoryFileMutationVariables = {
    input: CreateCaseHistoryFileInput;
};
export type CreateCaseHistoryFileMutationResponse = {
    readonly createCaseHistoryFile: {
        readonly caseHistoryByCaseHistoryRowId: {
            readonly caseHistoryFilesByCaseHistoryRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"CaseHistoryFilesManage_caseHistoryFiles">;
                }>;
            };
        };
    } | null;
};
export type CreateCaseHistoryFileMutation = {
    readonly response: CreateCaseHistoryFileMutationResponse;
    readonly variables: CreateCaseHistoryFileMutationVariables;
};



/*
mutation CreateCaseHistoryFileMutation(
  $input: CreateCaseHistoryFileInput!
) {
  createCaseHistoryFile(input: $input) {
    caseHistoryByCaseHistoryRowId {
      caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          ...CaseHistoryFilesManage_caseHistoryFiles
          id
        }
      }
      id
    }
  }
}

fragment CaseHistoryFilesManage_caseHistoryFiles on CaseHistoryFile {
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
    "name": "input",
    "type": "CreateCaseHistoryFileInput!"
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
    "name": "CreateCaseHistoryFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseHistoryFilePayload",
        "kind": "LinkedField",
        "name": "createCaseHistoryFile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseHistory",
            "kind": "LinkedField",
            "name": "caseHistoryByCaseHistoryRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "CaseHistoryFilesConnection",
                "kind": "LinkedField",
                "name": "caseHistoryFilesByCaseHistoryRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CaseHistoryFile",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CaseHistoryFilesManage_caseHistoryFiles"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CreateCaseHistoryFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseHistoryFilePayload",
        "kind": "LinkedField",
        "name": "createCaseHistoryFile",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseHistory",
            "kind": "LinkedField",
            "name": "caseHistoryByCaseHistoryRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": (v2/*: any*/),
                "concreteType": "CaseHistoryFilesConnection",
                "kind": "LinkedField",
                "name": "caseHistoryFilesByCaseHistoryRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CaseHistoryFile",
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
                "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "id": null,
    "metadata": {},
    "name": "CreateCaseHistoryFileMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCaseHistoryFileMutation(\n  $input: CreateCaseHistoryFileInput!\n) {\n  createCaseHistoryFile(input: $input) {\n    caseHistoryByCaseHistoryRowId {\n      caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseHistoryFilesManage_caseHistoryFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseHistoryFilesManage_caseHistoryFiles on CaseHistoryFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e886354db494b2308a2888bd31fe2ac5';
export default node;
