/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteClientInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type ClientEditDeleteMutationVariables = {
    input: DeleteClientInput;
};
export type ClientEditDeleteMutationResponse = {
    readonly deleteClient: {
        readonly client: {
            readonly id: string;
        } | null;
    } | null;
};
export type ClientEditDeleteMutation = {
    readonly response: ClientEditDeleteMutationResponse;
    readonly variables: ClientEditDeleteMutationVariables;
};



/*
mutation ClientEditDeleteMutation(
  $input: DeleteClientInput!
) {
  deleteClient(input: $input) {
    client {
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteClientPayload",
    "kind": "LinkedField",
    "name": "deleteClient",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "client",
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
    "name": "ClientEditDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientEditDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c5065d57ac681851597b8e6c32b05c21",
    "id": null,
    "metadata": {},
    "name": "ClientEditDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ClientEditDeleteMutation(\n  $input: DeleteClientInput!\n) {\n  deleteClient(input: $input) {\n    client {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '23fbe43dc56e80336b64b8b64bee3710';
export default node;
