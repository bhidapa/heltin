/**
 *
 * ClientsTableRow
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { CLIENTS_PAGE_ROUTE } from 'lib/routes';
import { makeLink } from 'lib/makeLink';

// relay
import { graphql, useFragment } from 'react-relay/hooks';
import {
  ClientsTableRow_item,
  ClientsTableRow_item$key,
} from 'relay/artifacts/ClientsTableRow_item.graphql';

// ui
import { makeRow } from '@domonda/ui/Row';

const { RowHeader: ClientsTableRowHeader, RowItem } = makeRow<ClientsTableRow_item>({
  columns: [
    {
      width: 64,
      HeaderCell: <FormattedMessage id="NUMBER" />,
      ItemCell: function ItemCell({ item }) {
        return <span>{item.number}</span>;
      },
    },
    {
      width: 128,
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
      width: 128,
      flexGrow: 1,
      HeaderCell: <FormattedMessage id="ASSIGNED_THERAPIST" />,
      ItemCell: function ItemCell({ item }) {
        return item.latestAssignedTherapist && item.latestAssignedTherapist.therapist.fullName;
      },
    },
    {
      width: 92,
      textAlign: 'right',
      HeaderCell: <FormattedMessage id="NUMBER_OF_TREATMENTS" />,
      ItemCell: function ItemCell({ item }) {
        return <span>{item.treatments.totalCount}</span>;
      },
    },
  ],
});

export { ClientsTableRowHeader };

export interface ClientsTableRowProps {
  item: ClientsTableRow_item$key;
}

export const ClientsTableRow: React.FC<ClientsTableRowProps> = (props) => {
  const item = useFragment(
    graphql`
      fragment ClientsTableRow_item on Client {
        rowId
        number
        firstName
        lastName
        latestAssignedTherapist: latestAssignedMentalHealthProfessional {
          therapist: mentalHealthProfessionalByMentalHealthProfessionalRowId {
            fullName
          }
        }
        treatments: caseStudyTreatmentsByCaseStudiesClientRowId {
          totalCount
        }
      }
    `,
    props.item,
  );

  return (
    <RowItem
      item={item}
      component={makeLink({
        to: `${CLIENTS_PAGE_ROUTE}/${item.rowId}`,
        omit: ['item'],
      })}
    />
  );
};
