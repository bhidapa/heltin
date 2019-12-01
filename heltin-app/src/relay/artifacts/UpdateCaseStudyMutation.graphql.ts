/* tslint:disable */
/* @relayHash 7f1d23f718ceb0b54fb212a6282df3a2 */

import { ConcreteRequest } from "relay-runtime";
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
              (v3/*: any*/)
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
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              }
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
    "text": "mutation UpdateCaseStudyMutation(\n  $input: UpdateCaseStudyInput!\n) {\n  updateCaseStudy(input: $input) {\n    caseStudy {\n      rowId\n      description\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'cab29f1515732572e11adb7c1ccd35b2';
export default node;
