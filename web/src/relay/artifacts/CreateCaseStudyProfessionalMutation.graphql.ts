/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type CreateCaseStudyMentalHealthProfessionalInput = {
    clientMutationId?: string | null;
    caseStudyRowId: string;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "primary",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateCaseStudyProfessionalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyMentalHealthProfessional",
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
              {
                "alias": null,
                "args": (v2/*: any*/),
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": "professional",
                        "args": null,
                        "concreteType": "MentalHealthProfessional",
                        "kind": "LinkedField",
                        "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])"
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
    "name": "CreateCaseStudyProfessionalMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyMentalHealthProfessionalPayload",
        "kind": "LinkedField",
        "name": "createCaseStudyMentalHealthProfessional",
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
              {
                "alias": null,
                "args": (v2/*: any*/),
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "alias": "professional",
                        "args": null,
                        "concreteType": "MentalHealthProfessional",
                        "kind": "LinkedField",
                        "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v3/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])"
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "2af0984483c7e268541ea654b58d4558",
    "id": null,
    "metadata": {},
    "name": "CreateCaseStudyProfessionalMutation",
    "operationKind": "mutation",
    "text": "mutation CreateCaseStudyProfessionalMutation(\n  $input: CreateCaseStudyMentalHealthProfessionalInput!\n) {\n  createCaseStudyMentalHealthProfessional(input: $input) {\n    caseStudyByCaseStudyRowId {\n      caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          id\n          rowId\n          professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n            rowId\n            type\n            fullName\n            id\n          }\n          primary\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '18deb3fc23d5042cca9d6c7518d851dc';
export default node;
