/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type UpdateCaseStudyInput = {
    clientMutationId?: string | null | undefined;
    rowId: string;
    title: string;
};
export type UpdateCaseStudyMutationVariables = {
    input: UpdateCaseStudyInput;
};
export type UpdateCaseStudyMutationResponse = {
    readonly updateCaseStudy: {
        readonly caseStudy: {
            readonly rowId: string;
            readonly title: string;
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
      title
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
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateCaseStudyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudy",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
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
    "name": "UpdateCaseStudyMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCaseStudyPayload",
        "kind": "LinkedField",
        "name": "updateCaseStudy",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "CaseStudy",
            "kind": "LinkedField",
            "name": "caseStudy",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bf0f0b19ff22e5d171ee704e825f37db",
    "id": null,
    "metadata": {},
    "name": "UpdateCaseStudyMutation",
    "operationKind": "mutation",
    "text": "mutation UpdateCaseStudyMutation(\n  $input: UpdateCaseStudyInput!\n) {\n  updateCaseStudy(input: $input) {\n    caseStudy {\n      rowId\n      title\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'cab29f1515732572e11adb7c1ccd35b2';
export default node;
