/**
 * @generated SignedSource<<c87181a44011b0896b9d29f2d09b5061>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type ClientsCreatePageQuery$variables = {};
export type ClientsCreatePageQuery$data = {
  readonly nextAvailableClientNumber: number;
};
export type ClientsCreatePageQuery = {
  response: ClientsCreatePageQuery$data;
  variables: ClientsCreatePageQuery$variables;
};

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
    "name": "ClientsCreatePageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ClientsCreatePageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "044760a705f8a168a567048b09c44026",
    "id": null,
    "metadata": {},
    "name": "ClientsCreatePageQuery",
    "operationKind": "query",
    "text": "query ClientsCreatePageQuery {\n  nextAvailableClientNumber\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "99281c6832ec801956d0a4163e496508";
}

export default node;
