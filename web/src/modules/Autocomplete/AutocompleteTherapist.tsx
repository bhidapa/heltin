/**
 *
 * AutocompleteTherapist
 *
 */
import React, { useCallback, useTransition } from 'react';
import { FormattedMessage } from 'react-intl';
import { graphql, useRefetchableFragment } from 'react-relay';

import { Autocomplete, AutocompletePropsWith } from 'lib/Autocomplete';
import { WithoutFragmentType } from 'lib/relay';
import { debounce } from 'lib/utils';

import { AutocompleteTherapistRefetchQuery } from './__generated__/AutocompleteTherapistRefetchQuery.graphql';
import { AutocompleteTherapist_item$data } from './__generated__/AutocompleteTherapist_item.graphql';
import { AutocompleteTherapist_query$key } from './__generated__/AutocompleteTherapist_query.graphql';

graphql`
  fragment AutocompleteTherapist_item on Therapist {
    id
    rowId
    fullName
  }
`;

export type AutocompleteTherapistItem = WithoutFragmentType<AutocompleteTherapist_item$data>;

export interface AutocompleteTherapistProps
  extends AutocompletePropsWith<AutocompleteTherapistItem> {
  query: AutocompleteTherapist_query$key;
}

export const AutocompleteTherapist: React.FC<AutocompleteTherapistProps> = (props) => {
  const [isPending, startTransition] = useTransition();
  const [{ filterTherapists }, refetch] = useRefetchableFragment<
    AutocompleteTherapistRefetchQuery,
    AutocompleteTherapist_query$key
  >(
    graphql`
      fragment AutocompleteTherapist_query on Query
      @refetchable(queryName: "AutocompleteTherapistRefetchQuery")
      @argumentDefinitions(q: { type: "String" }) {
        filterTherapists(first: 10, searchText: $q, disabled: false) @required(action: THROW) {
          nodes {
            ...AutocompleteTherapist_item @relay(mask: false)
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
      label={<FormattedMessage id="THERAPIST" />}
      {...props}
      items={filterTherapists.nodes}
      pleaseWait={isPending}
      getItemId={(i) => filterTherapists.nodes[i].id}
      itemToString={(item) => item?.fullName || ''}
      onInputValueChange={(changes) =>
        debouncedRefetch({
          q: changes.inputValue === changes.selectedItem?.fullName ? null : changes.inputValue,
        })
      }
    />
  );
};
