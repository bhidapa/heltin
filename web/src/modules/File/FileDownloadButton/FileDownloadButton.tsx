/**
 *
 * FileDownloadButton
 *
 */

import React, { Suspense, useState } from 'react';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, LazyLoadQuery } from 'relay/components';
import { FileDownloadButtonQuery } from 'relay/artifacts/FileDownloadButtonQuery.graphql';

// ui
import { Button, ButtonProps } from '@domonda/ui/Button';

export interface FileDownloadButtonProps extends Omit<ButtonProps, 'onClick'> {
  fileRowId: UUID;
}

export const FileDownloadButton: React.FC<FileDownloadButtonProps> = (props) => {
  const { children, fileRowId, ...rest } = props;
  const [download, setDownload] = useState(false);

  if (!download) {
    return (
      <Button {...rest} onClick={() => setDownload(true)}>
        <FormattedMessage id="DOWNLOAD" />
      </Button>
    );
  }

  return (
    <Suspense
      fallback={
        <Button {...rest} disabled>
          <FormattedMessage id="DOWNLOADING" />
          ...
        </Button>
      }
    >
      <LazyLoadQuery<FileDownloadButtonQuery>
        query={graphql`
          query FileDownloadButtonQuery($rowId: UUID!) {
            file: fileByRowId(rowId: $rowId) {
              name
              data
            }
          }
        `}
        variables={{ rowId: fileRowId }}
      >
        {(data) => {
          if (!data.file) {
            throw new Error('File not found');
          }
          return (
            <Button
              {...rest}
              component={({ children, ...rest }) => (
                <a
                  {...rest}
                  href={`data:application/octet-stream;base64,${data.file!.data}`}
                  download={data.file!.name}
                >
                  {children}
                </a>
              )}
            >
              <FormattedMessage id="SAVE" />
            </Button>
          );
        }}
      </LazyLoadQuery>
    </Suspense>
  );
};
