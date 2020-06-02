/* tslint:disable */
/* eslint-disable */

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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteFileInput!"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteFilePayload",
    "kind": "LinkedField",
    "name": "deleteFile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteFileMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteFileMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteFileMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteFileMutation(\n  $input: DeleteFileInput!\n) {\n  deleteFile(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c32b6824da803898b7a45de4f5d8ded0';
export default node;
