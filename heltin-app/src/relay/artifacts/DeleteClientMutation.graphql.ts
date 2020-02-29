/* tslint:disable */
/* eslint-disable */
/* @relayHash a40823cccb86c02a6ec2c25eda318137 */

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
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteClientInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteClient",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteClientPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "client",
        "storageKey": null,
        "args": null,
        "concreteType": "Client",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteClientMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteClientMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteClientMutation",
    "id": null,
    "text": "mutation DeleteClientMutation(\n  $input: DeleteClientInput!\n) {\n  deleteClient(input: $input) {\n    client {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'd13af78c5c980c7252794cde999ab5d2';
export default node;
