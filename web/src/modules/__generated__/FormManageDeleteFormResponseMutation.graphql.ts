/**
 * @generated SignedSource<<e5fd2a9b33e08f2ed8b34c4ed20fd232>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteFormResponseInput = {
  clientMutationId?: string | null;
  rowId: string;
};
export type FormManageDeleteFormResponseMutation$variables = {
  input: DeleteFormResponseInput;
};
export type FormManageDeleteFormResponseMutation$data = {
  readonly deleteFormResponse: {
    readonly formResponse: {
      readonly rowId: string;
    } | null;
  } | null;
};
export type FormManageDeleteFormResponseMutation = {
  variables: FormManageDeleteFormResponseMutation$variables;
  response: FormManageDeleteFormResponseMutation$data;
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
    "name": "FormManageDeleteFormResponseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteFormResponsePayload",
        "kind": "LinkedField",
        "name": "deleteFormResponse",
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
    "name": "FormManageDeleteFormResponseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteFormResponsePayload",
        "kind": "LinkedField",
        "name": "deleteFormResponse",
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
    "cacheID": "20b093e80a16ddcc96664c81c37c564f",
    "id": null,
    "metadata": {},
    "name": "FormManageDeleteFormResponseMutation",
    "operationKind": "mutation",
    "text": "mutation FormManageDeleteFormResponseMutation(\n  $input: DeleteFormResponseInput!\n) {\n  deleteFormResponse(input: $input) {\n    formResponse {\n      rowId\n      id\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "99806bd05af4ec6b286c27239aa5be76";
}

export default node;
