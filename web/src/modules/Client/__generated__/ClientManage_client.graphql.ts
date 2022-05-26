/**
 * @generated SignedSource<<520235e3a72162cdcf028082de843275>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Gender = "MALE" | "FEMALE";
import { FragmentRefs } from "relay-runtime";
export type ClientManage_client$data = {
  readonly rowId: string;
  readonly fullName: string;
  readonly number: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly dateOfBirth: string;
  readonly telephone: string;
  readonly gender: Gender;
  readonly city: string;
  readonly address: string;
  readonly email: string | null;
  readonly note: string | null;
  readonly discrete: boolean;
  readonly updatedAt: string;
  readonly updatedBy: {
    readonly fullName: string;
    readonly therapist: {
      readonly rowId: string;
    } | null;
  } | null;
  readonly createdBy: {
    readonly fullName: string;
    readonly therapist: {
      readonly rowId: string;
    } | null;
  };
  readonly " $fragmentType": "ClientManage_client";
};
export type ClientManage_client$key = {
  readonly " $data"?: ClientManage_client$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientManage_client">;
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
  "name": "fullName",
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "alias": "therapist",
    "args": null,
    "concreteType": "Therapist",
    "kind": "LinkedField",
    "name": "therapistByUserRowId",
    "plural": false,
    "selections": [
      (v0/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientManage_client",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "city",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "address",
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
      "name": "note",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "discrete",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "updatedAt",
      "storageKey": null
    },
    {
      "alias": "updatedBy",
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "userByUpdatedBy",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": null
    },
    {
      "kind": "RequiredField",
      "field": {
        "alias": "createdBy",
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "userByCreatedBy",
        "plural": false,
        "selections": (v2/*: any*/),
        "storageKey": null
      },
      "action": "THROW",
      "path": "createdBy"
    }
  ],
  "type": "Client",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "92a06da2ab98352add1131d8def9a6e0";
}

export default node;
