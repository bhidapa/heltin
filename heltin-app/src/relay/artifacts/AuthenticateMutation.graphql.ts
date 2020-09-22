/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AuthenticateInput = {
    clientMutationId?: string | null;
    email: string;
    password: string;
};
export type AuthenticateMutationVariables = {
    input: AuthenticateInput;
};
export type AuthenticateMutationResponse = {
    readonly authenticate: {
        readonly jwtToken: string | null;
    };
};
export type AuthenticateMutation = {
    readonly response: AuthenticateMutationResponse;
    readonly variables: AuthenticateMutationVariables;
};



/*
mutation AuthenticateMutation(
  $input: AuthenticateInput!
) {
  authenticate(input: $input) {
    jwtToken
  }
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "AuthenticatePayload",
    "kind": "LinkedField",
    "name": "authenticate",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "jwtToken",
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
    "name": "AuthenticateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthenticateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1c0fa51b66cd0ea79783af4a08e7f833",
    "id": null,
    "metadata": {},
    "name": "AuthenticateMutation",
    "operationKind": "mutation",
    "text": "mutation AuthenticateMutation(\n  $input: AuthenticateInput!\n) {\n  authenticate(input: $input) {\n    jwtToken\n  }\n}\n"
  }
};
})();
(node as any).hash = '992168c03b14bfcc0682e13e82fbefac';
export default node;
