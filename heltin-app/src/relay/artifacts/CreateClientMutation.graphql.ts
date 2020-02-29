/* tslint:disable */
/* eslint-disable */
/* @relayHash bdf672e4bfd04b15c67693d1ae3e840a */

import { ConcreteRequest } from "relay-runtime";
export type ClientSentBy = "CLINIC" | "COURT" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "PEDIATRICIAN" | "POLICE" | "PSYCHIATRIST" | "REFERAL" | "SCHOOL" | "SELF_INITIATIVE" | "SOCIAL_WORK_CENTER";
export type Gender = "FEMALE" | "MALE";
export type CreateClientInput = {
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
    sentBy: ClientSentBy;
    telephone: string;
};
export type CreateClientMutationVariables = {
    input: CreateClientInput;
};
export type CreateClientMutationResponse = {
    readonly createClient: {
        readonly client: {
            readonly rowId: string;
        } | null;
    } | null;
};
export type CreateClientMutation = {
    readonly response: CreateClientMutationResponse;
    readonly variables: CreateClientMutationVariables;
};



/*
mutation CreateClientMutation(
  $input: CreateClientInput!
) {
  createClient(input: $input) {
    client {
      rowId
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
    "type": "CreateClientInput!",
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
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateClientMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createClient",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientPayload",
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
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateClientMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createClient",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateClientPayload",
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
    "name": "CreateClientMutation",
    "id": null,
    "text": "mutation CreateClientMutation(\n  $input: CreateClientInput!\n) {\n  createClient(input: $input) {\n    client {\n      rowId\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '311274de0ae8aa261e6501d14a75aa6f';
export default node;
