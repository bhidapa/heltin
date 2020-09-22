/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type session = {
    readonly token: string;
    readonly expiresAt: number;
    readonly " $refType": "session";
};
export type session$data = session;
export type session$key = {
    readonly " $data"?: session$data;
    readonly " $fragmentRefs": FragmentRefs<"session">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "session",
  "selections": [
    {
      "kind": "ClientExtension",
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "token",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "expiresAt",
          "storageKey": null
        }
      ]
    }
  ],
  "type": "Session",
  "abstractKey": null
};
(node as any).hash = 'eeb14443fa2416cce228c0754afbe508';
export default node;
