/* tslint:disable */
/* eslint-disable */
/* @relayHash d043b5ed684ef70796a41154b9b30672 */

import { ConcreteRequest } from "relay-runtime";
export type ExampleQueryVariables = {
    rowId: string;
};
export type ExampleQueryResponse = {
    readonly client: {
        readonly id: string;
        readonly fullName: string;
    } | null;
};
export type ExampleQuery = {
    readonly response: ExampleQueryResponse;
    readonly variables: ExampleQueryVariables;
};



/*
query ExampleQuery(
  $rowId: UUID!
) {
  client: clientByRowId(rowId: $rowId) {
    id
    fullName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "rowId",
    "type": "UUID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": "client",
    "name": "clientByRowId",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "rowId",
        "variableName": "rowId"
      }
    ],
    "concreteType": "Client",
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
        "name": "fullName",
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
    "name": "ExampleQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ExampleQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ExampleQuery",
    "id": null,
    "text": "query ExampleQuery(\n  $rowId: UUID!\n) {\n  client: clientByRowId(rowId: $rowId) {\n    id\n    fullName\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '17b96452a4f942f756f68655757d1cdc';
export default node;
