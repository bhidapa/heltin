/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type ClientSentBy = "CLINIC" | "COURT" | "KINDERGARTEN" | "MENTAL_HEALTH_CENTER" | "PEDIATRICIAN" | "POLICE" | "PSYCHIATRIST" | "PSYCHOTHERAPIST" | "REFERAL" | "SCHOOL" | "SELF_INITIATIVE" | "SOCIAL_WORK_CENTER";
export type Gender = "FEMALE" | "MALE";
export type ClientEdit_client = {
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
    readonly sentBy: ClientSentBy;
    readonly email: string | null;
    readonly discrete: boolean;
    readonly " $refType": "ClientEdit_client";
};
export type ClientEdit_client$data = ClientEdit_client;
export type ClientEdit_client$key = {
    readonly " $data"?: ClientEdit_client$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ClientEdit_client">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientEdit_client",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rowId",
      "storageKey": null
    },
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
      "name": "sentBy",
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
      "name": "discrete",
      "storageKey": null
    }
  ],
  "type": "Client",
  "abstractKey": null
};
(node as any).hash = '0d20e6aa9229b958133c825e08426615';
export default node;
