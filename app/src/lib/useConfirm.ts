/**
 *
 * useConfirm
 *
 */
import { useCallback } from 'react';
import { IntlShape, useIntl } from 'react-intl';

export function useConfirm() {
  const intl = useIntl();

  const confirmDelete = useCallback(
    function confirmDelete() {
      return confirm(intl.formatMessage({ id: 'ARE_YOU_SURE_DELETE' }));
    },
    [intl],
  );

  return {
    confirm: (message: string | ((intl: IntlShape) => string)) =>
      confirm(typeof message === 'function' ? message(intl) : message),
    confirmDelete,
  };
}
