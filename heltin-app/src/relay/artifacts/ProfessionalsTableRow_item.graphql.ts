/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type ProfessionalsTableRow_item = {
    readonly rowId: string;
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfessionalsTableRow_item",
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
      "storageKey": null
    }
  ],
  "type": "MentalHealthProfessional",
  "abstractKey": null
};
(node as any).hash = '12eeb0695ad080f68984025715f18b42';
export default node;
