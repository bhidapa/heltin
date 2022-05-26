/**
 * @generated SignedSource<<1485a33e313010bb549fd3a5a678d379>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LogoutPageMutation$variables = {};
export type LogoutPageMutation$data = {
  readonly logout: boolean;
};
export type LogoutPageMutation = {
  variables: LogoutPageMutation$variables;
  response: LogoutPageMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "logout",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "LogoutPageMutation",
    "selections": (v0/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "LogoutPageMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "cf0505744ccaa7aae98f9a93bbba0acd",
    "id": null,
    "metadata": {},
    "name": "LogoutPageMutation",
    "operationKind": "mutation",
    "text": "mutation LogoutPageMutation {\n  logout\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "59736366b61ccbef49c228e5b0f57fbf";
}

export default node;
