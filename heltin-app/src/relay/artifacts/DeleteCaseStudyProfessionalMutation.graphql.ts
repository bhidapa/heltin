/* tslint:disable */
/* eslint-disable */
/* @relayHash dcd2e141614d81387189b4e781533963 */

import { ConcreteRequest } from "relay-runtime";
export type DeleteCaseStudyMentalHealthProfessionalInput = {
    clientMutationId?: string | null;
    rowId: string;
};
export type DeleteCaseStudyProfessionalMutationVariables = {
    input: DeleteCaseStudyMentalHealthProfessionalInput;
};
export type DeleteCaseStudyProfessionalMutationResponse = {
    readonly deleteCaseStudyMentalHealthProfessional: {
        readonly caseStudyByCaseStudyRowId: {
            readonly caseStudyMentalHealthProfessionalsByCaseStudyRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly id: string;
                }>;
            };
        };
    } | null;
};
export type DeleteCaseStudyProfessionalMutation = {
    readonly response: DeleteCaseStudyProfessionalMutationResponse;
    readonly variables: DeleteCaseStudyProfessionalMutationVariables;
};



/*
mutation DeleteCaseStudyProfessionalMutation(
  $input: DeleteCaseStudyMentalHealthProfessionalInput!
) {
  deleteCaseStudyMentalHealthProfessional(input: $input) {
    caseStudyByCaseStudyRowId {
      caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          id
        }
      }
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
    "type": "DeleteCaseStudyMentalHealthProfessionalInput!",
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
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
  "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])",
  "args": [
    {
      "kind": "Literal",
      "name": "orderBy",
      "value": [
        "CREATED_AT_ASC"
      ]
    }
  ],
  "concreteType": "CaseStudyMentalHealthProfessionalsConnection",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "nodes",
      "storageKey": null,
      "args": null,
      "concreteType": "CaseStudyMentalHealthProfessional",
      "plural": true,
      "selections": [
        (v2/*: any*/)
      ]
    }
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteCaseStudyProfessionalMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseStudyMentalHealthProfessional",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyMentalHealthProfessionalPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyByCaseStudyRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteCaseStudyProfessionalMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "deleteCaseStudyMentalHealthProfessional",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyMentalHealthProfessionalPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudyByCaseStudyRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteCaseStudyProfessionalMutation",
    "id": null,
    "text": "mutation DeleteCaseStudyProfessionalMutation(\n  $input: DeleteCaseStudyMentalHealthProfessionalInput!\n) {\n  deleteCaseStudyMentalHealthProfessional(input: $input) {\n    caseStudyByCaseStudyRowId {\n      caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '38dc7433b2cbde00ce4f7eb53e4d3d7f';
export default node;
