/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LoginInput = {
    email: string;
    password: string;
};
export type LoginPageMutationVariables = {
    input: LoginInput;
};
export type LoginPageMutationResponse = {
    readonly login: {
        readonly user: {
            readonly " $fragmentRefs": FragmentRefs<"Root_viewer">;
        };
    } | null;
};
export type LoginPageMutation = {
    readonly response: LoginPageMutationResponse;
    readonly variables: LoginPageMutationVariables;
};



/*
mutation LoginPageMutation(
  $input: LoginInput!
) {
  login(input: $input) {
    user {
      ...Root_viewer
      id
    }
  }
}

fragment AppBarActions_viewer on User {
  id
  email
}

fragment AppBar_viewer on User {
  isAdmin
  ...AppBarActions_viewer
}

fragment Root_viewer on User {
  ...AppBar_viewer
}
*/

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
                "name": "isAdmin",
                "storageKey": null
              },
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "be89de557979eea24b5d8e899c105266",
    "id": null,
    "metadata": {},
    "name": "LoginPageMutation",
    "operationKind": "mutation",
    "text": "mutation LoginPageMutation(\n  $input: LoginInput!\n) {\n  login(input: $input) {\n    user {\n      ...Root_viewer\n      id\n    }\n  }\n}\n\nfragment AppBarActions_viewer on User {\n  id\n  email\n}\n\nfragment AppBar_viewer on User {\n  isAdmin\n  ...AppBarActions_viewer\n}\n\nfragment Root_viewer on User {\n  ...AppBar_viewer\n}\n"
  }
};
})();
(node as any).hash = '442f28e0314a47b60f56d6e642637bc8';
export default node;
