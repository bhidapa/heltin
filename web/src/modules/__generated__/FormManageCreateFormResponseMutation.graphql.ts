/**
 * @generated SignedSource<<3562191f8566cf3b7d19330c5abeac91>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateFormResponseInput = {
  clientMutationId?: string | null;
  formRowId: string;
  caseStudyRowId: string;
  answers: any;
};
export type FormManageCreateFormResponseMutation$variables = {
  input: CreateFormResponseInput;
};
export type FormManageCreateFormResponseMutation$data = {
  readonly createFormResponse: {
    readonly formResponse: {
      readonly rowId: string;
    } | null;
  } | null;
};
export type FormManageCreateFormResponseMutation = {
  variables: FormManageCreateFormResponseMutation$variables;
  response: FormManageCreateFormResponseMutation$data;
};

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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormManageCreateFormResponseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateFormResponsePayload",
        "kind": "LinkedField",
        "name": "createFormResponse",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FormResponse",
            "kind": "LinkedField",
            "name": "formResponse",
            "plural": false,
            "selections": [
              (v2/*: any*/)
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
    "name": "FormManageCreateFormResponseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateFormResponsePayload",
        "kind": "LinkedField",
        "name": "createFormResponse",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "FormResponse",
            "kind": "LinkedField",
            "name": "formResponse",
            "plural": false,
            "selections": [
              (v2/*: any*/),
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
    "cacheID": "cf070f7fe880f58fd34a19e00949a445",
    "id": null,
    "metadata": {},
    "name": "FormManageCreateFormResponseMutation",
    "operationKind": "mutation",
    "text": "mutation FormManageCreateFormResponseMutation(\n  $input: CreateFormResponseInput!\n) {\n  createFormResponse(input: $input) {\n    formResponse {\n      rowId\n      id\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "80a3b08ac3ff21adf78152ad80c6fd9e";
}

export default node;
