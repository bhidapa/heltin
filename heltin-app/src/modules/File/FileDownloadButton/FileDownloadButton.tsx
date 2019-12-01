/**
 *
 * FileDownloadButton
 *
 */

import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';

// relay
import { graphql, QueryRenderer } from 'react-relay';
import { environment } from 'relay/environment';
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
    <QueryRenderer<FileDownloadButtonQuery>
      environment={environment}
      query={graphql`
        query FileDownloadButtonQuery($rowId: UUID!) {
          file: fileByRowId(rowId: $rowId) {
            name
            data
          }
        }
      `}
      variables={{ rowId: fileRowId }}
      render={({ props: data, error, retry }) => {
        if (error) {
          return (
            <Button variant="link" color="danger" onClick={retry!}>
              {error.message}
              &nbsp;
              <FormattedMessage id="TRY_AGAIN" />?
            </Button>
          );
        }
        if (!data) {
          return (
            <Button {...rest} disabled>
              <FormattedMessage id="DOWNLOADING" />
              ...
            </Button>
          );
        }
        if (!data.file) {
          return (
            <Button variant="link" color="danger" onClick={retry!}>
              File not found. &nbsp;
              <FormattedMessage id="TRY_AGAIN" />?
            </Button>
          );
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
    />
  );
};
