/**
 *
 * RootSearch
 *
 */
import React from 'react';
import { useForm } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { useNavigate } from '@tanstack/react-location';

import { LocationGenerics } from 'core/location';

export interface RootSearchProps {}

export const RootSearch: React.FC<RootSearchProps> = () => {
  const navigate = useNavigate<LocationGenerics>();

  const { register, handleSubmit } = useForm({
    defaultValues: { q: '' },
  });

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
              {...register('q')}
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
    </form>
  );
};
