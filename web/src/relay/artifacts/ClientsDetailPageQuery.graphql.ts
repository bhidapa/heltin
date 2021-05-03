/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type ClientsDetailPageQueryVariables = {
    rowId: string;
};
export type ClientsDetailPageQueryResponse = {
    readonly viewer: {
        readonly isAdmin: boolean;
        readonly isMentalHealthProfessional: boolean;
    } | null;
    readonly client: {
        readonly rowId: string;
        readonly fullName: string;
        readonly caseStudies: {
            readonly nodes: ReadonlyArray<{
                readonly rowId: string;
                readonly " $fragmentRefs": FragmentRefs<"CaseStudyView_caseStudy">;
            }>;
        };
        readonly " $fragmentRefs": FragmentRefs<"ClientEdit_client" | "ClientAssignedProfessionalsManage_client">;
    } | null;
};
export type ClientsDetailPageQuery = {
    readonly response: ClientsDetailPageQueryResponse;
    readonly variables: ClientsDetailPageQueryVariables;
};



/*
query ClientsDetailPageQuery(
  $rowId: UUID!
) {
  viewer {
    isAdmin
    isMentalHealthProfessional
    id
  }
  client: clientByRowId(rowId: $rowId) {
    rowId
    fullName
    ...ClientEdit_client
    ...ClientAssignedProfessionalsManage_client
    caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {
      nodes {
        rowId
        ...CaseStudyView_caseStudy
        id
      }
    }
    id
  }
}

fragment CaseStudyTreatmentRow_item on CaseStudyTreatment {
  rowId
  caseStudyRowId
  title
  startedAt
  endedAt
}

fragment CaseStudyView_caseStudy on CaseStudy {
  rowId
  title
  caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {
    nodes {
      rowId
      ...CaseStudyTreatmentRow_item
      id
    }
  }
  caseStudyConclusions: caseStudyConclusionsByCaseStudyRowId {
    nodes {
      rowId
      type
      id
    }
  }
}

fragment ClientAssignedProfessionalsManage_client on Client {
  rowId
  latestAssignedTherapist: latestAssignedMentalHealthProfessional {
    therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {
      fullName
      id
    }
    id
  }
  assignedTherapists: clientAssignedMentalHealthProfessionalsByClientRowId(orderBy: [CREATED_AT_ASC]) {
    nodes {
      id
      rowId
      therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {
        rowId
        type
        fullName
        id
      }
      createdAt
    }
  }
}

fragment ClientEdit_client on Client {
  rowId
  fullName
  number
  firstName
  lastName
  dateOfBirth
  telephone
  gender
  city
  address
  sentBy
  email
  discrete
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isAdmin",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMentalHealthProfessional",
  "storageKey": null
},
v3 = [
  {
    "kind": "Variable",
    "name": "rowId",
    "variableName": "rowId"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "fullName",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "orderBy",
    "value": [
      "CREATED_AT_DESC"
    ]
  }
],
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ClientsDetailPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "client",
        "args": (v3/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": "caseStudies",
            "args": (v6/*: any*/),
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
                  (v4/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CaseStudyView_caseStudy"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClientEdit_client"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ClientAssignedProfessionalsManage_client"
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
    "name": "ClientsDetailPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          (v7/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": "client",
        "args": (v3/*: any*/),
        "concreteType": "Client",
        "kind": "LinkedField",
        "name": "clientByRowId",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          (v5/*: any*/),
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
            "name": "telephone",
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
            "name": "city",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "address",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "sentBy",
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
            "name": "discrete",
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
                  (v5/*: any*/),
                  (v7/*: any*/)
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
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
                  (v7/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": "therapist",
                    "args": null,
                    "concreteType": "MentalHealthProfessional",
                    "kind": "LinkedField",
                    "name": "mentalHealthProfessionalByMentalHealthProfessionalRowId",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v8/*: any*/),
                      (v5/*: any*/),
                      (v7/*: any*/)
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
          },
          {
            "alias": "caseStudies",
            "args": (v6/*: any*/),
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
                  (v4/*: any*/),
                  (v9/*: any*/),
                  {
                    "alias": "caseStudyTreatments",
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "orderBy",
                        "value": [
                          "STARTED_AT_DESC"
                        ]
                      }
                    ],
                    "concreteType": "CaseStudyTreatmentsConnection",
                    "kind": "LinkedField",
                    "name": "caseStudyTreatmentsByCaseStudyRowId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseStudyTreatment",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "caseStudyRowId",
                            "storageKey": null
                          },
                          (v9/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "startedAt",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "endedAt",
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "caseStudyTreatmentsByCaseStudyRowId(orderBy:[\"STARTED_AT_DESC\"])"
                  },
                  {
                    "alias": "caseStudyConclusions",
                    "args": null,
                    "concreteType": "CaseStudyConclusionsConnection",
                    "kind": "LinkedField",
                    "name": "caseStudyConclusionsByCaseStudyRowId",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "CaseStudyConclusion",
                        "kind": "LinkedField",
                        "name": "nodes",
                        "plural": true,
                        "selections": [
                          (v4/*: any*/),
                          (v8/*: any*/),
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "caseStudiesByClientRowId(orderBy:[\"CREATED_AT_DESC\"])"
          },
          (v7/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5c0ed472628794269bd3af2be50e5719",
    "id": null,
    "metadata": {},
    "name": "ClientsDetailPageQuery",
    "operationKind": "query",
    "text": "query ClientsDetailPageQuery(\n  $rowId: UUID!\n) {\n  viewer {\n    isAdmin\n    isMentalHealthProfessional\n    id\n  }\n  client: clientByRowId(rowId: $rowId) {\n    rowId\n    fullName\n    ...ClientEdit_client\n    ...ClientAssignedProfessionalsManage_client\n    caseStudies: caseStudiesByClientRowId(orderBy: [CREATED_AT_DESC]) {\n      nodes {\n        rowId\n        ...CaseStudyView_caseStudy\n        id\n      }\n    }\n    id\n  }\n}\n\nfragment CaseStudyTreatmentRow_item on CaseStudyTreatment {\n  rowId\n  caseStudyRowId\n  title\n  startedAt\n  endedAt\n}\n\nfragment CaseStudyView_caseStudy on CaseStudy {\n  rowId\n  title\n  caseStudyTreatments: caseStudyTreatmentsByCaseStudyRowId(orderBy: [STARTED_AT_DESC]) {\n    nodes {\n      rowId\n      ...CaseStudyTreatmentRow_item\n      id\n    }\n  }\n  caseStudyConclusions: caseStudyConclusionsByCaseStudyRowId {\n    nodes {\n      rowId\n      type\n      id\n    }\n  }\n}\n\nfragment ClientAssignedProfessionalsManage_client on Client {\n  rowId\n  latestAssignedTherapist: latestAssignedMentalHealthProfessional {\n    therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n      fullName\n      id\n    }\n    id\n  }\n  assignedTherapists: clientAssignedMentalHealthProfessionalsByClientRowId(orderBy: [CREATED_AT_ASC]) {\n    nodes {\n      id\n      rowId\n      therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {\n        rowId\n        type\n        fullName\n        id\n      }\n      createdAt\n    }\n  }\n}\n\nfragment ClientEdit_client on Client {\n  rowId\n  fullName\n  number\n  firstName\n  lastName\n  dateOfBirth\n  telephone\n  gender\n  city\n  address\n  sentBy\n  email\n  discrete\n}\n"
  }
};
})();
(node as any).hash = 'ae41ab38711def8ca036a214799e51c0';
export default node;
