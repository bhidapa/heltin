/* tslint:disable */
/* eslint-disable */
/* @relayHash 4e4c76ad7c7363c04a13acbe8a2a1995 */

import { ConcreteRequest } from "relay-runtime";
export type UpdateCaseStudyMentalHealthProfessionalInput = {
    clientMutationId?: string | null;
    primary: boolean;
    rowId: string;
};
export type UpdateCaseStudyProfessionalMutationVariables = {
    input: UpdateCaseStudyMentalHealthProfessionalInput;
};
export type UpdateCaseStudyProfessionalMutationResponse = {
    readonly updateCaseStudyMentalHealthProfessional: {
        readonly caseStudyMentalHealthProfessional: {
            readonly id: string;
            readonly rowId: string;
            readonly primary: boolean;
        } | null;
    } | null;
};
export type UpdateCaseStudyProfessionalMutation = {
    readonly response: UpdateCaseStudyProfessionalMutationResponse;
    readonly variables: UpdateCaseStudyProfessionalMutationVariables;
};



/*
mutation UpdateCaseStudyProfessionalMutation(
  $input: UpdateCaseStudyMentalHealthProfessionalInput!
) {
  updateCaseStudyMentalHealthProfessional(input: $input) {
    caseStudyMentalHealthProfessional {
      id
      rowId
      primary
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCaseStudyMentalHealthProfessionalInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateCaseStudyMentalHealthProfessional",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateCaseStudyMentalHealthProfessionalPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "caseStudyMentalHealthProfessional",
        "storageKey": null,
        "args": null,
        "concreteType": "CaseStudyMentalHealthProfessional",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "rowId",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "primary",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCaseStudyProfessionalMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateCaseStudyProfessionalMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateCaseStudyProfessionalMutation",
    "id": null,
    "text": "mutation UpdateCaseStudyProfessionalMutation(\n  $input: UpdateCaseStudyMentalHealthProfessionalInput!\n) {\n  updateCaseStudyMentalHealthProfessional(input: $input) {\n    caseStudyMentalHealthProfessional {\n      id\n      rowId\n      primary\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'fed4cfd72e103ff81557633e5c4209b2';
export default node;
