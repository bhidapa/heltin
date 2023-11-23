/**
 *
 * Autocomplete
 *
 */
import React, { useEffect, useId, useRef, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { usePopper } from 'react-popper';
import { useCombobox, UseComboboxProps } from 'downshift';

export interface AutocompleteProps<T> extends Omit<UseComboboxProps<T>, 'items' | 'selectedItem'> {
  items: readonly T[];
  getItemId: (index: number) => string;
  itemToString: NonNullable<UseComboboxProps<T>['itemToString']>;
  /**
   * Used specifically for the item label in the list.
   * Returning a nullish value (or not providing the prop) will use `itemToString` instead.
   */
  itemToLabel?: (item: T | null) => React.ReactNode | void;
  onChange?: (item: T | null) => void;
  value?: T | null;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  label?: React.ReactNode;
  pleaseWait?: boolean;
  name?: string;
  onBlur?: () => void;
  hideClearButtom?: boolean;
}

export type AutocompletePropsWith<T> = Omit<
  AutocompleteProps<T>,
  'items' | 'getItemId' | 'itemToString' | 'onInputValueChange'
>;

export function Autocomplete<T>(props: AutocompleteProps<T>): React.ReactElement | null {
  const {
    items,
    itemToString,
    itemToLabel,
    onChange,
    getItemId,
    value,
    required,
    disabled,
    readOnly,
    placeholder,
    autoFocus,
    label,
    pleaseWait,
    name,
    onBlur,
    hideClearButtom,
    onIsOpenChange,
    id: propsId,
    defaultHighlightedIndex,
    ...rest
  } = props;

  const uniqueId = useId();
  const id = propsId || 'Autocomplete__' + uniqueId;

  const intl = useIntl();

  const inputRef = useRef<HTMLInputElement | null>(null);
  const [referenceEl, setReferenceEl] = useState<HTMLElement | null>(null);
  const [popperEl, setPopperEl] = useState<HTMLElement | null>(null);
  const { styles, attributes, update } = usePopper(referenceEl, popperEl, {
    placement: 'bottom-start',
  });

  const {
    isOpen,
    highlightedIndex,
    selectedItem,
    toggleMenu,
    closeMenu,
    selectItem,
    getComboboxProps,
    getLabelProps,
    getInputProps,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
  } = useCombobox({
    ...rest,
    selectedItem: value,
    defaultHighlightedIndex: defaultHighlightedIndex ?? 0,
    items: items as T[],
    itemToString,
    getItemId,
    onIsOpenChange: (changes) => {
      changes.isOpen && update?.(); // update popper position on open
      onIsOpenChange?.(changes);
    },
    onSelectedItemChange: ({ selectedItem }) => {
      onChange?.(selectedItem || null);
      closeMenu();
    },
    stateReducer: (state, actionAndChanges) => {
      // deselect on blur
      const { type, changes } = actionAndChanges;
      if (type === useCombobox.stateChangeTypes.InputBlur) {
        onBlur?.();
        return {
          ...changes,
          inputValue: itemToString(changes.selectedItem ?? state.selectedItem) ?? '',
        };
      }
      return changes;
    },
  });

  useEffect(() => {
    if (required) {
      selectedItem
        ? inputRef.current?.setCustomValidity('')
        : inputRef.current?.setCustomValidity(intl.formatMessage({ id: 'PLEASE_SELECT_AN_ITEM' }));
    }
  }, [intl, required, selectedItem]);

  return (
    <>
      {label && (
        <label {...getLabelProps()} htmlFor={id} className={required ? 'required' : undefined}>
          {label}
        </label>
      )}
      <div className="input-group" {...getComboboxProps({ ref: setReferenceEl })}>
        <input
          {...getInputProps({ ref: inputRef })}
          id={id}
          name={name}
          className="form-control"
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          aria-disabled={disabled}
          readOnly={readOnly}
          autoFocus={autoFocus}
        />

        {pleaseWait && (
          <div className="input-group-append">
            <span className="input-group-text text-muted">
              <i className="fa-solid fa-hourglass"></i>
            </span>
          </div>
        )}

        {!hideClearButtom && (
          <div className="input-group-append">
            <button
              type="button"
              className="btn"
              disabled={disabled || readOnly || !selectedItem}
              aria-disabled={disabled || readOnly || !selectedItem}
              onClick={() => {
                selectItem(null as any);
                inputRef.current?.focus();
              }}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        )}

        <div className="input-group-append">
          <button
            {...getToggleButtonProps()}
            type="button"
            className="btn"
            disabled={disabled || readOnly}
            aria-disabled={disabled || readOnly}
            onClick={() => {
              toggleMenu();
              setTimeout(() => inputRef.current?.focus(), 0);
            }}
          >
            <i className="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </div>

      <div {...attributes.popper} ref={setPopperEl} style={{ ...styles.popper, zIndex: 100 }}>
        <ul
          {...getMenuProps()}
          className="dropdown-menu mt-5 py-10"
          style={{ visibility: isOpen && 'visible', padding: 0, listStyle: 'none' }}
        >
          {isOpen &&
            (items.length > 0 ? (
              <>
                {items.map((item, index) => {
                  const id = getItemId(index);
                  const isHighlighted = index === highlightedIndex;
                  const itemString = itemToString(item);
                  const isSelected = itemString === itemToString(selectedItem);
                  const itemLabel = itemToLabel?.(item);

                  return (
                    <li
                      {...getItemProps({ item, index })}
                      key={id}
                      className={
                        'dropdown-item' +
                        (isHighlighted ? ' highlighted' : '') +
                        (isSelected ? ' text-primary' : '') +
                        (index === items.length - 1 ? ' mb-0' : '') // last item has no bottom margin
                      }
                      onClick={() => selectItem(item)}
                    >
                      {itemLabel || itemString}
                    </li>
                  );
                })}
              </>
            ) : (
              <li className="text-muted mx-10 my-0">
                <FormattedMessage id="NO_RESULTS" />
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
