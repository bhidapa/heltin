/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type UpdateCaseStudyInput = {
    readonly clientMutationId?: string | null;
    readonly description: string;
    readonly rowId: string;
};
export type UpdateCaseStudyMutationVariables = {
    input: UpdateCaseStudyInput;
};
export type UpdateCaseStudyMutationResponse = {
    readonly updateCaseStudy: {
        readonly caseStudy: {
            readonly rowId: string;
            readonly description: string;
            readonly client: {
                readonly rowId: string;
                readonly fullName: string;
            } | null;
            readonly caseStudyProfessionals: {
                readonly nodes: ReadonlyArray<{
                    readonly rowId: string;
                    readonly professional: {
                        readonly rowId: string;
                        readonly type: MentalHealthProfessionalType;
                        readonly fullName: string;
                    };
                    readonly primary: boolean;
                }>;
            };
        } | null;
    } | null;
};
export type UpdateCaseStudyMutation = {
    readonly response: UpdateCaseStudyMutationResponse;
    readonly variables: UpdateCaseStudyMutationVariables;
};



/*
mutation UpdateCaseStudyMutation(
  $input: UpdateCaseStudyInput!
) {
  updateCaseStudy(input: $input) {
    caseStudy {
      rowId
      description
      client: clientByClientRowId {
        rowId
        fullName
        id
      }
      caseStudyProfessionals: caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          rowId
          professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {
            rowId
            type
            fullName
            id
          }
          primary
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
    "type": "UpdateCaseStudyInput!",
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
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_ASC"
    ]
  }
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "type",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "primary",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "UpdateCaseStudyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudy",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "client",
                "name": "clientByClientRowId",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": "caseStudyProfessionals",
                "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
                "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v5/*: any*/),
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
                      (v2/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": "professional",
                        "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "MentalHealthProfessional",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v6/*: any*/),
                          (v4/*: any*/)
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
    "name": "UpdateCaseStudyMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "caseStudy",
            "storageKey": null,
            "args": null,
            "concreteType": "CaseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "client",
                "name": "clientByClientRowId",
                "storageKey": null,
                "args": null,
                "concreteType": "Client",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v4/*: any*/),
                  (v8/*: any*/)
                ]
              },
              {
                "kind": "LinkedField",
                "alias": "caseStudyProfessionals",
                "name": "caseStudyMentalHealthProfessionalsByCaseStudyRowId",
                "storageKey": "caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v5/*: any*/),
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
                      (v2/*: any*/),
                      {
                        "kind": "LinkedField",
                        "alias": "professional",
                        "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "MentalHealthProfessional",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v6/*: any*/),
                          (v4/*: any*/),
                          (v8/*: any*/)
                        ]
                      },
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ]
                  }
                ]
              },
              (v8/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateCaseStudyMutation",
    "id": null,
    "text": "mutation UpdateCaseStudyMutation(\n  $input: UpdateCaseStudyInput!\n) {\n  updateCaseStudy(input: $input) {\n    caseStudy {\n      rowId\n      description\n      client: clientByClientRowId {\n        rowId\n        fullName\n        id\n      }\n      caseStudyProfessionals: caseStudyMentalHealthProfessionalsByCaseStudyRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          rowId\n          professional: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n            rowId\n            type\n            fullName\n            id\n          }\n          primary\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f1ad0b481eb389fa5a2b8d803268173e';
export default node;
