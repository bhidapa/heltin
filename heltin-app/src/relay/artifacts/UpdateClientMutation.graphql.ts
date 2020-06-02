/* tslint:disable */
/* eslint-disable */

import { ConcreteRequest } from "relay-runtime";
export type ClientSentBy = "CLINIC" | "COURT" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "PEDIATRICIAN" | "POLICE" | "PSYCHIATRIST" | "REFERAL" | "SCHOOL" | "SELF_INITIATIVE" | "SOCIAL_WORK_CENTER";
export type Gender = "FEMALE" | "MALE";
export type UpdateClientInput = {
    address: string;
    city: string;
    clientMutationId?: string | null;
    dateOfBirth: string;
    discrete?: boolean | null;
    email?: string | null;
    firstName: string;
    gender: Gender;
    lastName: string;
    number: number;
    rowId: string;
    sentBy: ClientSentBy;
    telephone: string;
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
            readonly dateOfBirth: string;
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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateClientInput!"
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
  "name": "fullName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "number",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfBirth",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "telephone",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gender",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "city",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "address",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sentBy",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "discrete",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateClientMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateClientPayload",
        "kind": "LinkedField",
        "name": "updateClient",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "client",
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
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateClientMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateClientPayload",
        "kind": "LinkedField",
        "name": "updateClient",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Client",
            "kind": "LinkedField",
            "name": "client",
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
    "id": null,
    "metadata": {},
    "name": "UpdateClientMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateClientMutation(\n  $input: UpdateClientInput!\n) {\n  updateClient(input: $input) {\n    client {\n      rowId\n      fullName\n      number\n      firstName\n      lastName\n      dateOfBirth\n      telephone\n      gender\n      city\n      address\n      sentBy\n      email\n      discrete\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '6fa3cc3523b8e530f2194f5e73c509ea';
export default node;
