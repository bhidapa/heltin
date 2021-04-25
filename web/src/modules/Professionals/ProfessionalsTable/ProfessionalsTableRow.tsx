/**
 *
 * ProfessionalsTableRow
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { makeLink } from 'lib/makeLink';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import {
  ProfessionalsTableRow_item,
  ProfessionalsTableRow_item$key,
} from 'relay/artifacts/ProfessionalsTableRow_item.graphql';

// ui
import { makeRow } from '@domonda/ui/Row';
import { Text } from '@domonda/ui/Text';
import { PROFESSIONALS_PAGE_ROUTE } from 'lib/routes';

const { RowHeader: ProfessionalsTableRowHeader, RowItem } = makeRow<ProfessionalsTableRow_item>({
  columns: [
    {
      width: 124,
      flexGrow: 1,
      HeaderCell: <FormattedMessage id="TYPE" />,
      ItemCell: function ItemCell({ item }) {
        return <FormattedMessage id={item.type} />;
      },
    },
    {
      width: 92,
      flexGrow: 1,
      HeaderCell: <FormattedMessage id="PROFESSIONAL_TITLE" />,
      ItemCell: function ItemCell({ item }) {
        return <span>{item.title}</span>;
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
    {
      width: 92,
      HeaderCell: <FormattedMessage id="DISABLED" />,
      ItemCell: function ItemCell({ item }) {
        return item.disabled ? (
          <Text weight="semiBold">
            <FormattedMessage id="YES" />
          </Text>
        ) : (
          <Text color="gray40">
            <FormattedMessage id="NO" />
          </Text>
        );
      },
    },
  ],
});

export { ProfessionalsTableRowHeader };

export interface ProfessionalsTableRowProps {
  item: ProfessionalsTableRow_item$key;
}

export const ProfessionalsTableRow: React.FC<ProfessionalsTableRowProps> = (props) => {
  const item = useFragment(
    graphql`
      fragment ProfessionalsTableRow_item on MentalHealthProfessional {
        rowId
        type
        title
        firstName
        lastName
        disabled
      }
    `,
    props.item,
  );

  return (
    <RowItem
      item={item}
      component={makeLink({
        to: `${PROFESSIONALS_PAGE_ROUTE}/${item.rowId}`,
        omit: ['item'],
      })}
    />
  );
};
