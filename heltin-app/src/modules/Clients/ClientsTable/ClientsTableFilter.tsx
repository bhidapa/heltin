/**
 *
 * ClientsTableFilter
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

// ui
import { Flex, Input } from '@domonda/ui';

// form
import { Form, FormInputField } from '@domonda/react-form';

// parts
import { useClientsQueryParams } from '../clientsQueryParams';

export interface ClientsTableFilterProps {}

export const ClientsTableFilter: React.FC<ClientsTableFilterProps> = () => {
  const [params, setParams] = useClientsQueryParams();

  return (
    <Flex container direction="column" spacing="tiny">
      <Flex item>
        <Form autoSubmit defaultValues={params} onSubmit={setParams}>
          <Flex container direction="column" spacing="tiny">
            <Flex item>
              <FormattedMessage id="SEARCH">
                {(msg: string) => (
                  <FormInputField path="searchText">
                    {({ inputProps }) => <Input {...inputProps} autoFocus placeholder={msg} />}
                  </FormInputField>
                )}
              </FormattedMessage>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};
