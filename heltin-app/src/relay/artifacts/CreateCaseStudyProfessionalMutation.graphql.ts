/* tslint:disable */
/* eslint-disable */
/* @relayHash c3496aded88538dd258be96cb934238f */

import { ConcreteRequest } from "relay-runtime";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type CreateCaseStudyMentalHealthProfessionalInput = {
    caseStudyRowId: string;
    clientMutationId?: string | null;
    mentalHealthProfessionalRowId: string;
    primary: boolean;
};
export type CreateCaseStudyProfessionalMutationVariables = {
    input: CreateCaseStudyMentalHealthProfessionalInput;
};
export type CreateCaseStudyProfessionalMutationResponse = {
    readonly createCaseStudyMentalHealthProfessional: {
        readonly caseStudyByCaseStudyRowId: {
            readonly caseStudyMentalHealthProfessionalsByCaseStudyRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly id: string;
                    readonly rowId: string;
                    readonly professional: {
                        readonly rowId: string;
                        readonly type: MentalHealthProfessionalType;
                        readonly fullName: string;
                    };
                    readonly primary: boolean;
                }>;
            };
        };
    } | null;
};
export type CreateCaseStudyProfessionalMutation = {
    readonly response: CreateCaseStudyProfessionalMutationResponse;
    readonly variables: CreateCaseStudyProfessionalMutationVariables;
};



/*
mutation CreateCaseStudyProfessionalMutation(
  $input: CreateCaseStudyMentalHealthProfessionalInput!
) {
  createCaseStudyMentalHealthProfessional(input: $input) {
    caseStudyByCaseStudyRowId {
      caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          id
          rowId
          professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {
            rowId
            type
            fullName
            id
          }
          primary
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
    "type": "CreateCaseStudyMentalHealthProfessionalInput!",
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
v2 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_ASC"
    ]
  }
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "primary",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateCaseStudyProfessionalMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyMentalHealthProfessional",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyMentalHealthProfessionalPayload",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
                "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": "professional",
                        "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "MentalHealthProfessional",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/)
                        ]
                      },
                      (v7/*: any*/)
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateCaseStudyProfessionalMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudyMentalHealthProfessional",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyMentalHealthProfessionalPayload",
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
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
                "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v2/*: any*/),
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": "professional",
                        "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "MentalHealthProfessional",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v3/*: any*/)
                        ]
                      },
                      (v7/*: any*/)
                    ]
                  }
                ]
              },
              (v3/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCaseStudyProfessionalMutation",
    "id": null,
    "text": "mutation CreateCaseStudyProfessionalMutation(\n  $input: CreateCaseStudyMentalHealthProfessionalInput!\n) {\n  createCaseStudyMentalHealthProfessional(input: $input) {\n    caseStudyByCaseStudyRowId {\n      caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          id\n          rowId\n          professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n            rowId\n            type\n            fullName\n            id\n          }\n          primary\n        }\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '18deb3fc23d5042cca9d6c7518d851dc';
export default node;
