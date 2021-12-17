/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Gender = "FEMALE" | "MALE";
export type MentalHealthProfessionalType = "CLINICAL_PSYCHOLOGIST" | "DEFECTOLOGIST" | "LOGOPED" | "NEUROLOGIST" | "NEUROPSYCHIATRIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER" | "SUPERVISOR";
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
    readonly disabled: boolean;
    readonly user: {
        readonly id: string;
        readonly rowId: string;
        readonly email: string;
    } | null;
    readonly " $refType": "ProfessionalEdit_professional";
};
export type ProfessionalEdit_professional$data = ProfessionalEdit_professional;
export type ProfessionalEdit_professional$key = {
    readonly " $data"?: ProfessionalEdit_professional$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ProfessionalEdit_professional">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfessionalEdit_professional",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "dateOfBirth",
      "storageKey": null
    },
    (v1/*: any*/),
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "disabled",
      "storageKey": null
    },
    {
      "alias": "user",
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "userByUserRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        (v0/*: any*/),
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "MentalHealthProfessional",
  "abstractKey": null
};
})();
(node as any).hash = '902eb3162ffe63a67cfbcb0a90c4a1a3';
export default node;
