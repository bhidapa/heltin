/**
 *
 * ErrBoundary
 *
 */
import React from 'react';
import { FormattedMessage } from 'react-intl';

export class ErrBoundary extends React.PureComponent<{ children: React.ReactElement }> {
  override state: { error: Error | null } = { error: null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  override render() {
    const { error } = this.state;
    if (error) {
      return (
        <div className="card">
          <h2 className="card-title text-danger">
            <i className="fa-solid fa-bug"></i>
            &nbsp;
            <FormattedMessage id="OOPS_SOMETHING_WENT_WRONG" />
          </h2>
          <details className="collapse-panel" open>
            <summary className="collapse-header text-muted">
              <FormattedMessage id="SHOW_ERROR_DETAILS" />
            </summary>
            <div className="collapse-content">
              <pre className="text-wrap text-break" style={{ wordBreak: 'break-word' }}>
                {error.message}
              </pre>
            </div>
          </details>
          <div className="text-right mt-20">
            <button className="btn" onClick={() => this.setState({ error: null })}>
              <i className="fa-solid fa-rotate-left"></i>
              &nbsp;
              <FormattedMessage id="TRY_AGAIN" />
            </button>
          </div>
        </div>
      );
    }
    return <>{this.props.children}</>;
  }
}
