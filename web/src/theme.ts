/**
 *
 * theme
 *
 */

import { createTheme, createPalette, createShadows } from '@domonda/ui';

export const bhidapaColors = {
  teal: '#27cba4',
  darkBlue: '#09465c',
  pink: '#ff7e6d',
  yellow: '#ffdb6d',
};

export const theme = createTheme({
  palette: createPalette({
    primary: bhidapaColors.pink,
    secondary: bhidapaColors.darkBlue,
    accent: bhidapaColors.teal,
    white: '#FFFFFF',
    gray04: '#F5F6F7',
    gray08: '#E8EBED',
    gray18: '#D3D9DB',
    gray30: '#B0BABF',
    gray40: '#93A5AE',
    gray60: '#5A6B73',
    gray80: '#21353E',
    gray100: '#012638',
    success: '#44A00C',
    warning: '#DF7818',
    danger: '#FF0000',
  }),
  shadows: createShadows({
    line: '0 1px 1px rgba(1, 38, 56, 0.2)',
    doubleLine: '0 2px 2px rgba(1, 38, 56, 0.2)',
    small: '0 10px 15px rgba(0, 0, 0, 0.05)',
    large:
      '0 25px 50px rgba(0, 0, 50, 0.1), 0 8px 20px rgba(0, 0, 50, 0.15), 0 5px 7px rgba(0, 0, 0, 0.05)',
  }),
});
