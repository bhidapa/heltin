import { createStyles, withStyles, WithStyles } from '@domonda/ui/styles';

const styles = createStyles(({ palette, spacing, shape }) => ({
  file: {
    padding: spacing('tiny'),
    backgroundColor: palette.white,
    border: `1px solid ${palette.border}`,
    '&:only-child': {
      borderRadius: shape.borderRadius.tiny,
    },
    '&:not(:only-child)': {
      '&:first-child': {
        borderTopLeftRadius: shape.borderRadius.tiny,
        borderTopRightRadius: shape.borderRadius.tiny,
      },
      '&:last-child': {
        borderBottomLeftRadius: shape.borderRadius.tiny,
        borderBottomRightRadius: shape.borderRadius.tiny,
      },
      '&:nth-child(2)': {
        borderTop: 0,
      },
    },
  },
}));

export type Decorate = WithStyles<typeof styles>;

export const decorate = withStyles(styles);
