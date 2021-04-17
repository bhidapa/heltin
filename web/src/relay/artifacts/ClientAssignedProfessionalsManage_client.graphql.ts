/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MentalHealthProfessionalType = "DEFECTOLOGIST" | "NEUROLOGIST" | "OTHER" | "PEDAGOGUE" | "PEDIATRIST" | "PHONETICIAN" | "PSYCHIATRIST" | "PSYCHOLOGIST" | "PSYCHOTHERAPIST" | "SOCIAL_WORKER";
export type ClientAssignedProfessionalsManage_client = {
    readonly rowId: string;
    readonly assignedTherapists: {
        readonly nodes: ReadonlyArray<{
            readonly id: string;
            readonly rowId: string;
            readonly therapist: {
                readonly rowId: string;
                readonly type: MentalHealthProfessionalType;
                readonly fullName: string;
            };
            readonly createdAt: unknown;
        }>;
    };
    readonly " $refType": "ClientAssignedProfessionalsManage_client";
};
export type ClientAssignedProfessionalsManage_client$data = ClientAssignedProfessionalsManage_client;
export type ClientAssignedProfessionalsManage_client$key = {
    readonly " $data"?: ClientAssignedProfessionalsManage_client$data;
    readonly " $fragmentRefs": FragmentRefs<"ClientAssignedProfessionalsManage_client">;
};



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
  "metadata": null,
  "name": "ClientAssignedProfessionalsManage_client",
  "selections": [
    (v0/*: any*/),
    {
      "alias": "assignedTherapists",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": [
            "CREATED_AT_ASC"
          ]
        }
      ],
      "concreteType": "ClientAssignedMentalHealthProfessionalsConnection",
      "kind": "LinkedField",
      "name": "clientAssignedMentalHealthProfessionalsByClientRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClientAssignedMentalHealthProfessional",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
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
              "alias": "therapist",
              "args": null,
              "concreteType": "MentalHealthProfessional",
              "kind": "LinkedField",
              "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "type",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "fullName",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "createdAt",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "clientAssignedMentalHealthProfessionalsByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
    }
  ],
  "type": "Client",
  "abstractKey": null
};
})();
(node as any).hash = '877939926b2cdf2a144f2231ed88788f';
export default node;
