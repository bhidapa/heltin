/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "nextAvailableClientNumber",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientCreateQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientCreateQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1bd2adfe5d06853efc3156b5e56ea525",
    "id": null,
    "metadata": {},
    "name": "ClientCreateQuery",
    "operationKind": "query",
    "text": "query ClientCreateQuery {\n  nextAvailableClientNumber\n}\n"
  }
};
})();
(node as any).hash = 'cca5150ee9d2a563be4e9024ec413f53';
export default node;
