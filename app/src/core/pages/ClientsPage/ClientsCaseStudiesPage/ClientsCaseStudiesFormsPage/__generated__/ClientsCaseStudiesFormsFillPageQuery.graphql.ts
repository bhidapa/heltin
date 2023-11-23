/**
 * @generated SignedSource<<87731a16058569405262bc66df6d7cbf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCaseStudiesFormsFillPageQuery$variables = {
  formRowId: string;
};
export type ClientsCaseStudiesFormsFillPageQuery$data = {
  readonly form: {
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"FormManage_form">;
  } | null | undefined;
};
export type ClientsCaseStudiesFormsFillPageQuery = {
  response: ClientsCaseStudiesFormsFillPageQuery$data;
  variables: ClientsCaseStudiesFormsFillPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "formRowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "formRowId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsCaseStudiesFormsFillPageQuery",
    "selections": [
      {
        "alias": "form",
        "args": (v1/*: any*/),
        "concreteType": "Form",
        "kind": "LinkedField",
        "name": "formByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FormManage_form"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ClientsCaseStudiesFormsFillPageQuery",
    "selections": [
      {
        "alias": "form",
        "args": (v1/*: any*/),
        "concreteType": "Form",
        "kind": "LinkedField",
        "name": "formByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": "formQuestions",
            "args": [
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "INDEX_ASC"
              }
            ],
            "concreteType": "FormQuestionsConnection",
            "kind": "LinkedField",
            "name": "formQuestionsByFormRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FormQuestion",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "required",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "options",
                    "storageKey": null
                  },
                  (v5/*: any*/),
                  {
                    "alias": "rawOptions",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "options",
                    "storageKey": null
                  },
                  (v2/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "formQuestionsByFormRowId(orderBy:\"INDEX_ASC\")"
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "07fdc4d7cc60c1f1d66c97cc0779955e",
    "id": null,
    "metadata": {},
    "name": "ClientsCaseStudiesFormsFillPageQuery",
    "operationKind": "query",
    "text": "query ClientsCaseStudiesFormsFillPageQuery(\n  $formRowId: UUID!\n) {\n  form: formByRowId(rowId: $formRowId) {\n    name\n    ...FormManage_form\n    id\n  }\n}\n\nfragment FormManageBuildDefaultValues_formQuestions on FormQuestionsConnection {\n  nodes {\n    rowId\n    type\n    required\n    options\n    id\n  }\n}\n\nfragment FormManageQuestion_question on FormQuestion {\n  rowId\n  required\n  type\n  rawOptions: options\n  name\n  description\n}\n\nfragment FormManage_form on Form {\n  rowId\n  name\n  description\n  formQuestions: formQuestionsByFormRowId(orderBy: INDEX_ASC) {\n    ...FormManageBuildDefaultValues_formQuestions\n    nodes {\n      rowId\n      required\n      ...FormManageQuestion_question\n      id\n    }\n  }\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "462782aa99c2f68e67ad1f99e3f6a5a0";
}

export default node;
