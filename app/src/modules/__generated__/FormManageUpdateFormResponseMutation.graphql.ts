/**
 * @generated SignedSource<<d32ac0a467a2a4aeb07d1c7b38bdba82>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateFormResponseInput = {
  answers: any;
  clientMutationId?: string | null;
  formResponseRowId: string;
};
export type FormManageUpdateFormResponseMutation$variables = {
  input: UpdateFormResponseInput;
};
export type FormManageUpdateFormResponseMutation$data = {
  readonly updateFormResponse: {
    readonly formResponse: {
      readonly form: {
        readonly formQuestions: {
          readonly " $fragmentSpreads": FragmentRefs<"FormManageBuildDefaultValues_formQuestions">;
        };
        readonly " $fragmentSpreads": FragmentRefs<"FormManage_form">;
      } | null;
      readonly " $fragmentSpreads": FragmentRefs<"FormManageBuildDefaultValues_formResponse" | "FormManage_formResponse">;
    } | null;
  } | null;
};
export type FormManageUpdateFormResponseMutation = {
  response: FormManageUpdateFormResponseMutation$data;
  variables: FormManageUpdateFormResponseMutation$variables;
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
  "name": "formQuestionRowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "value",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": "INDEX_ASC"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "required",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "options",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FormManageUpdateFormResponseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateFormResponsePayload",
        "kind": "LinkedField",
        "name": "updateFormResponse",
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
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FormManage_formResponse"
              },
              {
                "kind": "InlineDataFragmentSpread",
                "name": "FormManageBuildDefaultValues_formResponse",
                "selections": [
                  {
                    "alias": "answers",
                    "args": null,
                    "concreteType": "FormResponseAnswersConnection",
                    "kind": "LinkedField",
                    "name": "formResponseAnswersByFormResponseRowId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "FormResponseAnswer",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
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
                "args": null,
                "argumentDefinitions": []
              },
              {
                "alias": "form",
                "args": null,
                "concreteType": "Form",
                "kind": "LinkedField",
                "name": "formByFormRowId",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "FormManage_form"
                  },
                  {
                    "alias": "formQuestions",
                    "args": (v4/*: any*/),
                    "concreteType": "FormQuestionsConnection",
                    "kind": "LinkedField",
                    "name": "formQuestionsByFormRowId",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "InlineDataFragmentSpread",
                        "name": "FormManageBuildDefaultValues_formQuestions",
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "FormQuestion",
                            "kind": "LinkedField",
                            "name": "nodes",
                            "plural": true,
                            "selections": [
                              (v5/*: any*/),
                              (v6/*: any*/),
                              (v7/*: any*/),
                              (v8/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "args": null,
                        "argumentDefinitions": []
                      }
                    ],
                    "storageKey": "formQuestionsByFormRowId(orderBy:\"INDEX_ASC\")"
                  }
                ],
                "storageKey": null
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
    "name": "FormManageUpdateFormResponseMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateFormResponsePayload",
        "kind": "LinkedField",
        "name": "updateFormResponse",
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
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "formRowId",
                "storageKey": null
              },
              {
                "alias": "answers",
                "args": null,
                "concreteType": "FormResponseAnswersConnection",
                "kind": "LinkedField",
                "name": "formResponseAnswersByFormResponseRowId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "FormResponseAnswer",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": "form",
                "args": null,
                "concreteType": "Form",
                "kind": "LinkedField",
                "name": "formByFormRowId",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  (v10/*: any*/),
                  (v11/*: any*/),
                  {
                    "alias": "formQuestions",
                    "args": (v4/*: any*/),
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
                          (v5/*: any*/),
                          (v6/*: any*/),
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v9/*: any*/),
                          {
                            "alias": "rawOptions",
                            "args": null,
                            "kind": "ScalarField",
                            "name": "options",
                            "storageKey": null
                          },
                          (v10/*: any*/),
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "formQuestionsByFormRowId(orderBy:\"INDEX_ASC\")"
                  },
                  (v9/*: any*/)
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "faac23bdb1046366d2fdb81df56750a8",
    "id": null,
    "metadata": {},
    "name": "FormManageUpdateFormResponseMutation",
    "operationKind": "mutation",
    "text": "mutation FormManageUpdateFormResponseMutation(\n  $input: UpdateFormResponseInput!\n) {\n  updateFormResponse(input: $input) {\n    formResponse {\n      ...FormManage_formResponse\n      ...FormManageBuildDefaultValues_formResponse\n      form: formByFormRowId {\n        ...FormManage_form\n        formQuestions: formQuestionsByFormRowId(orderBy: INDEX_ASC) {\n          ...FormManageBuildDefaultValues_formQuestions\n        }\n        id\n      }\n      id\n    }\n  }\n}\n\nfragment FormManageBuildDefaultValues_formQuestions on FormQuestionsConnection {\n  nodes {\n    rowId\n    type\n    required\n    options\n    id\n  }\n}\n\nfragment FormManageBuildDefaultValues_formResponse on FormResponse {\n  answers: formResponseAnswersByFormResponseRowId {\n    nodes {\n      formQuestionRowId\n      value\n      id\n    }\n  }\n}\n\nfragment FormManageQuestion_question on FormQuestion {\n  rowId\n  required\n  type\n  rawOptions: options\n  name\n  description\n}\n\nfragment FormManage_form on Form {\n  rowId\n  name\n  description\n  formQuestions: formQuestionsByFormRowId(orderBy: INDEX_ASC) {\n    ...FormManageBuildDefaultValues_formQuestions\n    nodes {\n      rowId\n      required\n      ...FormManageQuestion_question\n      id\n    }\n  }\n}\n\nfragment FormManage_formResponse on FormResponse {\n  rowId\n  formRowId\n  ...FormManageBuildDefaultValues_formResponse\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "16adc563f44f7ec2c002d59f3bd51344";
}

export default node;
