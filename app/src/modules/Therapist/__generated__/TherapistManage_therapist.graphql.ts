/**
 * @generated SignedSource<<0b09eefb55e1a3e82e3572e3f5fe0b6d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Gender = "FEMALE" | "MALE";
import { FragmentRefs } from "relay-runtime";
export type TherapistManage_therapist$data = {
  readonly canViewerDelete: boolean;
  readonly canViewerUpdate: boolean;
  readonly dateOfBirth: string;
  readonly disabled: boolean;
  readonly email: string;
  readonly enabled: boolean;
  readonly firstName: string;
  readonly fullName: string;
  readonly gender: Gender;
  readonly lastName: string;
  readonly rowId: string;
  readonly telephone: string | null | undefined;
  readonly title: string | null | undefined;
  readonly type: string | null | undefined;
  readonly updatedAt: string;
  readonly user: {
    readonly email: string;
    readonly id: string;
    readonly rowId: string;
  } | null | undefined;
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
      "name": "canViewerUpdate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canViewerDelete",
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
  (node as any).hash = "b3ead81ffd5004d6f73c82b54781352b";
}

export default node;
