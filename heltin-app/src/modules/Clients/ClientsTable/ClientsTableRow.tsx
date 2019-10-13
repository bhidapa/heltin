/**
 *
 * ClientsTableRow
 *
 */

import React from 'react';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { ClientsTableRow_item } from 'relay/artifacts/ClientsTableRow_item.graphql';

// ui
import { makeRow } from '@domonda/ui/Row';

const { RowHeader: ClientsTableRowHeader, RowItem } = makeRow<ClientsTableRow_item>({
  columns: [
    {
      width: 124,
      flexGrow: 1,
      HeaderCell: 'Number',
      ItemCell: function ItemCell({ item }) {
        return <span>{item.number}</span>;
      },
    },
    {
      width: 256,
      flexGrow: 1,
      HeaderCell: 'First name',
      ItemCell: function ItemCell({ item }) {
        return <span>{item.firstName}</span>;
      },
    },
    {
      width: 256,
      flexGrow: 1,
      HeaderCell: 'Last name',
      ItemCell: function ItemCell({ item }) {
        return <span>{item.lastName}</span>;
      },
    },
  ],
});

export { ClientsTableRowHeader };

export const ClientsTableRow = createFragmentContainer(RowItem, {
  item: graphql`
    fragment ClientsTableRow_item on Client {
      number
      firstName
      lastName
    }
  `,
});
