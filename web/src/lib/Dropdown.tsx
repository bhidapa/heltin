/**
 *
 * Dropdown
 *
 */
import React, { useCallback, useState } from 'react';

import FocusTrap from 'focus-trap-react';
import { Plugin } from 'tippy.js';

import { Tooltip, TooltipProps } from 'lib/Tooltip';

const hideOnEsc: Plugin = {
  name: 'hideOnEsc',
  defaultValue: true,
  fn({ hide }) {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        hide();
      }
    }

    return {
      onShow() {
        document.addEventListener('keydown', onKeyDown);
      },
      onHide() {
        document.removeEventListener('keydown', onKeyDown);
      },
    };
  },
};

export interface DropdownProps
  extends Omit<TooltipProps, 'children' | 'interactive' | 'visible' | 'onClickOutside'> {
  children: (toggle: () => void, visible: boolean) => React.ReactElement;
}

export const Dropdown: React.FC<DropdownProps> = (props) => {
  const { children, content, ...rest } = props;

  const [visible, setVisible] = useState(false);

  return (
    <Tooltip
      {...rest}
      arrow={false}
      plugins={[hideOnEsc]}
      interactive
      visible={visible}
      onClickOutside={() => setVisible(false)}
      className="Dropdown__tooltip"
      onHide={() => {
        // correct state if hidden with escape
        if (visible) {
          setVisible(false);
        }
      }}
      content={
        <FocusTrap
          active={visible}
          focusTrapOptions={{
            allowOutsideClick: true,
            tabbableOptions: {
              // could be that the contents are not immediately available, displayCheck: 'full' will raise an error
              // TODO: properly investigate and fix
              displayCheck: 'none',
            },
          }}
        >
          <div className="dropdown-menu" style={{ position: 'relative', visibility: 'visible' }}>
            {content}
          </div>
        </FocusTrap>
      }
    >
      {children(
        useCallback(() => setVisible((visible) => !visible), []),
        visible,
      )}
    </Tooltip>
  );
};
