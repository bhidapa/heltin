/**
 * @generated SignedSource<<5a98468a7cf8ed3bad75c663baedfe61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Files_files$data = ReadonlyArray<{
  readonly createdAt: string;
  readonly createdBy: {
    readonly fullName: string;
    readonly rowId: string;
    readonly therapist: {
      readonly rowId: string;
    } | null;
  };
  readonly id: string;
  readonly link: string;
  readonly name: string;
  readonly protected: boolean;
  readonly rowId: string;
  readonly " $fragmentType": "Files_files";
}>;
export type Files_files$key = ReadonlyArray<{
  readonly " $data"?: Files_files$data;
  readonly " $fragmentSpreads": FragmentRefs<"Files_files">;
}>;

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "Files_files",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "link",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "protected",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "createdAt",
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
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "fullName",
            "storageKey": null
          },
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
        ],
        "storageKey": null
      },
      "action": "THROW",
      "path": "createdBy"
    }
  ],
  "type": "File",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "100a1a9bad41a6acc9855536febf7453";
}

export default node;
