/**
 * @generated SignedSource<<a0f58332ad2f721a3da4da0eb709d2b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CaseStudyAssignedTherapistsManage_casyStudy$data = {
  readonly assignedTherapists: {
    readonly __id: string;
    readonly nodes: ReadonlyArray<{
      readonly createdAt: string;
      readonly id: string;
      readonly primary: boolean;
      readonly rowId: string;
      readonly therapist: {
        readonly fullName: string;
        readonly rowId: string;
        readonly type: string | null;
      };
    }>;
  };
  readonly rowId: string;
  readonly " $fragmentType": "CaseStudyAssignedTherapistsManage_casyStudy";
};
export type CaseStudyAssignedTherapistsManage_casyStudy$key = {
  readonly " $data"?: CaseStudyAssignedTherapistsManage_casyStudy$data;
  readonly " $fragmentSpreads": FragmentRefs<"CaseStudyAssignedTherapistsManage_casyStudy">;
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
  "name": "CaseStudyAssignedTherapistsManage_casyStudy",
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
      "concreteType": "CaseStudyTherapistsConnection",
      "kind": "LinkedField",
      "name": "caseStudyTherapistsByCaseStudyRowId",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CaseStudyTherapist",
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
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "primary",
              "storageKey": null
            },
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
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": "caseStudyTherapistsByCaseStudyRowId(orderBy:[\"CREATED_AT_ASC\"])"
    }
  ],
  "type": "CaseStudy",
  "abstractKey": null
};
})();

if (import.meta.env.DEV) {
  (node as any).hash = "b22ad976b2ded2e55779f675d62fb409";
}

export default node;
