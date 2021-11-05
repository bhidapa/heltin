/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type AutocompleteProfessional_item = {
    readonly id: string;
    readonly rowId: string;
    readonly fullName: string;
    readonly " $refType": "AutocompleteProfessional_item";
};
export type AutocompleteProfessional_item$data = AutocompleteProfessional_item;
export type AutocompleteProfessional_item$key = {
    readonly " $data"?: AutocompleteProfessional_item$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"AutocompleteProfessional_item">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AutocompleteProfessional_item",
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
  "type": "MentalHealthProfessional",
  "abstractKey": null
};
(node as any).hash = 'e6f329baee7b977f5944983fac42f78a';
export default node;
