/**
 * @generated SignedSource<<4368aa1ac8cd69370dd806ff8a7b5d2c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormManage_formResponse$data = {
  readonly formRowId: string;
  readonly rowId: string;
  readonly " $fragmentSpreads": FragmentRefs<"FormManageBuildDefaultValues_formResponse">;
  readonly " $fragmentType": "FormManage_formResponse";
};
export type FormManage_formResponse$key = {
  readonly " $data"?: FormManage_formResponse$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormManage_formResponse">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FormManage_formResponse",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rowId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "formRowId",
      "storageKey": null
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
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ]
    }
  ],
  "type": "FormResponse",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "1dce1c633d4dd7f5aca27adc4c1a8681";
}

export default node;
