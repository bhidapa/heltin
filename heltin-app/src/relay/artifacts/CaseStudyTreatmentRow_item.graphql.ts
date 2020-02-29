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
  "kind": "Fragment",
  "name": "CaseStudyTreatmentRow_item",
  "type": "CaseStudyTreatment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "title",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "startedAt",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endedAt",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '02d694411e614a43638b118ceb021274';
export default node;
