/* tslint:disable */

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
