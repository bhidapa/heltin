/* tslint:disable */
/* @relayHash 78d6c891441cd0b9198fcdc90efe6a0b */

import { ConcreteRequest } from "relay-runtime";
export type sessionLookupQueryVariables = {};
export type sessionLookupQueryResponse = {
    readonly __typename: string;
    readonly session: {
        readonly token: string;
        readonly expiresAt: number;
    } | null;
};
export type sessionLookupQuery = {
    readonly response: sessionLookupQueryResponse;
    readonly variables: sessionLookupQueryVariables;
};



/*
query sessionLookupQuery {
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
    "name": "sessionLookupQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "sessionLookupQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "sessionLookupQuery",
    "id": null,
    "text": "query sessionLookupQuery {\n  __typename\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '6eb494cbfeb42336ea7aa6fd9b701f59';
export default node;
