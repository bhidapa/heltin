/* tslint:disable */
/* eslint-disable */

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
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteCaseStudyMentalHealthProfessionalInput!"
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
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
  "kind": "LinkedField",
  "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CaseStudyMentalHealthProfessional",
      "kind": "LinkedField",
      "name": "nodes",
      "plural": true,
      "selections": [
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteCaseStudyProfessionalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyMentalHealthProfessional",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudyByCaseStudyRowId",
            "plural": false,
            "selections": [
              (v3/*: any*/)
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
    "name": "DeleteCaseStudyProfessionalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteCaseStudyMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "deleteCaseStudyMentalHealthProfessional",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudyByCaseStudyRowId",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v2/*: any*/)
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
    "name": "DeleteCaseStudyProfessionalMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteCaseStudyProfessionalMutation(\n  $input: DeleteCaseStudyMentalHealthProfessionalInput!\n) {\n  deleteCaseStudyMentalHealthProfessional(input: $input) {\n    caseStudyByCaseStudyRowId {\n      caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '38dc7433b2cbde00ce4f7eb53e4d3d7f';
export default node;
