/**
 * @generated SignedSource<<97b699406c128368afbc3bdf4becd7df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateUserInput = {
  admin: boolean;
  clientMutationId?: string | null;
  email: string;
  enabled: boolean;
  password: string;
  rowId?: string | null;
};
export type UserManageCreateMutation$variables = {
  input: CreateUserInput;
};
export type UserManageCreateMutation$data = {
  readonly createUser: {
    readonly user: {
      readonly rowId: string;
    } | null;
    readonly userEdge: {
      readonly node: {
        readonly rowId: string;
        readonly " $fragmentSpreads": FragmentRefs<"UserManage_user" | "UsersTable_user">;
      };
    } | null;
  } | null;
};
export type UserManageCreateMutation = {
  response: UserManageCreateMutation$data;
  variables: UserManageCreateMutation$variables;
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
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateUserPayload",
        "kind": "LinkedField",
        "name": "createUser",
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
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UsersEdge",
            "kind": "LinkedField",
            "name": "userEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "UserManage_user"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "UsersTable_user"
                  }
                ],
                "storageKey": null
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
    "name": "UserManageCreateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateUserPayload",
        "kind": "LinkedField",
        "name": "createUser",
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
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UsersEdge",
            "kind": "LinkedField",
            "name": "userEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "User",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "enabled",
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
                    "name": "canViewerUpdate",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "canViewerDelete",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "updatedAt",
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
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
    "cacheID": "74aac885e3296eabe1481eeed63671f9",
    "id": null,
    "metadata": {},
    "name": "UserManageCreateMutation",
    "operationKind": "mutation",
    "text": "mutation UserManageCreateMutation(\n  $input: CreateUserInput!\n) {\n  createUser(input: $input) {\n    user {\n      rowId\n      id\n    }\n    userEdge {\n      node {\n        rowId\n        ...UserManage_user\n        ...UsersTable_user\n        id\n      }\n    }\n  }\n}\n\nfragment UserManage_user on User {\n  rowId\n  enabled\n  email\n  isAdmin\n  canViewerUpdate\n  canViewerDelete\n  updatedAt\n}\n\nfragment UsersTable_user on User {\n  rowId\n  isAdmin\n  email\n  enabled\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "9239295f27abcfd66ef13005ee53f7d2";
}

export default node;
