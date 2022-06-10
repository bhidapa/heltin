/**
 * @generated SignedSource<<4f40a379ee9d3f5d40e468d2b11ee358>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Gender = "FEMALE" | "MALE";
export type TherapistType = "CLINICAL_PSYCHOLOGIST" | "DEFECTOLOGIST" | "LOGOPED" | "NEUROLOGIST" | "NEUROPSYCHIATRIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER" | "SUPERVISOR";
import { FragmentRefs } from "relay-runtime";
export type TherapistManage_therapist$data = {
  readonly dateOfBirth: string;
  readonly disabled: boolean;
  readonly email: string;
  readonly enabled: boolean;
  readonly firstName: string;
  readonly fullName: string;
  readonly gender: Gender;
  readonly lastName: string;
  readonly rowId: string;
  readonly telephone: string | null;
  readonly title: string | null;
  readonly type: TherapistType;
  readonly updatedAt: string;
  readonly user: {
    readonly email: string;
    readonly id: string;
    readonly rowId: string;
  } | null;
  readonly " $fragmentType": "TherapistManage_therapist";
};
export type TherapistManage_therapist$key = {
  readonly " $data"?: TherapistManage_therapist$data;
  readonly " $fragmentSpreads": FragmentRefs<"TherapistManage_therapist">;
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
  "name": "TherapistManage_therapist",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "enabled",
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
      "name": "fullName",
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
      "name": "telephone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "gender",
      "storageKey": null
    },
    (v1/*: any*/),
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    }
  ],
  "type": "Therapist",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "681915f3d77f75a0bb2bc07822a5bdb2";
}

export default node;
