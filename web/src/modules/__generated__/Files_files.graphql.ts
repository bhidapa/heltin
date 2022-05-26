/**
 * @generated SignedSource<<bcf5c09a470c7e7a814dc3991b74b1d6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Files_files$data = ReadonlyArray<{
  readonly id: string;
  readonly rowId: string;
  readonly link: string;
  readonly name: string;
  readonly protected: boolean;
  readonly createdAt: string;
  readonly createdBy: {
    readonly rowId: string;
    readonly fullName: string;
    readonly isTherapist: boolean;
  };
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
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "isTherapist",
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
  (node as any).hash = "328fb96281c62680c9325c74e197af5f";
}

export default node;
