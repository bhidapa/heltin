import { AutocompleteProps } from '@domonda/ui/Autocomplete';

// Just a helper type which omits autocomplete props injected by the modules.
export type AutocompletePropsWith<T> = Omit<
  AutocompleteProps<T>,
  'items' | 'getItemId' | 'itemToString' | 'onInputValueChange'
>;
