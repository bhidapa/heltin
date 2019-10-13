/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type ClientSentBy = "CLINIC" | "COURT" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "PEDIATRICIAN" | "POLICE" | "PSYCHIATRIST" | "REFERAL" | "SCHOOL" | "SELF_INITIATIVE" | "SOCIAL_WORK_CENTER";
export type Gender = "FEMALE" | "MALE";
export type UpdateClientInput = {
    readonly address: string;
    readonly city: string;
    readonly clientMutationId?: string | null;
    readonly dateOfBirth: unknown;
    readonly discrete?: boolean | null;
    readonly email?: string | null;
    readonly firstName: string;
    readonly gender: Gender;
    readonly lastName: string;
    readonly number: number;
    readonly rowId: string;
    readonly sentBy: ClientSentBy;
    readonly telephone: string;
};
export type UpdateClientMutationVariables = {
    input: UpdateClientInput;
};
export type UpdateClientMutationResponse = {
    readonly updateClient: {
        readonly client: {
            readonly rowId: string;
            readonly fullName: string;
            readonly number: number;
            readonly firstName: string;
            readonly lastName: string;
            readonly dateOfBirth: unknown;
            readonly telephone: string;
            readonly gender: Gender;
            readonly city: string;
            readonly address: string;
            readonly sentBy: ClientSentBy;
            readonly email: string | null;
            readonly discrete: boolean;
        } | null;
    } | null;
};
export type UpdateClientMutation = {
    readonly response: UpdateClientMutationResponse;
    readonly variables: UpdateClientMutationVariables;
};



/*
mutation UpdateClientMutation(
  $input: UpdateClientInput!
) {
  updateClient(input: $input) {
    client {
      rowId
      fullName
      number
      firstName
      lastName
      dateOfBirth
      telephone
      gender
      city
      address
      sentBy
      email
      discrete
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateClientInput!",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "number",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dateOfBirth",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "telephone",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "gender",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "city",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "address",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "sentBy",
  "args": null,
  "storageKey": null
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "discrete",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateClientMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateClient",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateClientPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "client",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateClientMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateClient",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateClientPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "client",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/),
              (v14/*: any*/),
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateClientMutation",
    "id": null,
    "text": "mutation UpdateClientMutation(\n  $input: UpdateClientInput!\n) {\n  updateClient(input: $input) {\n    client {\n      rowId\n      fullName\n      number\n      firstName\n      lastName\n      dateOfBirth\n      telephone\n      gender\n      city\n      address\n      sentBy\n      email\n      discrete\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '6fa3cc3523b8e530f2194f5e73c509ea';
export default node;
