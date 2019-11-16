/**
 *
 * ProfessionalsTableRow
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, createFragmentContainer } from 'react-relay';
import { ProfessionalsTableRow_item } from 'relay/artifacts/ProfessionalsTableRow_item.graphql';

// ui
import { makeRow } from '@domonda/ui/Row';

const { RowHeader: ProfessionalsTableRowHeader, RowItem } = makeRow<ProfessionalsTableRow_item>({
  columns: [
    {
      width: 124,
      flexGrow: 1,
      HeaderCell: <FormattedMessage id="TYPE" />,
      ItemCell: function ItemCell({ item }) {
        return <span>{item.number}</span>;
      },
    },
    {
      width: 256,
      flexGrow: 1,
      HeaderCell: <FormattedMessage id="NAME" />,
      ItemCell: function ItemCell({ item }) {
        return <span>{item.firstName}</span>;
      },
    },
    {
      width: 256,
      flexGrow: 1,
      HeaderCell: <FormattedMessage id="SURNAME" />,
      ItemCell: function ItemCell({ item }) {
        return <span>{item.lastName}</span>;
      },
    },
  ],
});

export { ProfessionalsTableRowHeader };

export const ProfessionalsTableRow = createFragmentContainer(RowItem, {
  item: graphql`
    fragment ProfessionalsTableRow_item on MentalHealthProfessional {
      type
      firstName
      lastName
    }
  `,
});
