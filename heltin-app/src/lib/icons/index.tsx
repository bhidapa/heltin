/**
 *
 * icons
 *
 */

import React from 'react';

// ui
import { SvgIcon, SvgIconProps } from '@domonda/ui';

// svgs
import PowerSvg from 'material-icons-svg/icons/sharp-power_settings_new-24px.svg';

// icons
export const PowerIcon: React.FC<SvgIconProps> = ({ children, ...rest }) => (
  <SvgIcon {...rest}>
    <g dangerouslySetInnerHTML={{ __html: PowerSvg }}></g>
  </SvgIcon>
);
