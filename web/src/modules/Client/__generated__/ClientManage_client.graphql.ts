/**
 * @generated SignedSource<<c56799bfa3e59dd8dd780846023d31bd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type Gender = "FEMALE" | "MALE";
import { FragmentRefs } from "relay-runtime";
export type ClientManage_client$data = {
  readonly address: string;
  readonly canViewerDelete: boolean;
  readonly city: string;
  readonly createdBy: {
    readonly fullName: string;
    readonly therapist: {
      readonly rowId: string;
    } | null;
  };
  readonly dateOfBirth: string;
  readonly discrete: boolean;
  readonly email: string | null;
  readonly firstName: string;
  readonly fullName: string;
  readonly gender: Gender;
  readonly lastName: string;
  readonly note: string | null;
  readonly number: number;
  readonly rowId: string;
  readonly telephone: string;
  readonly updatedAt: string;
  readonly updatedBy: {
    readonly fullName: string;
    readonly therapist: {
      readonly rowId: string;
    } | null;
  } | null;
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "canViewerDelete",
      "storageKey": null
    }
  ],
  "type": "Client",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "b11268849be3ba128b02dfdecd4b710d";
}

export default node;
