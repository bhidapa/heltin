/* tslint:disable */

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
  "kind": "Fragment",
  "name": "CaseStudyTreatmentManage_caseStudyTreatment",
  "type": "CaseStudyTreatment",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rowId",
      "args": null,
      "storageKey": null
    },
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
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "score",
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "external",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '770296e01a2d5f187f80d9f7b11efff9';
export default node;
