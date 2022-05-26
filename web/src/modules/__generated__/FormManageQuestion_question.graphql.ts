/**
 * @generated SignedSource<<0213afb57c82aaa046ecc79255b5f3fe>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type FormQuestionType = "SHORT_ANSWER" | "PARAGRAPH" | "MULTIPLE_CHOICE" | "CHECKBOXES" | "DROPDOWN" | "DATE" | "DATE_TIME" | "TIME";
import { FragmentRefs } from "relay-runtime";
export type FormManageQuestion_question$data = {
  readonly rowId: string;
  readonly required: boolean;
  readonly type: FormQuestionType;
  readonly rawOptions: any | null;
  readonly name: string;
  readonly description: string | null;
  readonly " $fragmentType": "FormManageQuestion_question";
};
export type FormManageQuestion_question$key = {
  readonly " $data"?: FormManageQuestion_question$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormManageQuestion_question">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FormManageQuestion_question",
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
      "name": "required",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "type",
      "storageKey": null
    },
    {
      "alias": "rawOptions",
      "args": null,
      "kind": "ScalarField",
      "name": "options",
      "storageKey": null
    },
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
    }
  ],
  "type": "FormQuestion",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "fe716b5c966547010173a05071b37efa";
}

export default node;
