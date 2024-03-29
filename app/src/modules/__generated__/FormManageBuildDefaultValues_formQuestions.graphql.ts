/**
 * @generated SignedSource<<473073d067c1e86ae2527c843b57a690>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type FormQuestionType = "CHECKBOXES" | "DATE" | "DATE_TIME" | "DROPDOWN" | "MULTIPLE_CHOICE" | "PARAGRAPH" | "SHORT_ANSWER" | "TIME";
import { FragmentRefs } from "relay-runtime";
export type FormManageBuildDefaultValues_formQuestions$data = {
  readonly nodes: ReadonlyArray<{
    readonly options: any | null | undefined;
    readonly required: boolean;
    readonly rowId: string;
    readonly type: FormQuestionType;
  }>;
  readonly " $fragmentType": "FormManageBuildDefaultValues_formQuestions";
};
export type FormManageBuildDefaultValues_formQuestions$key = {
  readonly " $data"?: FormManageBuildDefaultValues_formQuestions$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormManageBuildDefaultValues_formQuestions">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "FormManageBuildDefaultValues_formQuestions"
};

if (import.meta.env.DEV) {
  (node as any).hash = "3ee62602892c56072bc55cde925a0620";
}

export default node;
