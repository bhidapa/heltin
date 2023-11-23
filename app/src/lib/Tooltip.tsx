/**
 *
 * Tooltip
 *
 */
import React from 'react';
import Tippy, { TippyProps } from '@tippyjs/react';
import { useDarkMode } from './useDarkMode';

export interface TooltipProps extends TippyProps {}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { children, ...rest } = props;
  const [isDarkMode] = useDarkMode();
  return (
    <Tippy className="Tippy" theme={isDarkMode ? '' : 'light-border'} {...rest}>
      {children}
    </Tippy>
  );
};

export const ExplanationTooltip: React.FC<TooltipProps & { content: string }> = (props) => {
  const { children, content, ...rest } = props;
  return (
    <Tooltip content={content} {...rest}>
      <span aria-label={content} className="ExplanationTooltip__text">
        {children}
      </span>
    </Tooltip>
  );
};
