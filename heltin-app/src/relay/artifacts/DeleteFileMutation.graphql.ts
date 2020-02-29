/* tslint:disable */
/* eslint-disable */
/* @relayHash 9b3de70322e82f1d4193a4beeb44a6c5 */

import { ConcreteRequest } from "relay-runtime";
export type DeleteFileInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type DeleteFileMutationVariables = {
    input: DeleteFileInput;
};
export type DeleteFileMutationResponse = {
    readonly deleteFile: {
        readonly clientMutationId: string | null;
    } | null;
};
export type DeleteFileMutation = {
    readonly response: DeleteFileMutationResponse;
    readonly variables: DeleteFileMutationVariables;
};



/*
mutation DeleteFileMutation(
  $input: DeleteFileInput!
) {
  deleteFile(input: $input) {
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteFileInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteFile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteFilePayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteFileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteFileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteFileMutation",
    "id": null,
    "text": "mutation DeleteFileMutation(\n  $input: DeleteFileInput!\n) {\n  deleteFile(input: $input) {\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c32b6824da803898b7a45de4f5d8ded0';
export default node;
