/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpdateCaseStudyMentalHealthProfessionalInput = {
    clientMutationId?: string | null;
    rowId: string;
    primary: boolean;
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UpdateCaseStudyProfessionalMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5a7d405b6bbd1bd4da640ac177cf5e72",
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
