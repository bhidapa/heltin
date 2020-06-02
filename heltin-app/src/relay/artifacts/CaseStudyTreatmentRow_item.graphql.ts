/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentRow_item = {
    readonly title: string;
    readonly startedAt: string;
    readonly endedAt: string;
    readonly " $refType": "CaseStudyTreatmentRow_item";
};
export type CaseStudyTreatmentRow_item$data = CaseStudyTreatmentRow_item;
export type CaseStudyTreatmentRow_item$key = {
    readonly " $data"?: CaseStudyTreatmentRow_item$data;
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
  "type": "CaseStudyTreatment"
};
(node as any).hash = '02d694411e614a43638b118ceb021274';
export default node;
