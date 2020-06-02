/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type DeleteClientInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type DeleteClientMutationVariables = {
    input: DeleteClientInput;
};
export type DeleteClientMutationResponse = {
    readonly deleteClient: {
        readonly client: {
            readonly id: string;
        } | null;
    } | null;
};
export type DeleteClientMutation = {
    readonly response: DeleteClientMutationResponse;
    readonly variables: DeleteClientMutationVariables;
};



/*
mutation DeleteClientMutation(
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
    "name": "input",
    "type": "DeleteClientInput!"
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
    "name": "DeleteClientMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteClientMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "DeleteClientMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteClientMutation(\n  $input: DeleteClientInput!\n) {\n  deleteClient(input: $input) {\n    client {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd13af78c5c980c7252794cde999ab5d2';
export default node;
