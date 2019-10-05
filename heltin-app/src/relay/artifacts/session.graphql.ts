/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _session$ref: unique symbol;
export type session$ref = typeof _session$ref;
export type session = {
    readonly token: string;
    readonly expiresAt: number;
    readonly " $refType": session$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "session",
  "type": "Session",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "token",
          "args": null,
          "storageKey": null
        },
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "expiresAt",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = 'eeb14443fa2416cce228c0754afbe508';
export default node;
