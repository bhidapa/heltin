/**
 * @generated SignedSource<<7f4c65577f1ca72c6844cf979768d9d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AutocompleteTherapist_item$data = {
  readonly id: string;
  readonly rowId: string;
  readonly fullName: string;
  readonly " $fragmentType": "AutocompleteTherapist_item";
};
export type AutocompleteTherapist_item$key = {
  readonly " $data"?: AutocompleteTherapist_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"AutocompleteTherapist_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AutocompleteTherapist_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "name": "fullName",
      "storageKey": null
    }
  ],
  "type": "Therapist",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "f9d4a7ab20bc0ff39c2f5515de26ea2a";
}

export default node;
