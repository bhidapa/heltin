/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
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
export type ClientEditUpdateMutationVariables = {
    input: UpdateClientInput;
};
export type ClientEditUpdateMutationResponse = {
    readonly updateClient: {
        readonly client: {
            readonly " $fragmentRefs": FragmentRefs<"ClientEdit_client">;
        } | null;
    } | null;
};
export type ClientEditUpdateMutation = {
    readonly response: ClientEditUpdateMutationResponse;
    readonly variables: ClientEditUpdateMutationVariables;
};



/*
mutation ClientEditUpdateMutation(
  $input: UpdateClientInput!
) {
  updateClient(input: $input) {
    client {
      ...ClientEdit_client
      id
    }
  }
}

fragment ClientEdit_client on Client {
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
    "name": "ClientEditUpdateMutation",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ClientEdit_client"
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
    "name": "ClientEditUpdateMutation",
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
                "name": "fullName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "number",
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
                "name": "lastName",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "dateOfBirth",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "telephone",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "gender",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "city",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "address",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "sentBy",
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
                "name": "discrete",
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
    "cacheID": "2a6d829c19d878037dbfeaea2972d237",
    "id": null,
    "metadata": {},
    "name": "ClientEditUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ClientEditUpdateMutation(\n  $input: UpdateClientInput!\n) {\n  updateClient(input: $input) {\n    client {\n      ...ClientEdit_client\n      id\n    }\n  }\n}\n\nfragment ClientEdit_client on Client {\n  rowId\n  fullName\n  number\n  firstName\n  lastName\n  dateOfBirth\n  telephone\n  gender\n  city\n  address\n  sentBy\n  email\n  discrete\n}\n"
  }
};
})();
(node as any).hash = 'f6519594740fe9aaf4f4c1aa7b666bae';
export default node;
