/* tslint:disable */

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
    readonly " $data"?: AutocompleteProfessional_item$data;
    readonly " $fragmentRefs": FragmentRefs<"AutocompleteProfessional_item">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "AutocompleteProfessional_item",
  "type": "MentalHealthProfessional",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
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
      "name": "fullName",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = 'e6f329baee7b977f5944983fac42f78a';
export default node;
