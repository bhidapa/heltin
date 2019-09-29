/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AppBarActionsQueryVariables = {};
export type AppBarActionsQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly email: string;
    } | null;
};
export type AppBarActionsQuery = {
    readonly response: AppBarActionsQueryResponse;
    readonly variables: AppBarActionsQueryVariables;
};



/*
query AppBarActionsQuery {
  viewer {
    id
    email
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "email",
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
    "name": "AppBarActionsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AppBarActionsQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AppBarActionsQuery",
    "id": null,
    "text": "query AppBarActionsQuery {\n  viewer {\n    id\n    email\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '44185b9e066126b273efa8f5bb0f3bb4';
export default node;
