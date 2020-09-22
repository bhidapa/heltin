/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
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
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "caseHistoryFilesByCaseHistoryRowId(orderBy:[\"CREATED_AT_ASC\"])"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteCaseHistoryFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseHistoryFilePayload",
        "kind": "LinkedField",
        "name": "deleteCaseHistoryFile",
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
              (v3/*: any*/)
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
    "name": "DeleteCaseHistoryFileMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseHistoryFilePayload",
        "kind": "LinkedField",
        "name": "deleteCaseHistoryFile",
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
              (v3/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b2afbc4be9dc37fb9d2e5d8a18dbe947",
    "id": null,
    "metadata": {},
    "name": "DeleteCaseHistoryFileMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCaseHistoryFileMutation(\n  $input: DeleteCaseHistoryFileInput!\n) {\n  deleteCaseHistoryFile(input: $input) {\n    caseHistoryByCaseHistoryRowId {\n      caseHistoryFilesByCaseHistoryRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c7eeb987e038b672e36102ed28e883cb';
export default node;
