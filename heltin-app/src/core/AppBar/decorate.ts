import { createStyles, withStyles, WithStyles } from '@domonda/ui/styles';

const styles = createStyles(({ spacing }) => ({
  root: {
    padding: spacing('none', 'small'),
  },
  logo: {
    padding: spacing('tiny', 'none'),
    width: 36,
  },
}));

export type Decorate = WithStyles<typeof styles>;

export const decorate = withStyles(styles);
