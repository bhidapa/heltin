/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientsTableRow_item = {
    readonly number: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly treatments: {
        readonly totalCount: number;
    };
    readonly " $refType": "ClientsTableRow_item";
};
export type ClientsTableRow_item$data = ClientsTableRow_item;
export type ClientsTableRow_item$key = {
    readonly " $data"?: ClientsTableRow_item$data;
    readonly " $fragmentRefs": FragmentRefs<"ClientsTableRow_item">;
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
    },
    {
      "kind": "LinkedField",
      "alias": "treatments",
      "name": "caseStudyTreatmentsByCaseStudiesClientRowId",
      "storageKey": null,
      "args": null,
      "concreteType": "CaseStudyTreatmentsConnection",
      "plural": false,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "totalCount",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '654a76889e52315a2dee67b43998abc3';
export default node;
