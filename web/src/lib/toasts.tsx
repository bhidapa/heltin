/**
 *
 * useToasts
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ToastContainer, ToastPromiseParams, toast } from 'react-toastify';

import { useDarkMode } from 'lib/useDarkMode';

/** Container where the toasts will be displayed. */
export const ToastsContainer: React.FC = () => {
  const [darkMode] = useDarkMode();
  return (
    <ToastContainer
      autoClose={5_000}
      newestOnTop
      pauseOnHover
      closeOnClick={false}
      draggable={false}
      theme={darkMode ? 'dark' : 'light'}
    />
  );
};

/** Displays an error toast. */
export function errorToast(error: Error) {
  return toast.error(
    <pre className="text-wrap text-break my-0" style={{ wordBreak: 'break-word' }}>
      {error.message}
    </pre>,
  );
}

/**
 * Displays a promise progress toast. The toast will represent
 * the 3 states of the promise: pending, error and success.
 */
export function promiseToast<T>(promise: Promise<T>, params: ToastPromiseParams<T>): Promise<T> {
  return toast.promise<T>(promise, params);
}

/**
 * Displays a create progress toast. The toast will represent
 * the 3 states of the promise: pending, error and success.
 */
export function createToast<T>(promise: Promise<T>): Promise<T> {
  return promiseToast(promise, {
    success: {
      render: () => {
        return <FormattedMessage id="CREATE_SUCCESS" />;
      },
    },
    pending: {
      render: () => {
        return <FormattedMessage id="CREATE_IN_PROGRESS" />;
      },
    },
    error: {
      render: (props) => {
        const error = props.data as Error;
        return (
          <pre className="text-wrap text-break my-0" style={{ wordBreak: 'break-word' }}>
            {error.message}
          </pre>
        );
      },
    },
  });
}

/**
 * Displays an add progress toast. The toast will represent
 * the 3 states of the promise: pending, error and success.
 */
export function addToast<T>(promise: Promise<T>): Promise<T> {
  return promiseToast(promise, {
    success: {
      render: () => {
        return <FormattedMessage id="ADD_SUCCESS" />;
      },
    },
    pending: {
      render: () => {
        return <FormattedMessage id="ADD_IN_PROGRESS" />;
      },
    },
    error: {
      render: (props) => {
        const error = props.data as Error;
        return (
          <pre className="text-wrap text-break my-0" style={{ wordBreak: 'break-word' }}>
            {error.message}
          </pre>
        );
      },
    },
  });
}

/**
 * Displays a save progress toast. The toast will represent
 * the 3 states of the promise: pending, error and success.
 */
export function saveToast<T>(promise: Promise<T>): Promise<T> {
  return promiseToast(promise, {
    success: {
      render: () => {
        return <FormattedMessage id="SAVE_SUCCESS" />;
      },
    },
    pending: {
      render: () => {
        return <FormattedMessage id="SAVE_IN_PROGRESS" />;
      },
    },
    error: {
      render: (props) => {
        const error = props.data as Error;
        return (
          <pre className="text-wrap text-break my-0" style={{ wordBreak: 'break-word' }}>
            {error.message}
          </pre>
        );
      },
    },
  });
}

/**
 * Displays a delete progress toast. The toast will represent
 * the 3 states of the promise: pending, error and success.
 */
export function deleteToast<T>(promise: Promise<T>): Promise<T> {
  return promiseToast(promise, {
    success: {
      render: () => {
        return <FormattedMessage id="DELETE_SUCCESS" />;
      },
    },
    pending: {
      render: () => {
        return <FormattedMessage id="DELETE_IN_PROGRESS" />;
      },
    },
    error: {
      render: (props) => {
        const error = props.data as Error;
        return (
          <pre className="text-wrap text-break my-0" style={{ wordBreak: 'break-word' }}>
            {error.message}
          </pre>
        );
      },
    },
  });
}

/**
 * Displays a file upload progress toast. The toast will represent
 * the 3 states of the promise: pending, error and success.
 */
export function fileUploadToast<T>(promise: Promise<T>): Promise<T> {
  return promiseToast(promise, {
    success: {
      render: () => {
        return <FormattedMessage id="FILE_UPLOAD_SUCCESS" />;
      },
    },
    pending: {
      render: () => {
        return <FormattedMessage id="FILE_UPLOAD_IN_PROGRESS" />;
      },
    },
    error: {
      render: (props) => {
        const error = props.data as Error;
        return (
          <pre className="text-wrap text-break my-0" style={{ wordBreak: 'break-word' }}>
            {error.message}
          </pre>
        );
      },
    },
  });
}

/**
 * Displays a report building progress toast. The toast will represent
 * the 3 states of the promise: pending, error and success.
 */
export function buildReportToast<T>(promise: Promise<T>): Promise<T> {
  return promiseToast(promise, {
    success: {
      render: () => {
        return <FormattedMessage id="BUILD_REPORT_SUCCESS" />;
      },
    },
    pending: {
      render: () => {
        return <FormattedMessage id="BUILD_REPORT_IN_PROGRESS" />;
      },
    },
    error: {
      render: (props) => {
        const error = props.data as Error;
        return (
          <pre className="text-wrap text-break my-0" style={{ wordBreak: 'break-word' }}>
            {error.message}
          </pre>
        );
      },
    },
  });
}

/**
 * Displays a printing progress toast. The toast will represent
 * the 3 states of the promise: pending, error and success.
 */
export function printToast<T>(promise: Promise<T>): Promise<T> {
  return promiseToast(promise, {
    success: {
      render: () => {
        return <FormattedMessage id="PRINT_START_SUCCESS" />;
      },
    },
    pending: {
      render: () => {
        return <FormattedMessage id="PRINT_START_IN_PROGRESS" />;
      },
    },
    error: {
      render: (props) => {
        const error = props.data as Error;
        return (
          <pre className="text-wrap text-break my-0" style={{ wordBreak: 'break-word' }}>
            {error.message}
          </pre>
        );
      },
    },
  });
}
