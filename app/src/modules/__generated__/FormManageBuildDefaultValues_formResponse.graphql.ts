/**
 * @generated SignedSource<<f64a76c82648a169f56f1345a6eb21d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FormManageBuildDefaultValues_formResponse$data = {
  readonly answers: {
    readonly nodes: ReadonlyArray<{
      readonly formQuestionRowId: string;
      readonly value: any | null | undefined;
    }>;
  };
  readonly " $fragmentType": "FormManageBuildDefaultValues_formResponse";
};
export type FormManageBuildDefaultValues_formResponse$key = {
  readonly " $data"?: FormManageBuildDefaultValues_formResponse$data;
  readonly " $fragmentSpreads": FragmentRefs<"FormManageBuildDefaultValues_formResponse">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "FormManageBuildDefaultValues_formResponse"
};

if (import.meta.env.DEV) {
  (node as any).hash = "6b7a21cc35966b1b85feb1747e018cb2";
}

export default node;
