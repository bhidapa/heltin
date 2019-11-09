/* tslint:disable */

import { ReaderFragment } from "relay-runtime";
export type ClientSentBy = "CLINIC" | "COURT" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "PEDIATRICIAN" | "POLICE" | "PSYCHIATRIST" | "REFERAL" | "SCHOOL" | "SELF_INITIATIVE" | "SOCIAL_WORK_CENTER";
export type Gender = "FEMALE" | "MALE";
declare const _ClientEdit_client$ref: unique symbol;
export type ClientEdit_client$ref = typeof _ClientEdit_client$ref;
export type ClientEdit_client = {
    readonly rowId: string;
    readonly fullName: string;
    readonly number: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly dateOfBirth: unknown;
    readonly telephone: string;
    readonly gender: Gender;
    readonly city: string;
    readonly address: string;
    readonly sentBy: ClientSentBy;
    readonly email: string | null;
    readonly discrete: boolean;
    readonly " $refType": ClientEdit_client$ref;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "ClientEdit_client",
  "type": "Client",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "rowId",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "fullName",
      "args": null,
      "storageKey": null
    },
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
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "dateOfBirth",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "telephone",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "gender",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "city",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "address",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "sentBy",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "email",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "discrete",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '0d20e6aa9229b958133c825e08426615';
export default node;