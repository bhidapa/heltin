/**
 * @generated SignedSource<<12c6e423ef0f71c6ac726bb4093ccb08>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientAssignedTherapistsManage_client$data = {
  readonly assignedTherapists: {
    readonly nodes: ReadonlyArray<{
      readonly createdAt: string;
      readonly id: string;
      readonly rowId: string;
      readonly therapist: {
        readonly fullName: string;
        readonly rowId: string;
        readonly type: string | null;
      };
    }>;
  };
  readonly latestAssignedTherapist: {
    readonly therapist: {
      readonly fullName: string;
    } | null;
  } | null;
  readonly rowId: string;
  readonly " $fragmentType": "ClientAssignedTherapistsManage_client";
};
export type ClientAssignedTherapistsManage_client$key = {
  readonly " $data"?: ClientAssignedTherapistsManage_client$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientAssignedTherapistsManage_client">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ClientAssignedTherapistsManage_client",
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
      "concreteType": "ClientAssignedTherapistsConnection",
      "kind": "LinkedField",
      "name": "clientAssignedTherapistsByClientRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ClientAssignedTherapist",
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
              "kind": "RequiredField",
              "field": {
                "alias": "therapist",
                "args": null,
                "concreteType": "Therapist",
                "kind": "LinkedField",
                "name": "therapistByTherapistRowId",
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
                  (v1/*: any*/)
                ],
                "storageKey": null
              },
              "action": "THROW",
              "path": "assignedTherapists.nodes.therapist"
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
      "storageKey": "clientAssignedTherapistsByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "ClientAssignedTherapist",
      "kind": "LinkedField",
      "name": "latestAssignedTherapist",
      "plural": false,
      "selections": [
        {
          "alias": "therapist",
          "args": null,
          "concreteType": "Therapist",
          "kind": "LinkedField",
          "name": "therapistByTherapistRowId",
          "plural": false,
          "selections": [
            (v1/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Client",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "701967c9b01e060b990bbeee403cbdf9";
}

export default node;
