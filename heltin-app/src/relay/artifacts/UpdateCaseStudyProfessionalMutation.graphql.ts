/* tslint:disable */
/* eslint-disable */

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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateCaseStudyMentalHealthProfessionalInput!"
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
    "concreteType": "UpdateCaseStudyMentalHealthProfessionalPayload",
    "kind": "LinkedField",
    "name": "updateCaseStudyMentalHealthProfessional",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "CaseStudyMentalHealthProfessional",
        "kind": "LinkedField",
        "name": "caseStudyMentalHealthProfessional",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
            "name": "primary",
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
    "name": "UpdateCaseStudyProfessionalMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateCaseStudyProfessionalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "UpdateCaseStudyProfessionalMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCaseStudyProfessionalMutation(\n  $input: UpdateCaseStudyMentalHealthProfessionalInput!\n) {\n  updateCaseStudyMentalHealthProfessional(input: $input) {\n    caseStudyMentalHealthProfessional {\n      id\n      rowId\n      primary\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fed4cfd72e103ff81557633e5c4209b2';
export default node;
