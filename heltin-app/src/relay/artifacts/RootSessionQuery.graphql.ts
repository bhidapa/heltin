/* tslint:disable */
/* @relayHash 9940ef560f94310ae3acfe6bb5361acc */

import { ConcreteRequest } from "relay-runtime";
export type RootSessionQueryVariables = {};
export type RootSessionQueryResponse = {
    readonly __typename: string;
    readonly session: {
        readonly token: string;
        readonly expiresAt: number;
    } | null;
};
export type RootSessionQuery = {
    readonly response: RootSessionQueryResponse;
    readonly variables: RootSessionQueryVariables;
};



/*
query RootSessionQuery {
  __typename
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "ClientExtension",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "session",
        "storageKey": null,
        "args": null,
        "concreteType": "Session",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "token",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "expiresAt",
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
    "name": "RootSessionQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "RootSessionQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "RootSessionQuery",
    "id": null,
    "text": "query RootSessionQuery {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'b3463fe1675ec026f31ca97405698b72';
export default node;
