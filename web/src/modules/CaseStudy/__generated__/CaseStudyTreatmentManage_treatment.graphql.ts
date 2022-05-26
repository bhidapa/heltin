/**
 * @generated SignedSource<<047e7ba7942b11eb9d0bb857d011edd1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyTreatmentManage_treatment$data = {
  readonly rowId: string;
  readonly external: boolean;
  readonly title: string;
  readonly startedAt: string;
  readonly endedAt: string;
  readonly privateDescription: string | null;
  readonly description: string | null;
  readonly score: number | null;
  readonly " $fragmentType": "CaseStudyTreatmentManage_treatment";
};
export type CaseStudyTreatmentManage_treatment$key = {
  readonly " $data"?: CaseStudyTreatmentManage_treatment$data;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyTreatmentManage_treatment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CaseStudyTreatmentManage_treatment",
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
      "name": "external",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "privateDescription",
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
    }
  ],
  "type": "CaseStudyTreatment",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "2ca3a406f6b45964342813cf1c7290a3";
}

export default node;
