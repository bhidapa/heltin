/**
 *
 * RootSearch
 *
 */
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { useNavigate } from '@tanstack/react-location';

import { LocationGenerics } from 'core/location';

export interface RootSearchProps {}

export const RootSearch: React.FC<RootSearchProps> = () => {
  const navigate = useNavigate<LocationGenerics>();

  const searchRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      // only works if no input is focused
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName || '')) {
        return;
      }

      // "s" for clients search focus
      if (event.key.toLowerCase() === 's') {
        event.preventDefault(); // prevent typing in the "s" letter in the search field after focus
        searchRef.current?.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const { register, handleSubmit } = useForm({
    defaultValues: { q: '' },
  });
  const { ref, ...rest } = register('q');

  return (
    <form
      onSubmit={handleSubmit(({ q }) => {
        navigate({
          to: '/clients',
          search: {
            q: q || undefined,
          },
        });
      })}
    >
      <div className="input-group">
        <FormattedMessage id="SEARCH_CLIENTS">
          {([msg]) => (
            <input
              {...rest}
              ref={(el) => {
                ref(el);
                searchRef.current = el;
              }}
              type="search"
              className="form-control"
              placeholder={msg?.toString() + '...'}
            />
          )}
        </FormattedMessage>
        <div className="input-group-append">
          <button type="submit" className="btn">
            <i className="fa-solid fa-magnifying-glass"></i>
            <span className="sr-only">
              <FormattedMessage id="SEARCH" />
            </span>
          </button>
        </div>
      </div>

      <div className="mt-10 font-size-12">
        <FormattedMessage
          id="PRESS_KBD_TO_FOCUS"
          values={{
            kbd: <kbd>s</kbd>,
          }}
        />
      </div>
    </form>
  );
};
