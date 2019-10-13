/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
declare const _ClientsTableRow_item$ref: unique symbol;
export type ClientsTableRow_item$ref = typeof _ClientsTableRow_item$ref;
export type ClientsTableRow_item = {
    readonly number: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly " $refType": ClientsTableRow_item$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ClientsTableRow_item",
  "type": "Client",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "number",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "firstName",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "lastName",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '9873f7a7ff1dee4647aea134296ab9b6';
export default node;
