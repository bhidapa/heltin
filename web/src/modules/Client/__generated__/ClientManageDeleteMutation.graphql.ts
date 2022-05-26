/**
 * @generated SignedSource<<e39d4a8f75111f363a303139af45cbc5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteClientInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type ClientManageDeleteMutation$variables = {
  input: DeleteClientInput;
};
export type ClientManageDeleteMutation$data = {
  readonly deleteClient: {
    readonly client: {
      readonly id: string;
    } | null;
  } | null;
};
export type ClientManageDeleteMutation = {
  variables: ClientManageDeleteMutation$variables;
  response: ClientManageDeleteMutation$data;
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
    "name": "ClientManageDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientManageDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "39755934014e91749b5a642c9ec16dde",
    "id": null,
    "metadata": {},
    "name": "ClientManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ClientManageDeleteMutation(\n  $input: DeleteClientInput!\n) {\n  deleteClient(input: $input) {\n    client {\n      id\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "c870a1cf531e4285a219bad47d40db61";
}

export default node;
