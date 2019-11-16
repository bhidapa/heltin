/**
 *
 * clientsQueryParams
 *
 */

import { CLIENTS_PAGE_ROUTE } from 'lib/routes';
import {
  QueryModel,
  UseQueryParamsProps,
  UseQueryParamsReturn,
  useQueryParams,
} from '@domonda/query-params';

export interface CompaniesQueryParams {
  count: number;
  searchText: string | null;
}

export const companiesQueryModel: QueryModel<CompaniesQueryParams> = {
  count: {
    type: 'number',
    defaultValue: 20,
  },
  searchText: {
    type: 'string',
    defaultValue: null,
  },
};

export function useProfessionalsQueryParams(
  props?: UseQueryParamsProps,
): UseQueryParamsReturn<CompaniesQueryParams> {
  const [params, setParams] = useQueryParams(companiesQueryModel, {
    ...props,
    onPathname: CLIENTS_PAGE_ROUTE,
  });
  return [params, setParams];
}
