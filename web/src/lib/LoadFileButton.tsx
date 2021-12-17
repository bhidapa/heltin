/**
 *
 * LoadFileButton
 *
 */

import React, { useEffect, useRef, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { makeLink } from './makeLink';
import { usePanic } from './usePanic';
import { Button, ButtonProps } from '@domonda/ui/Button';

export interface LoadFileButtonProps extends Omit<ButtonProps, 'onClick'> {
  url: string;
  download?: boolean;
  onFileUrl?: (fileUrl: string) => void;
  fileUrlReady?: (fileUrl: string, reset: () => void) => React.ReactNode;
}

export const LoadFileButton: React.FC<LoadFileButtonProps> = (props) => {
  const { children, url, download, onLoad, onFileUrl, fileUrlReady, ...rest } = props;

  const [panic] = usePanic();

  const ctrlRef = useRef(null as null | AbortController);
  useEffect(() => () => ctrlRef.current?.abort(), []);

  const [{ loading, fileUrl }, setState] = useState({
    loading: false,
    fileUrl: '',
  });

  if (fileUrl) {
    if (fileUrlReady)
      return <>{fileUrlReady(fileUrl, () => setState({ loading: false, fileUrl: '' }))}</>;
    return (
      <Button
        {...rest}
        component={makeLink({
          native: true,
          download,
          to: fileUrl,
        })}
      >
        {download ? <FormattedMessage id="DOWNLOAD" /> : <FormattedMessage id="OPEN_FILE" />}
      </Button>
    );
  }

  if (loading) {
    return (
      <Button {...rest} disabled>
        <FormattedMessage id="LOADING" />
        ...
      </Button>
    );
  }

  return (
    <Button
      {...rest}
      onClick={() => {
        (async () => {
          setState({ loading: true, fileUrl: '' });

          ctrlRef.current = new AbortController();
          const res = await fetch(url, { method: 'PUT', signal: ctrlRef.current.signal });
          const body = await res.text();
          if (!res.ok) throw new Error(body || res.statusText);
          ctrlRef.current = null;

          setState({ loading: false, fileUrl: '/api/file/' + body });
          onFileUrl?.(body);
        })().catch(panic);
      }}
    >
      {children}
    </Button>
  );
};
