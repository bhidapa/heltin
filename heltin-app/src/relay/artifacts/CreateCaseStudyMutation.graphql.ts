/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
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
        readonly clientByClientRowId: {
            readonly caseStudiesByClientRowId: {
                readonly nodes: ReadonlyArray<{
                    readonly rowId: string;
                    readonly " $fragmentRefs": FragmentRefs<"CaseStudiesTableRow_item">;
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
    clientByClientRowId {
      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {
        nodes {
          rowId
          ...CaseStudiesTableRow_item
          id
        }
      }
      id
    }
  }
}

fragment CaseStudiesTableRow_item on CaseStudy {
  id
  rowId
  description
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
  "name": "rowId",
  "args": null,
  "storageKey": null
},
v4 = {
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
                "args": (v2/*: any*/),
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
                      (v3/*: any*/),
                      {
                        "kind": "FragmentSpread",
                        "name": "CaseStudiesTableRow_item",
                        "args": null
                      }
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
                "args": (v2/*: any*/),
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "description",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              (v4/*: any*/)
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
    "text": "mutation CreateCaseStudyMutation(\n  $input: CreateCaseStudyInput!\n) {\n  createCaseStudy(input: $input) {\n    clientByClientRowId {\n      caseStudiesByClientRowId(orderBy: [CREATED_AT_ASC]) {\n        nodes {\n          rowId\n          ...CaseStudiesTableRow_item\n          id\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment CaseStudiesTableRow_item on CaseStudy {\n  id\n  rowId\n  description\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '88ead9e8cb28a08a174236f5a4e85425';
export default node;
