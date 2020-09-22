/**
 *
 * DismissableAlert
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

// ui
import { Alert, AlertProps } from '@domonda/ui/Alert';
import { Button } from '@domonda/ui/Button';

export interface DismissableAlertProps extends Omit<AlertProps, 'actions'> {
  autoFocusDismiss?: boolean;
  onDismiss: () => void;
}

export const DismissableAlert: React.FC<DismissableAlertProps> = (props) => {
  const { children, autoFocusDismiss, onDismiss, ...rest } = props;
  return (
    <Alert
      {...rest}
      actions={
        <Button variant="link" color="white" onClick={onDismiss}>
          <FormattedMessage id="HIDE" />
        </Button>
      }
    />
  );
};
