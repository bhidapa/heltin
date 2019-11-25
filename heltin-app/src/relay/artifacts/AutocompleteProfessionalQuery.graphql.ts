/* tslint:disable */

import { ConcreteRequest } from "relay-runtime";
export type AutocompleteProfessionalQueryVariables = {
    searchText?: string | null;
};
export type AutocompleteProfessionalQueryResponse = {
    readonly filterMentalHealthProfessionals: {
        readonly nodes: ReadonlyArray<{
            readonly id: string;
            readonly rowId: string;
            readonly fullName: string;
        }>;
    };
};
export type AutocompleteProfessionalQuery = {
    readonly response: AutocompleteProfessionalQueryResponse;
    readonly variables: AutocompleteProfessionalQueryVariables;
};



/*
query AutocompleteProfessionalQuery(
  $searchText: String
) {
  filterMentalHealthProfessionals(searchText: $searchText) {
    nodes {
      id
      rowId
      fullName
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "searchText",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "filterMentalHealthProfessionals",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "searchText",
        "variableName": "searchText"
      }
    ],
    "concreteType": "MentalHealthProfessionalsConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "nodes",
        "storageKey": null,
        "args": null,
        "concreteType": "MentalHealthProfessional",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
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
            "name": "fullName",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "AutocompleteProfessionalQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "AutocompleteProfessionalQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "AutocompleteProfessionalQuery",
    "id": null,
    "text": "query AutocompleteProfessionalQuery(\n  $searchText: String\n) {\n  filterMentalHealthProfessionals(searchText: $searchText) {\n    nodes {\n      id\n      rowId\n      fullName\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '5c512b03299d7e7d4a9de195c8cef1d0';
export default node;
