/**
 * @generated SignedSource<<e4425e92b6453be77b4b0ccd171be49d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UsersDetailsPageQuery$variables = {
  rowId: string;
};
export type UsersDetailsPageQuery$data = {
  readonly user: {
    readonly email: string;
    readonly " $fragmentSpreads": FragmentRefs<"UserManage_user">;
  } | null;
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"UserManage_viewer">;
  };
};
export type UsersDetailsPageQuery = {
  response: UsersDetailsPageQuery$data;
  variables: UsersDetailsPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "rowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "rowId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
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
    "name": "UsersDetailsPageQuery",
    "selections": [
      {
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": null,
          "concreteType": "User",
          "kind": "LinkedField",
          "name": "viewer",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "UserManage_viewer"
            }
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "viewer"
      },
      {
        "alias": "user",
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "userByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserManage_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UsersDetailsPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "canInsertUser",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "user",
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "userByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
            "name": "enabled",
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
    ]
  },
  "params": {
    "cacheID": "f7e41bfb40efff6023120a43f9483eec",
    "id": null,
    "metadata": {},
    "name": "UsersDetailsPageQuery",
    "operationKind": "query",
    "text": "query UsersDetailsPageQuery(\n  $rowId: UUID!\n) {\n  viewer {\n    ...UserManage_viewer\n    id\n  }\n  user: userByRowId(rowId: $rowId) {\n    email\n    ...UserManage_user\n    id\n  }\n}\n\nfragment UserManage_user on User {\n  rowId\n  enabled\n  email\n  isAdmin\n  canViewerUpdate\n  canViewerDelete\n  updatedAt\n}\n\nfragment UserManage_viewer on User {\n  canInsertUser\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "3a04225af83c15bea58fd6c4653aeabd";
}

export default node;
