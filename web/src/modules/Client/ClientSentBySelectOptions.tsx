/**
 *
 * ClientSentBySelectOptions
 *
 */

import React from 'react';
import { ClientSentBy } from './ClientSentBy';
import { FormattedMessage } from 'react-intl';

export { ClientSentBy };

export interface ClientSentBySelectOptionsProps {
  disableEmptyOption?: boolean;
}

export const ClientSentBySelectOptions: React.FC<ClientSentBySelectOptionsProps> = React.memo(
  function ClientSentBySelectOptions({ disableEmptyOption }) {
    return (
      <>
        <option value="" disabled={disableEmptyOption}>
          &mdash;
        </option>
        {Object.values(ClientSentBy).map((value) => (
          <FormattedMessage id={value} key={value}>
            {(text) => <option value={value}>{text}</option>}
          </FormattedMessage>
        ))}
      </>
    );
  },
);
