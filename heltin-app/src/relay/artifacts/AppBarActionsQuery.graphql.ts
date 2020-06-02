/* tslint:disable */
/* eslint-disable */

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
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppBarActionsQuery",
    "selections": (v0/*: any*/),
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppBarActionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppBarActionsQuery",
    "operationKind": "query",
    "text": "query AppBarActionsQuery {\n  viewer {\n    id\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = '44185b9e066126b273efa8f5bb0f3bb4';
export default node;
