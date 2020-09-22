/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ProfessionalsDetailPageQueryVariables = {
    rowId: string;
};
export type ProfessionalsDetailPageQueryResponse = {
    readonly professional: {
        readonly fullName: string;
        readonly " $fragmentRefs": FragmentRefs<"ProfessionalEdit_professional">;
    } | null;
};
export type ProfessionalsDetailPageQuery = {
    readonly response: ProfessionalsDetailPageQueryResponse;
    readonly variables: ProfessionalsDetailPageQueryVariables;
};



/*
query ProfessionalsDetailPageQuery(
  $rowId: UUID!
) {
  professional: mentalHealthProfessionalByRowId(rowId: $rowId) {
    fullName
    ...ProfessionalEdit_professional
    id
  }
}

fragment ProfessionalEdit_professional on MentalHealthProfessional {
  rowId
  dateOfBirth
  email
  title
  firstName
  gender
  lastName
  fullName
  type
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "rowId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "rowId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfessionalsDetailPageQuery",
    "selections": [
      {
        "alias": "professional",
        "args": (v1/*: any*/),
        "concreteType": "MentalHealthProfessional",
        "kind": "LinkedField",
        "name": "mentalHealthProfessionalByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ProfessionalEdit_professional"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfessionalsDetailPageQuery",
    "selections": [
      {
        "alias": "professional",
        "args": (v1/*: any*/),
        "concreteType": "MentalHealthProfessional",
        "kind": "LinkedField",
        "name": "mentalHealthProfessionalByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
            "name": "dateOfBirth",
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
            "name": "title",
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
            "name": "gender",
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
            "name": "type",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0a255e0c771d762dac73298ec2964cab",
    "id": null,
    "metadata": {},
    "name": "ProfessionalsDetailPageQuery",
    "operationKind": "query",
    "text": "query ProfessionalsDetailPageQuery(\n  $rowId: UUID!\n) {\n  professional: mentalHealthProfessionalByRowId(rowId: $rowId) {\n    fullName\n    ...ProfessionalEdit_professional\n    id\n  }\n}\n\nfragment ProfessionalEdit_professional on MentalHealthProfessional {\n  rowId\n  dateOfBirth\n  email\n  title\n  firstName\n  gender\n  lastName\n  fullName\n  type\n}\n"
  }
};
})();
(node as any).hash = '3df20312100397137ef9c71812687505';
export default node;
