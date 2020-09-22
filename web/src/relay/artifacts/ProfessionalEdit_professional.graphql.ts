/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Gender = "FEMALE" | "MALE";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type ProfessionalEdit_professional = {
    readonly rowId: string;
    readonly dateOfBirth: string;
    readonly email: string;
    readonly title: string | null;
    readonly firstName: string;
    readonly gender: Gender;
    readonly lastName: string;
    readonly fullName: string;
    readonly type: MentalHealthProfessionalType;
    readonly " $refType": "ProfessionalEdit_professional";
};
export type ProfessionalEdit_professional$data = ProfessionalEdit_professional;
export type ProfessionalEdit_professional$key = {
    readonly " $data"?: ProfessionalEdit_professional$data;
    readonly " $fragmentRefs": FragmentRefs<"ProfessionalEdit_professional">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfessionalEdit_professional",
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
      "name": "dateOfBirth",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
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
      "name": "gender",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastName",
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
      "name": "type",
      "storageKey": null
    }
  ],
  "type": "MentalHealthProfessional",
  "abstractKey": null
};
(node as any).hash = '54f5dec651a7e2d7e2e61001ae0b2522';
export default node;
