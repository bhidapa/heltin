/**
 *
 * AutocompleteUser
 *
 */
import React, { useCallback, useTransition } from 'react';
import { FormattedMessage } from 'react-intl';
import { useRefetchableFragment } from 'react-relay';
import { Autocomplete, AutocompletePropsWith } from 'lib/Autocomplete';
import { graphql, WithoutFragmentType } from 'lib/relay';
import { debounce } from 'lib/utils';
import { AutocompleteUser_item$data } from './__generated__/AutocompleteUser_item.graphql';
import { AutocompleteUser_query$key } from './__generated__/AutocompleteUser_query.graphql';
import { AutocompleteUserRefetchQuery } from './__generated__/AutocompleteUserRefetchQuery.graphql';

graphql`
  fragment AutocompleteUser_item on User {
    id
    rowId
    email
  }
`;

export type AutocompleteUserItem = WithoutFragmentType<AutocompleteUser_item$data>;

export interface AutocompleteUserProps extends AutocompletePropsWith<AutocompleteUserItem> {
  query: AutocompleteUser_query$key;
}

export const AutocompleteUser: React.FC<AutocompleteUserProps> = (props) => {
  const [isPending, startTransition] = useTransition();
  const [{ filterUsers }, refetch] = useRefetchableFragment<
    AutocompleteUserRefetchQuery,
    AutocompleteUser_query$key
  >(
    graphql`
      fragment AutocompleteUser_query on Query
      @refetchable(queryName: "AutocompleteUserRefetchQuery")
      @argumentDefinitions(q: { type: "String" }) {
        filterUsers(first: 10, searchText: $q) @required(action: THROW) {
          nodes {
            ...AutocompleteUser_item @relay(mask: false)
          }
        }
      }
    `,
    props.query,
  );

  const debouncedRefetch = useCallback(
    debounce((...args: Parameters<typeof refetch>) => {
      startTransition(() => {
        refetch(...args);
      });
    }, 500),
    [refetch],
  );

  return (
    <Autocomplete
      label={<FormattedMessage id="USER" />}
      {...props}
      items={filterUsers.nodes}
      pleaseWait={isPending}
      getItemId={(i) => filterUsers.nodes[i]?.id || ''}
      itemToString={(item) => item?.email || ''}
      onInputValueChange={(changes) =>
        debouncedRefetch({
          q: changes.inputValue === changes.selectedItem?.email ? null : changes.inputValue,
        })
      }
    />
  );
};
