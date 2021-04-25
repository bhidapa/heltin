/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AutocompleteUser_item = {
    readonly id: string;
    readonly rowId: string;
    readonly email: string;
    readonly " $refType": "AutocompleteUser_item";
};
export type AutocompleteUser_item$data = AutocompleteUser_item;
export type AutocompleteUser_item$key = {
    readonly " $data"?: AutocompleteUser_item$data;
    readonly " $fragmentRefs": FragmentRefs<"AutocompleteUser_item">;
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
(node as any).hash = 'baa14d4bc71c059129e1e460d3e24362';
export default node;
