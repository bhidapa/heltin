/**
 * @generated SignedSource<<86e51f97c911afdbf5b0e023bb9cf66c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type LoginInput = {
  email: string;
  password: string;
};
export type LoginPageMutation$variables = {
  input: LoginInput;
};
export type LoginPageMutation$data = {
  readonly login: {
    readonly user: {
      readonly " $fragmentSpreads": FragmentRefs<"Root_viewer">;
    };
  } | null;
};
export type LoginPageMutation = {
  response: LoginPageMutation$data;
  variables: LoginPageMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LoginPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LoginPayload",
        "kind": "LinkedField",
        "name": "login",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Root_viewer"
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginPageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LoginPayload",
        "kind": "LinkedField",
        "name": "login",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "user",
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
                "name": "fullName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "firstName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "email",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isAdmin",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isTherapist",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "96c290768061c15e9e108f5497dde7c1",
    "id": null,
    "metadata": {},
    "name": "LoginPageMutation",
    "operationKind": "mutation",
    "text": "mutation LoginPageMutation(\n  $input: LoginInput!\n) {\n  login(input: $input) {\n    user {\n      ...Root_viewer\n      id\n    }\n  }\n}\n\nfragment Root_viewer on User {\n  id\n  fullName\n  firstName\n  email\n  isAdmin\n  ...routes_viewer\n}\n\nfragment routes_viewer on User {\n  isAdmin\n  isTherapist\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "442f28e0314a47b60f56d6e642637bc8";
}

export default node;
