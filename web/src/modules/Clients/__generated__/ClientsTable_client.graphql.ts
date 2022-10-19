/**
 * @generated SignedSource<<cb5f067f1a821f76b9b7a0520e6d1dda>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ClientsTable_client$data = {
  readonly assignedTherapists: {
    readonly nodes: ReadonlyArray<{
      readonly therapist: {
        readonly fullName: string;
        readonly rowId: string;
      };
    }>;
  };
  readonly caseStudies: {
    readonly nodes: ReadonlyArray<{
      readonly concluded: boolean;
      readonly rowId: string;
      readonly title: string;
    }>;
  };
  readonly fullName: string;
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
      "alias": "assignedTherapists",
      "args": null,
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
              "path": "assignedTherapists.nodes.therapist"
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
    },
    {
      "alias": "caseStudies",
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": [
            "CREATED_AT_ASC"
          ]
        }
      ],
      "concreteType": "CaseStudiesConnection",
      "kind": "LinkedField",
      "name": "caseStudiesByClientRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CaseStudy",
          "kind": "LinkedField",
          "name": "nodes",
          "plural": true,
          "selections": [
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "concluded",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_ASC\"])"
    }
  ],
  "type": "Client",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "5432fd7ccf14ce5dc13feb4dfe789f2b";
}

export default node;
