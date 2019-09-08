import { createStyles, withStyles, WithStyles } from '@domonda/ui/styles';

const styles = createStyles(({ spacing }) => ({
  root: {
    padding: spacing(0, 2),
  },
}));

export type Decorate = WithStyles<typeof styles>;

export const decorate = withStyles(styles);
