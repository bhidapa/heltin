/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentManage_caseStudyTreatment = {
    readonly rowId: string;
    readonly title: string;
    readonly description: string | null;
    readonly score: number | null;
    readonly startedAt: string;
    readonly endedAt: string;
    readonly external: boolean;
    readonly " $refType": "CaseStudyTreatmentManage_caseStudyTreatment";
};
export type CaseStudyTreatmentManage_caseStudyTreatment$data = CaseStudyTreatmentManage_caseStudyTreatment;
export type CaseStudyTreatmentManage_caseStudyTreatment$key = {
    readonly " $data"?: CaseStudyTreatmentManage_caseStudyTreatment$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudyTreatmentManage_caseStudyTreatment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseStudyTreatmentManage_caseStudyTreatment",
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
      "name": "title",
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "score",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "external",
      "storageKey": null
    }
  ],
  "type": "CaseStudyTreatment",
  "abstractKey": null
};
(node as any).hash = '770296e01a2d5f187f80d9f7b11efff9';
export default node;
