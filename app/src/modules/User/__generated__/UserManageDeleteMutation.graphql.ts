/**
 * @generated SignedSource<<59c92738028a93593520b28a9d510967>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteUserInput = {
  clientMutationId?: string | null | undefined;
  rowId: string;
};
export type UserManageDeleteMutation$variables = {
  input: DeleteUserInput;
};
export type UserManageDeleteMutation$data = {
  readonly deleteUser: {
    readonly user: {
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type UserManageDeleteMutation = {
  response: UserManageDeleteMutation$data;
  variables: UserManageDeleteMutation$variables;
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteUserPayload",
    "kind": "LinkedField",
    "name": "deleteUser",
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
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserManageDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserManageDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "b646d027b52c31f6f92409e11f5ecbd0",
    "id": null,
    "metadata": {},
    "name": "UserManageDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation UserManageDeleteMutation(\n  $input: DeleteUserInput!\n) {\n  deleteUser(input: $input) {\n    user {\n      id\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "1402764b8d45c19326653af3f38d97ca";
}

export default node;
