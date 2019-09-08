import { createStyles, withStyles, WithStyles } from '@domonda/ui/styles';

const styles = createStyles(({ palette, shadows, spacing }) => ({
  '@global': {
    body: {
      overflow: 'hidden',
      height: '100vh',
    },
    '#root': {
      display: 'flex',
      position: 'relative',
      width: '100%',
      height: '100%',
    },
  },
  header: {
    height: spacing(6),
    zIndex: 1,
    backgroundColor: palette.surface,
    boxShadow: shadows[4],
  },
  content: {
    zIndex: 0,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    willChange: 'scroll-position',
    transform: 'translateZ(0)',
    backfaceVisibility: 'hidden',
  },
}));

export type Decorate = WithStyles<typeof styles>;

export const decorate = withStyles(styles);
