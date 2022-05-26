/**
 * @generated SignedSource<<516a5dadc968da68f4e0298690f6bed8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsCaseStudiesFormsResponsePageQuery$variables = {
  formResponseRowId: string;
};
export type ClientsCaseStudiesFormsResponsePageQuery$data = {
  readonly formResponse: {
    readonly rowId: string;
    readonly form: {
      readonly name: string;
      readonly " $fragmentSpreads": FragmentRefs<"FormManage_form">;
    } | null;
    readonly formResponseFiles: {
      readonly __id: string;
      readonly nodes: ReadonlyArray<{
        readonly file: {
          readonly " $fragmentSpreads": FragmentRefs<"Files_files">;
        };
      }>;
    };
    readonly " $fragmentSpreads": FragmentRefs<"FormManage_formResponse">;
  } | null;
};
export type ClientsCaseStudiesFormsResponsePageQuery = {
  variables: ClientsCaseStudiesFormsResponsePageQuery$variables;
  response: ClientsCaseStudiesFormsResponsePageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "formResponseRowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "formResponseRowId"
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
  "name": "name",
  "storageKey": null
},
v4 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_DESC"
    ]
  }
],
v5 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
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
    "name": "ClientsCaseStudiesFormsResponsePageQuery",
    "selections": [
      {
        "alias": "formResponse",
        "args": (v1/*: any*/),
        "concreteType": "FormResponse",
        "kind": "LinkedField",
        "name": "formResponseByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FormManage_formResponse"
          },
          {
            "alias": "form",
            "args": null,
            "concreteType": "Form",
            "kind": "LinkedField",
            "name": "formByFormRowId",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "FormManage_form"
              }
            ],
            "storageKey": null
          },
          {
            "alias": "formResponseFiles",
            "args": (v4/*: any*/),
            "concreteType": "FormResponseFilesConnection",
            "kind": "LinkedField",
            "name": "formResponseFilesByFormResponseRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FormResponseFile",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "kind": "RequiredField",
                    "field": {
                      "alias": "file",
                      "args": null,
                      "concreteType": "File",
                      "kind": "LinkedField",
                      "name": "fileByFileRowId",
                      "plural": false,
                      "selections": [
                        {
                          "args": null,
                          "kind": "FragmentSpread",
                          "name": "Files_files"
                        }
                      ],
                      "storageKey": null
                    },
                    "action": "THROW",
                    "path": "formResponse.formResponseFiles.nodes.file"
                  }
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": "formResponseFilesByFormResponseRowId(orderBy:[\"CREATED_AT_DESC\"])"
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
    "name": "ClientsCaseStudiesFormsResponsePageQuery",
    "selections": [
      {
        "alias": "formResponse",
        "args": (v1/*: any*/),
        "concreteType": "FormResponse",
        "kind": "LinkedField",
        "name": "formResponseByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "formQuestionRowId",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                  },
                  (v6/*: any*/)
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
              (v3/*: any*/),
              (v2/*: any*/),
              (v7/*: any*/),
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
                      (v2/*: any*/),
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
                      (v6/*: any*/),
                      {
                        "alias": "rawOptions",
                        "args": null,
                        "kind": "ScalarField",
                        "name": "options",
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "formQuestionsByFormRowId(orderBy:\"INDEX_ASC\")"
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": "formResponseFiles",
            "args": (v4/*: any*/),
            "concreteType": "FormResponseFilesConnection",
            "kind": "LinkedField",
            "name": "formResponseFilesByFormResponseRowId",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "FormResponseFile",
                "kind": "LinkedField",
                "name": "nodes",
                "plural": true,
                "selections": [
                  {
                    "alias": "file",
                    "args": null,
                    "concreteType": "File",
                    "kind": "LinkedField",
                    "name": "fileByFileRowId",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "link",
                        "storageKey": null
                      },
                      (v3/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "protected",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "createdAt",
                        "storageKey": null
                      },
                      {
                        "alias": "createdBy",
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "userByCreatedBy",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "fullName",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "isTherapist",
                            "storageKey": null
                          },
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              (v5/*: any*/)
            ],
            "storageKey": "formResponseFilesByFormResponseRowId(orderBy:[\"CREATED_AT_DESC\"])"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8e29fe7a5013279be17e9b6813fe2c32",
    "id": null,
    "metadata": {},
    "name": "ClientsCaseStudiesFormsResponsePageQuery",
    "operationKind": "query",
    "text": "query ClientsCaseStudiesFormsResponsePageQuery(\n  $formResponseRowId: UUID!\n) {\n  formResponse: formResponseByRowId(rowId: $formResponseRowId) {\n    rowId\n    ...FormManage_formResponse\n    form: formByFormRowId {\n      name\n      ...FormManage_form\n      id\n    }\n    formResponseFiles: formResponseFilesByFormResponseRowId(orderBy: [CREATED_AT_DESC]) {\n      nodes {\n        file: fileByFileRowId {\n          ...Files_files\n          id\n        }\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment Files_files on File {\n  id\n  rowId\n  link\n  name\n  protected\n  createdAt\n  createdBy: userByCreatedBy {\n    rowId\n    fullName\n    isTherapist\n    id\n  }\n}\n\nfragment FormManageBuildDefaultValues_formQuestions on FormQuestionsConnection {\n  nodes {\n    rowId\n    type\n    required\n    options\n    id\n  }\n}\n\nfragment FormManageBuildDefaultValues_formResponse on FormResponse {\n  answers: formResponseAnswersByFormResponseRowId {\n    nodes {\n      formQuestionRowId\n      value\n      id\n    }\n  }\n}\n\nfragment FormManageQuestion_question on FormQuestion {\n  rowId\n  required\n  type\n  rawOptions: options\n  name\n  description\n}\n\nfragment FormManage_form on Form {\n  rowId\n  name\n  description\n  formQuestions: formQuestionsByFormRowId(orderBy: INDEX_ASC) {\n    ...FormManageBuildDefaultValues_formQuestions\n    nodes {\n      rowId\n      required\n      ...FormManageQuestion_question\n      id\n    }\n  }\n}\n\nfragment FormManage_formResponse on FormResponse {\n  rowId\n  formRowId\n  ...FormManageBuildDefaultValues_formResponse\n}\n"
  }
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "ab20b4b51a82a9726c6ab700f243e69a";
}

export default node;
