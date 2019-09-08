/**
 *
 * theme
 *
 */

import { createTheme, createPalette } from '@domonda/ui';

export const bhidapaColors = {
  teal: '#27cba4',
  darkBlue: '#09465c',
  pink: '#ff7e6d',
  yellow: '#ffdb6d',
};

export const theme = createTheme({
  palette: createPalette({
    default: '#3f3f3f',
    primary: bhidapaColors.darkBlue,
    secondary: bhidapaColors.teal,
    textPrimary: '#000000',
    textSecondary: '#a7a7a7',
    textLight: '#ffffff',
    success: '#02bb44',
    error: '#cc0000',
    warning: '#fda50d',
    border: '#d8d8d8',
    background: '#f3f4f8',
    surface: '#ffffff',
  }),
});
