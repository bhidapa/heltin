import { createStyles, withStyles, WithStyles } from '@domonda/ui/styles';

const styles = createStyles(({ palette, spacing, shape }) => ({
  file: {
    padding: spacing('tiny'),
    backgroundColor: palette.white,
    borderRadius: shape.borderRadius.tiny,
    border: `1px solid ${palette.border}`,
  },
}));

export type Decorate = WithStyles<typeof styles>;

export const decorate = withStyles(styles);
