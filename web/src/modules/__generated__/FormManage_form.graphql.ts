/**
 * @generated SignedSource<<db38a78295e004c049905c56723b317a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormManage_form$data = {
  readonly rowId: string;
  readonly name: string;
  readonly description: string | null;
  readonly formQuestions: {
    readonly nodes: ReadonlyArray<{
      readonly rowId: string;
      readonly required: boolean;
      readonly " $fragmentSpreads": FragmentRefs<"FormManageQuestion_question">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"FormManageBuildDefaultValues_formQuestions">;
  };
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
          ]
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
