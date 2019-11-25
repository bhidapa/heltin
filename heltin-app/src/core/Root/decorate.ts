import { createStyles, withStyles, WithStyles } from '@domonda/ui/styles';

const styles = createStyles(({ palette, spacing }) => ({
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
    position: 'relative',
    zIndex: 1,
    backgroundColor: palette.white,
    borderBottom: `2px solid ${palette.border}`,
  },
  main: {
    position: 'relative',
    zIndex: 0,
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    willChange: 'scroll-position',
    backfaceVisibility: 'hidden',
    '& > $content': {
      paddingTop: spacing('large'),
      paddingBottom: spacing('large'),
    },
  },
  content: {
    position: 'relative',
    flex: 1,
    margin: '0 auto',
    maxWidth: 1024,
    paddingLeft: spacing('small'),
    paddingRight: spacing('small'),
  },
}));

export type Decorate = WithStyles<typeof styles>;

export const decorate = withStyles(styles);
