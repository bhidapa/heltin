/**
 * @generated SignedSource<<31c529f1e092023a902eadd7f2562198>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateUserInput = {
  admin: boolean;
  clientMutationId?: string | null | undefined;
  email: string;
  enabled: boolean;
  password?: string | null | undefined;
  rowId: string;
};
export type UserManageUpdateMutation$variables = {
  input: UpdateUserInput;
};
export type UserManageUpdateMutation$data = {
  readonly updateUser: {
    readonly user: {
      readonly rowId: string;
      readonly " $fragmentSpreads": FragmentRefs<"UserManage_user" | "UsersTable_user">;
    } | null | undefined;
  } | null | undefined;
};
export type UserManageUpdateMutation = {
  response: UserManageUpdateMutation$data;
  variables: UserManageUpdateMutation$variables;
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserPayload",
        "kind": "LinkedField",
        "name": "updateUser",
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserManageUpdateMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateUserPayload",
        "kind": "LinkedField",
        "name": "updateUser",
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
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
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
    "cacheID": "80cbb081424369538fbc0d3a8d581b3f",
    "id": null,
    "metadata": {},
    "name": "UserManageUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation UserManageUpdateMutation(\n  $input: UpdateUserInput!\n) {\n  updateUser(input: $input) {\n    user {\n      rowId\n      ...UserManage_user\n      ...UsersTable_user\n      id\n    }\n  }\n}\n\nfragment UserManage_user on User {\n  rowId\n  enabled\n  email\n  isAdmin\n  canViewerUpdate\n  canViewerDelete\n  updatedAt\n}\n\nfragment UsersTable_user on User {\n  rowId\n  isAdmin\n  email\n  enabled\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "853a94be87c71a77926d75fc3c94b352";
}

export default node;
