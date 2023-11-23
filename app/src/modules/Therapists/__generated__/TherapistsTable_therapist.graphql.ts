/**
 * @generated SignedSource<<f8cb4c047a55a1db3571988ed2fc6f42>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TherapistsTable_therapist$data = {
  readonly enabled: boolean;
  readonly fullName: string;
  readonly rowId: string;
  readonly type: string | null | undefined;
  readonly " $fragmentType": "TherapistsTable_therapist";
};
export type TherapistsTable_therapist$key = {
  readonly " $data"?: TherapistsTable_therapist$data;
  readonly " $fragmentSpreads": FragmentRefs<"TherapistsTable_therapist">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TherapistsTable_therapist",
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
      "name": "type",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "fullName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enabled",
      "storageKey": null
    }
  ],
  "type": "Therapist",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "156a22ceacebbab74e1a8068f3890397";
}

export default node;
