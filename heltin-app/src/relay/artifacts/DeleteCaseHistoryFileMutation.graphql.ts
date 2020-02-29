/* tslint:disable */
/* eslint-disable */
/* @relayHash 50d0728a2064d121fd2c06c9bfd88b9f */

import { ConcreteRequest } from "relay-runtime";
export type DeleteCaseHistoryFileInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type DeleteCaseHistoryFileMutationVariables = {
    input: DeleteCaseHistoryFileInput;
};
export type DeleteCaseHistoryFileMutationResponse = {
    readonly deleteCaseHistoryFile: {
        readonly caseHistoryByCaseHistoryRowId: {
            readonly caseHistoryFilesByCaseHistoryRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly id: string;
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
          id
        }
      }
      id
    }
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "caseHistoryFilesByCaseHistoryRowId",
  "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])",
  "args": [
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": [
        "CREATED_AT_ASC"
      ]
    }
  ],
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
        (v2/*: any*/)
      ]
    }
  ]
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
              (v3/*: any*/)
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
              (v3/*: any*/),
              (v2/*: any*/)
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
    "text": "mutation DeleteCaseHistoryFileMutation(\n  $input: DeleteCaseHistoryFileInput!\n) {\n  deleteCaseHistoryFile(input: $input) {\n    caseHistoryByCaseHistoryRowId {\n      caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c7eeb987e038b672e36102ed28e883cb';
export default node;
