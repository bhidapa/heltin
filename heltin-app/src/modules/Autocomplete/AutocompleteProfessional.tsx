/**
 *
 * AutocompleteProfessional
 *
 */

import React, { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { AutocompletePropsWith } from './types';

// relay
import { graphql, QueryRenderer, WithoutRefType } from 'react-relay';
import { environment } from 'relay/environment';
import { AutocompleteProfessionalQuery } from 'relay/artifacts/AutocompleteProfessionalQuery.graphql';
import { AutocompleteProfessional_item } from 'relay/artifacts/AutocompleteProfessional_item.graphql';

// ui
import { useDebouncedState } from '@domonda/react-plumb';
import {
  Autocomplete,
  AutocompleteGetItemId,
  AutocompleteItemToString,
} from '@domonda/ui/Autocomplete';

graphql`
  fragment AutocompleteProfessional_item on MentalHealthProfessional {
    id
    rowId
    fullName
  }
`;

export type AutocompleteProfessionalItem = WithoutRefType<AutocompleteProfessional_item>;

export type AutocompleteProfessionalProps = AutocompletePropsWith<AutocompleteProfessionalItem>;

export const AutocompleteProfessional: React.FC<AutocompleteProfessionalProps> = (props) => {
  const getItemId = useCallback<AutocompleteGetItemId<AutocompleteProfessionalItem>>(
    (item) => (item ? item.id : ''),
    [],
  );
  const itemToString = useCallback<AutocompleteItemToString<AutocompleteProfessionalItem>>(
    (item) => (item ? item.fullName : ''),
    [],
  );

  const [searchText, setSearchText] = useDebouncedState<string | null>(300, null);

  return (
    <QueryRenderer<AutocompleteProfessionalQuery>
      environment={environment}
      query={graphql`
        query AutocompleteProfessionalQuery($searchText: String) {
          filterMentalHealthProfessionals(searchText: $searchText) {
            nodes {
              ...AutocompleteProfessional_item @relay(mask: false)
            }
          }
        }
      `}
      variables={{ searchText }}
      render={({ props: data }) => (
        <Autocomplete<AutocompleteProfessionalItem>
          items={data ? data.filterMentalHealthProfessionals.nodes : []}
          label={<FormattedMessage id="PROFESSIONAL" />}
          getItemId={getItemId}
          itemToString={itemToString}
          onInputValueChange={setSearchText}
          {...props}
        />
      )}
    />
  );
};
