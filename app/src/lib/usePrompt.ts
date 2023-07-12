/**
 *
 * usePrompt

 *
 */
import { useIntl } from 'react-intl';

import { usePrompt } from '@tanstack/react-location';

export { usePrompt };

export function useUnsavedChangesPrompt(when: boolean) {
  const intl = useIntl();
  usePrompt(intl.formatMessage({ id: 'UNSAVED_CHANGES_PROMPT' }), when);
}

export function usePendingFileUploadsPrompt(when: boolean) {
  const intl = useIntl();
  usePrompt(intl.formatMessage({ id: 'PENDING_UPLOADS_PROMPT' }), when);
}
