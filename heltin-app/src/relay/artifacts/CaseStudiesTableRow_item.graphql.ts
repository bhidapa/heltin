/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CaseStudiesTableRow_item = {
    readonly id: string;
    readonly rowId: string;
    readonly description: string;
    readonly " $refType": "CaseStudiesTableRow_item";
};
export type CaseStudiesTableRow_item$data = CaseStudiesTableRow_item;
export type CaseStudiesTableRow_item$key = {
    readonly " $data"?: CaseStudiesTableRow_item$data;
    readonly " $fragmentRefs": FragmentRefs<"CaseStudiesTableRow_item">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "CaseStudiesTableRow_item",
  "type": "CaseStudy",
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
      "name": "description",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '3ee1e27cb11f8544795b49daac7ee244';
export default node;
