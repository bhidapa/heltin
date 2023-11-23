/**
 * @generated SignedSource<<a3fba51852b921a7df1d8c2c4f0983e7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type FormQuestionType = "CHECKBOXES" | "DATE" | "DATE_TIME" | "DROPDOWN" | "MULTIPLE_CHOICE" | "PARAGRAPH" | "SHORT_ANSWER" | "TIME";
import { FragmentRefs } from "relay-runtime";
export type FormManageQuestion_question$data = {
  readonly description: string | null | undefined;
  readonly name: string;
  readonly rawOptions: any | null | undefined;
  readonly required: boolean;
  readonly rowId: string;
  readonly type: FormQuestionType;
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
