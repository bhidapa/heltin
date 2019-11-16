/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
import { FragmentRefs } from "relay-runtime";
export type ProfessionalsTableRow_item = {
    readonly type: MentalHealthProfessionalType;
    readonly title: string | null;
    readonly firstName: string;
    readonly lastName: string;
    readonly " $refType": "ProfessionalsTableRow_item";
};
export type ProfessionalsTableRow_item$data = ProfessionalsTableRow_item;
export type ProfessionalsTableRow_item$key = {
    readonly " $data"?: ProfessionalsTableRow_item$data;
    readonly " $fragmentRefs": FragmentRefs<"ProfessionalsTableRow_item">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ProfessionalsTableRow_item",
  "type": "MentalHealthProfessional",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
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
      "name": "firstName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lastName",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '3039c39d6872f5c72866ad309e4205be';
export default node;
