import { createStyles, withStyles, WithStyles } from '@domonda/ui/styles';

const styles = createStyles(({ spacing, typography, palette, transition }) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    '&:not(:last-child)': {
      marginRight: spacing(1),
    },
    fontFamily: typography.fonts.header,
    textDecoration: 'none',
    padding: spacing(0, 1),
    color: palette.secondary,
    transition: transition.create(['background-color']),
    '&:hover': {
      backgroundColor: palette.lightest('secondary'),
    },
    '&:focus': {
      outline: `3px solid ${palette.light('primary')}`,
    },
    '&:active': {
      outline: 'none',
    },
  },
  active: {
    color: palette.primary,
    borderBottom: '3px solid currentColor',
  },
}));

export type Decorate = WithStyles<typeof styles>;

export const decorate = withStyles(styles);
