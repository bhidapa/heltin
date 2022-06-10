/**
 * @generated SignedSource<<42adbb4683298e9b2dfbfc04201be818>>
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
    readonly isTherapist: boolean;
    readonly rowId: string;
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
