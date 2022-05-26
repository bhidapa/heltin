/**
 * @generated SignedSource<<d3c76e789363cf7223c9b7762b7d5e58>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type FormQuestionType = "SHORT_ANSWER" | "PARAGRAPH" | "MULTIPLE_CHOICE" | "CHECKBOXES" | "DROPDOWN" | "DATE" | "DATE_TIME" | "TIME";
import { FragmentRefs } from "relay-runtime";
export type FormManageBuildDefaultValues_formQuestions$data = {
  readonly nodes: ReadonlyArray<{
    readonly rowId: string;
    readonly type: FormQuestionType;
    readonly required: boolean;
    readonly options: any | null;
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
