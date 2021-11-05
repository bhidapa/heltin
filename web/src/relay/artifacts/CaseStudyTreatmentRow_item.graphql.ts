/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentRow_item = {
    readonly rowId: string;
    readonly caseStudyRowId: string;
    readonly title: string;
    readonly startedAt: string;
    readonly endedAt: string;
    readonly " $refType": "CaseStudyTreatmentRow_item";
};
export type CaseStudyTreatmentRow_item$data = CaseStudyTreatmentRow_item;
export type CaseStudyTreatmentRow_item$key = {
    readonly " $data"?: CaseStudyTreatmentRow_item$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentRow_item">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseStudyTreatmentRow_item",
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
      "name": "caseStudyRowId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "startedAt",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "endedAt",
      "storageKey": null
    }
  ],
  "type": "CaseStudyTreatment",
  "abstractKey": null
};
(node as any).hash = '1da4493a29fd4b75224a2f5162baa714';
export default node;
