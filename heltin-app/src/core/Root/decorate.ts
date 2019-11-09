import { createStyles, withStyles, WithStyles } from '@domonda/ui/styles';

const styles = createStyles(({ palette }) => ({
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
    zIndex: 1,
    backgroundColor: palette.white,
    borderBottom: `2px solid ${palette.border}`,
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
