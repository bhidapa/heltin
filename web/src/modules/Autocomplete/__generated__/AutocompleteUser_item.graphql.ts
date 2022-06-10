/**
 * @generated SignedSource<<9cc8d553df09ca8f7a28eefa492abca4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AutocompleteUser_item$data = {
  readonly email: string;
  readonly id: string;
  readonly rowId: string;
  readonly " $fragmentType": "AutocompleteUser_item";
};
export type AutocompleteUser_item$key = {
  readonly " $data"?: AutocompleteUser_item$data;
  readonly " $fragmentSpreads": FragmentRefs<"AutocompleteUser_item">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AutocompleteUser_item",
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
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (import.meta.env.DEV) {
  (node as any).hash = "baa14d4bc71c059129e1e460d3e24362";
}

export default node;
