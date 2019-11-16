/* tslint:disable */

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
    "kind": "LocalArgument",
    "name": "rowId",
    "type": "UUID!",
    "defaultValue": null
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
  "kind": "ScalarField",
  "alias": null,
  "name": "fullName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "ProfessionalsDetailPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "professional",
        "name": "mentalHealthProfessionalByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "MentalHealthProfessional",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "kind": "FragmentSpread",
            "name": "ProfessionalEdit_professional",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ProfessionalsDetailPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "professional",
        "name": "mentalHealthProfessionalByRowId",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "MentalHealthProfessional",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
            "name": "dateOfBirth",
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
            "name": "title",
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
            "name": "gender",
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
            "name": "type",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "ProfessionalsDetailPageQuery",
    "id": null,
    "text": "query ProfessionalsDetailPageQuery(\n  $rowId: UUID!\n) {\n  professional: mentalHealthProfessionalByRowId(rowId: $rowId) {\n    fullName\n    ...ProfessionalEdit_professional\n    id\n  }\n}\n\nfragment ProfessionalEdit_professional on MentalHealthProfessional {\n  rowId\n  dateOfBirth\n  email\n  title\n  firstName\n  gender\n  lastName\n  fullName\n  type\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3df20312100397137ef9c71812687505';
export default node;
