/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientsTableRow_item = {
    readonly rowId: string;
    readonly number: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly latestAssignedTherapist: {
        readonly therapist: {
            readonly fullName: string;
        };
    } | null;
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientsTableRow_item",
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
      "alias": "latestAssignedTherapist",
      "args": null,
      "concreteType": "ClientAssignedMentalHealthProfessional",
      "kind": "LinkedField",
      "name": "latestAssignedMentalHealthProfessional",
      "plural": false,
      "selections": [
        {
          "alias": "therapist",
          "args": null,
          "concreteType": "MentalHealthProfessional",
          "kind": "LinkedField",
          "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "fullName",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "treatments",
      "args": null,
      "concreteType": "CaseStudyTreatmentsConnection",
      "kind": "LinkedField",
      "name": "caseStudyTreatmentsByCaseStudiesClientRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "totalCount",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Client",
  "abstractKey": null
};
(node as any).hash = '489a5042a0ac0deda38be1f7e63a7bad';
export default node;
