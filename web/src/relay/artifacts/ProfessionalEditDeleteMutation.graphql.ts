/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type DeleteMentalHealthProfessionalInput = {
    clientMutationId?: string | null | undefined;
    rowId: string;
};
export type ProfessionalEditDeleteMutationVariables = {
    input: DeleteMentalHealthProfessionalInput;
};
export type ProfessionalEditDeleteMutationResponse = {
    readonly deleteMentalHealthProfessional: {
        readonly mentalHealthProfessional: {
            readonly id: string;
        } | null;
    } | null;
};
export type ProfessionalEditDeleteMutation = {
    readonly response: ProfessionalEditDeleteMutationResponse;
    readonly variables: ProfessionalEditDeleteMutationVariables;
};



/*
mutation ProfessionalEditDeleteMutation(
  $input: DeleteMentalHealthProfessionalInput!
) {
  deleteMentalHealthProfessional(input: $input) {
    mentalHealthProfessional {
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
    "concreteType": "DeleteMentalHealthProfessionalPayload",
    "kind": "LinkedField",
    "name": "deleteMentalHealthProfessional",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "MentalHealthProfessional",
        "kind": "LinkedField",
        "name": "mentalHealthProfessional",
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
    "name": "ProfessionalEditDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfessionalEditDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "04bb27618bb2d3d85f85688b21fdc1ad",
    "id": null,
    "metadata": {},
    "name": "ProfessionalEditDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation ProfessionalEditDeleteMutation(\n  $input: DeleteMentalHealthProfessionalInput!\n) {\n  deleteMentalHealthProfessional(input: $input) {\n    mentalHealthProfessional {\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '5b7933314cb048db383fc15ac9d79c85';
export default node;
