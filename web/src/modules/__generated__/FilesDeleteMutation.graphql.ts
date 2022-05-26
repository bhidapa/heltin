/**
 * @generated SignedSource<<9309c056808bc48c1ba23e4eb4a8fcad>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteFileInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type FilesDeleteMutation$variables = {
  input: DeleteFileInput;
};
export type FilesDeleteMutation$data = {
  readonly deleteFile: {
    readonly file: {
      readonly id: string;
    } | null;
  } | null;
};
export type FilesDeleteMutation = {
  variables: FilesDeleteMutation$variables;
  response: FilesDeleteMutation$data;
};

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
        "concreteType": "File",
        "kind": "LinkedField",
        "name": "file",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
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
    "name": "FilesDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FilesDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6e4770020e0ffd3362ebe69cddd1b2db",
    "id": null,
    "metadata": {},
    "name": "FilesDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation FilesDeleteMutation(\n  $input: DeleteFileInput!\n) {\n  deleteFile(input: $input) {\n    file {\n      id\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "affb3725e99d9f73cd33e05c4e9c4e27";
}

export default node;
