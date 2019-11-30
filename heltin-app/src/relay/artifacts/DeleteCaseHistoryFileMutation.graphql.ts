/* tslint:disable */
/* @relayHash cf8749fb52394d1b077dd4bb27ceb0f0 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DeleteCaseHistoryFileInput = {
    readonly clientMutationId?: string | null;
    readonly rowId: string;
};
export type DeleteCaseHistoryFileMutationVariables = {
    input: DeleteCaseHistoryFileInput;
};
export type DeleteCaseHistoryFileMutationResponse = {
    readonly deleteCaseHistoryFile: {
        readonly caseHistoryByCaseHistoryRowId: {
            readonly caseHistoryFilesByCaseHistoryRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly " $fragmentRefs": FragmentRefs<"CaseHistoryFilesManage_caseHistoryFiles">;
                }>;
            };
        };
    } | null;
};
export type DeleteCaseHistoryFileMutation = {
    readonly response: DeleteCaseHistoryFileMutationResponse;
    readonly variables: DeleteCaseHistoryFileMutationVariables;
};



/*
mutation DeleteCaseHistoryFileMutation(
  $input: DeleteCaseHistoryFileInput!
) {
  deleteCaseHistoryFile(input: $input) {
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
    data
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCaseHistoryFileInput!",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCaseHistoryFileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseHistoryFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseHistoryFilePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseHistoryByCaseHistoryRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseHistory",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseHistoryFilesByCaseHistoryRowId",
                "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
                "concreteType": "CaseHistoryFilesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseHistoryFile",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "FragmentSpread",
                        "name": "CaseHistoryFilesManage_caseHistoryFiles",
                        "args": null
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCaseHistoryFileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseHistoryFile",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseHistoryFilePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseHistoryByCaseHistoryRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseHistory",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseHistoryFilesByCaseHistoryRowId",
                "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
                "concreteType": "CaseHistoryFilesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseHistoryFile",
                    "plural": true,
                    "selections": [
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": "file",
                        "name": "fileByFileRowId",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "File",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "data",
                            "args": null,
                            "storageKey": null
                          },
                          (v3/*: any*/)
                        ]
                      }
                    ]
                  }
                ]
              },
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCaseHistoryFileMutation",
    "id": null,
    "text": "mutation DeleteCaseHistoryFileMutation(\n  $input: DeleteCaseHistoryFileInput!\n) {\n  deleteCaseHistoryFile(input: $input) {\n    caseHistoryByCaseHistoryRowId {\n      caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          ...CaseHistoryFilesManage_caseHistoryFiles\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseHistoryFilesManage_caseHistoryFiles on CaseHistoryFile {\n  id\n  rowId\n  file: fileByFileRowId {\n    rowId\n    name\n    data\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f21a65025942fa6a12deae40d86506a7';
export default node;
