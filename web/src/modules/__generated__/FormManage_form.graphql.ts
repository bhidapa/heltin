/**
 * @generated SignedSource<<dd2f264c41a4dfc0da033b1ff5c34756>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormManage_form$data = {
  readonly description: string | null;
  readonly formQuestions: {
    readonly nodes: ReadonlyArray<{
      readonly required: boolean;
      readonly rowId: string;
      readonly " $fragmentSpreads": FragmentRefs<"FormManageQuestion_question">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"FormManageBuildDefaultValues_formQuestions">;
  };
  readonly name: string;
  readonly rowId: string;
  readonly " $fragmentType": "FormManage_form";
};
export type FormManage_form$key = {
  readonly " $data"?: FormManage_form$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormManage_form">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "required",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FormManage_form",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
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
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "type",
                  "storageKey": null
                },
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "options",
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
          "alias": null,
          "args": null,
          "concreteType": "FormQuestion",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "FormManageQuestion_question"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "formQuestionsByFormRowId(orderBy:\"INDEX_ASC\")"
    }
  ],
  "type": "Form",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "521de4975ac949f08459acca45823c81";
}

export default node;
