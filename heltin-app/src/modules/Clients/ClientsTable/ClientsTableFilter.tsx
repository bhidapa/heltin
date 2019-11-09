/**
 *
 * ClientsTableFilter
 *
 */

import React from 'react';

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
              <FormInputField path="searchText">
                {({ inputProps }) => <Input {...inputProps} autoFocus placeholder="Search" />}
              </FormInputField>
            </Flex>
          </Flex>
        </Form>
      </Flex>
    </Flex>
  );
};
