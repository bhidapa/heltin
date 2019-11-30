/* tslint:disable */
/* @relayHash 08992bddf57a5b06bc98de0b7ad7b14b */

import { ConcreteRequest } from "relay-runtime";
export type CreateCaseStudyInput = {
    readonly clientMutationId?: string | null;
    readonly clientRowId?: string | null;
    readonly description: string;
    readonly groupRowId?: string | null;
};
export type CreateCaseStudyMutationVariables = {
    input: CreateCaseStudyInput;
};
export type CreateCaseStudyMutationResponse = {
    readonly createCaseStudy: {
        readonly caseStudy: {
            readonly rowId: string;
        } | null;
        readonly clientByClientRowId: {
            readonly caseStudiesByClientRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly rowId: string;
                    readonly description: string;
                }>;
            };
        } | null;
    } | null;
};
export type CreateCaseStudyMutation = {
    readonly response: CreateCaseStudyMutationResponse;
    readonly variables: CreateCaseStudyMutationVariables;
};



/*
mutation CreateCaseStudyMutation(
  $input: CreateCaseStudyInput!
) {
  createCaseStudy(input: $input) {
    caseStudy {
      rowId
      id
    }
    clientByClientRowId {
      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          rowId
          description
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
    "type": "CreateCaseStudyInput!",
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
v3 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_ASC"
    ]
  }
],
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "description",
  "args": null,
  "storageKey": null
},
v5 = {
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
    "name": "CreateCaseStudyMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyPayload",
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
              (v2/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientByClientRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudiesByClientRowId",
                "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v3/*: any*/),
                "concreteType": "CaseStudiesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudy",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/)
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
    "name": "CreateCaseStudyMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createCaseStudy",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateCaseStudyPayload",
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
              (v5/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "clientByClientRowId",
            "storageKey": null,
            "args": null,
            "concreteType": "Client",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "caseStudiesByClientRowId",
                "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])",
                "args": (v3/*: any*/),
                "concreteType": "CaseStudiesConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "nodes",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CaseStudy",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ]
                  }
                ]
              },
              (v5/*: any*/)
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateCaseStudyMutation",
    "id": null,
    "text": "mutation CreateCaseStudyMutation(\n  $input: CreateCaseStudyInput!\n) {\n  createCaseStudy(input: $input) {\n    caseStudy {\n      rowId\n      id\n    }\n    clientByClientRowId {\n      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          rowId\n          description\n          id\n        }\n      }\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '5f70a72962b89d4dcec55558c604bd51';
export default node;
