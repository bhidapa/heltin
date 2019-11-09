/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ClientCreateQueryVariables = {};
export type ClientCreateQueryResponse = {
    readonly nextAvailableClientNumber: number;
};
export type ClientCreateQuery = {
    readonly response: ClientCreateQueryResponse;
    readonly variables: ClientCreateQueryVariables;
};



/*
query ClientCreateQuery {
  nextAvailableClientNumber
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "nextAvailableClientNumber",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ClientCreateQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "ClientCreateQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "ClientCreateQuery",
    "id": null,
    "text": "query ClientCreateQuery {\n  nextAvailableClientNumber\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'cca5150ee9d2a563be4e9024ec413f53';
export default node;
