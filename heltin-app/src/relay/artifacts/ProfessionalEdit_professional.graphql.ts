/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type Gender = "FEMALE" | "MALE";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
import { FragmentRefs } from "relay-runtime";
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
  "kind": "Fragment",
  "name": "ProfessionalEdit_professional",
  "type": "MentalHealthProfessional",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "name": "dateOfBirth",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
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
      "name": "gender",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lastName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "fullName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "type",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '54f5dec651a7e2d7e2e61001ae0b2522';
export default node;
