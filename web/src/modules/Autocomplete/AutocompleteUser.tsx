/**
 *
 * AutocompleteUser
 *
 */

import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { AutocompletePropsWith } from './types';

// relay
import { graphql, QueryRenderer, WithoutRefType } from 'react-relay';
import { environment } from 'relay/environment';
import { AutocompleteUserQuery } from 'relay/artifacts/AutocompleteUserQuery.graphql';
import { AutocompleteUser_item } from 'relay/artifacts/AutocompleteUser_item.graphql';

// ui
import { useDebouncedState } from '@domonda/react-plumb';
import {
  Autocomplete,
  AutocompleteGetItemId,
  AutocompleteItemToString,
} from '@domonda/ui/Autocomplete';

graphql`
  fragment AutocompleteUser_item on User {
    id
    rowId
    email
  }
`;

export type AutocompleteUserItem = WithoutRefType<AutocompleteUser_item>;

export type AutocompleteUserProps = AutocompletePropsWith<AutocompleteUserItem>;

export const AutocompleteUser: React.FC<AutocompleteUserProps> = (props) => {
  const getItemId = useCallback<AutocompleteGetItemId<AutocompleteUserItem>>(
    (item) => (item ? item.id : ''),
    [],
  );
  const itemToString = useCallback<AutocompleteItemToString<AutocompleteUserItem>>(
    (item) => (item ? item.email : ''),
    [],
  );

  const [searchText, setSearchText] = useDebouncedState<string | null>(300, null);

  return (
    <QueryRenderer<AutocompleteUserQuery>
      environment={environment}
      query={graphql`
        query AutocompleteUserQuery($searchText: String) {
          filterUsers(searchText: $searchText) {
            nodes {
              ...AutocompleteUser_item @relay(mask: false)
            }
          }
        }
      `}
      variables={{ searchText }}
      render={({ props: data }) => (
        <Autocomplete<AutocompleteUserItem>
          items={data ? data.filterUsers.nodes : []}
          label={<FormattedMessage id="USER" />}
          getItemId={getItemId}
          itemToString={itemToString}
          onInputValueChange={setSearchText}
          {...props}
        />
      )}
    />
  );
};
