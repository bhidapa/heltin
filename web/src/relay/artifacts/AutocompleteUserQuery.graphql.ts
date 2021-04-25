/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AutocompleteUserQueryVariables = {
    searchText?: string | null;
};
export type AutocompleteUserQueryResponse = {
    readonly filterUsers: {
        readonly nodes: ReadonlyArray<{
            readonly id: string;
            readonly rowId: string;
            readonly email: string;
        }>;
    };
};
export type AutocompleteUserQuery = {
    readonly response: AutocompleteUserQueryResponse;
    readonly variables: AutocompleteUserQueryVariables;
};



/*
query AutocompleteUserQuery(
  $searchText: String
) {
  filterUsers(searchText: $searchText) {
    nodes {
      id
      rowId
      email
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "searchText"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "searchText",
        "variableName": "searchText"
      }
    ],
    "concreteType": "UsersConnection",
    "kind": "LinkedField",
    "name": "filterUsers",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "nodes",
        "plural": true,
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
            "name": "rowId",
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AutocompleteUserQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AutocompleteUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "64f4d342355a96ae8fcd19478d7053a3",
    "id": null,
    "metadata": {},
    "name": "AutocompleteUserQuery",
    "operationKind": "query",
    "text": "query AutocompleteUserQuery(\n  $searchText: String\n) {\n  filterUsers(searchText: $searchText) {\n    nodes {\n      id\n      rowId\n      email\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'bdc617d0f04ec3d3944917747af309ea';
export default node;
