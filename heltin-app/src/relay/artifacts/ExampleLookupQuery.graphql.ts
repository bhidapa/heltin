/* tslint:disable */
/* eslint-disable */
/* @relayHash f590a52d561bf23345d9b9225869313a */

import { ConcreteRequest } from "relay-runtime";
export type ExampleLookupQueryVariables = {
    id: string;
};
export type ExampleLookupQueryResponse = {
    readonly node: {
        readonly fullName?: string;
    } | null;
    readonly client: {
        readonly fullName: string;
    } | null;
};
export type ExampleLookupQuery = {
    readonly response: ExampleLookupQueryResponse;
    readonly variables: ExampleLookupQueryVariables;
};



/*
query ExampleLookupQuery(
  $id: ID!
) {
  node(id: $id) {
    __typename
    ... on Client {
      fullName
    }
    id
  }
  client(id: $id) {
    fullName
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
},
v3 = [
  (v2/*: any*/)
],
v4 = {
  "kind": "InlineFragment",
  "type": "Client",
  "selections": (v3/*: any*/)
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ExampleLookupQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v4/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "client",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "plural": false,
        "selections": (v3/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ExampleLookupQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          (v5/*: any*/),
          (v4/*: any*/)
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "client",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Client",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v5/*: any*/)
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ExampleLookupQuery",
    "id": null,
    "text": "query ExampleLookupQuery(\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ... on Client {\n      fullName\n    }\n    id\n  }\n  client(id: $id) {\n    fullName\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'daed9274f3507a1eb90402c64a75d411';
export default node;
