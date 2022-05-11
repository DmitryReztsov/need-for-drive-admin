import {transition} from '../../../../styles/templates/transition';
import {theme} from '../../../../styles/theme/theme';

export const navBarItem = {
  p: '21px 10px 21px 49px',
  boxShadow: 26,
  cursor: 'pointer',
  ...transition(),
  '&:hover': {
    boxShadow: 27,
    ...transition(),
    bgcolor: 'grey.200',
    color: 'primary.main',
    '& svg': {
      '& > path': {
        ...transition(),
        fill: theme.palette.primary.main,
      },
    },
  },
  [theme.breakpoints.down('md')]: {
    p: '16px 20px 16px 49px',
  },
  [theme.breakpoints.down('sm')]: {
    p: '16px 49px',
  },
};

export const navBarContent = {
  position: 'relative',
  fontSize: '0.9375rem',
  lineHeight: '1.08rem',
  letterSpacing: '-0.234375px',
  '& svg': {
    width: '17px',
    height: '17px',
    position: 'absolute',
    left: '-25.5px',
    color: 'grey.300',
  },
};
