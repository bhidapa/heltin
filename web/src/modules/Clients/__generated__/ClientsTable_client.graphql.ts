/**
 * @generated SignedSource<<ebb5fddbb88b3142b2ae5dbbfd6402d3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsTable_client$data = {
  readonly fullName: string;
  readonly latestAssignedTherapist: {
    readonly therapist: {
      readonly fullName: string;
      readonly rowId: string;
    };
  } | null;
  readonly number: number;
  readonly rowId: string;
  readonly treatments: {
    readonly totalCount: number;
  };
  readonly " $fragmentType": "ClientsTable_client";
};
export type ClientsTable_client$key = {
  readonly " $data"?: ClientsTable_client$data;
  readonly " $fragmentSpreads": FragmentRefs<"ClientsTable_client">;
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
  "name": "ClientsTable_client",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "number",
      "storageKey": null
    },
    (v1/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "ClientAssignedTherapist",
      "kind": "LinkedField",
      "name": "latestAssignedTherapist",
      "plural": false,
      "selections": [
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
              (v1/*: any*/)
            ],
            "storageKey": null
          },
          "action": "THROW",
          "path": "latestAssignedTherapist.therapist"
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
})();

if (import.meta.env.DEV) {
  (node as any).hash = "f6b43be401240b93b2c6e0af93bf08bc";
}

export default node;
