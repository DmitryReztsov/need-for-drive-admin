import {transition} from '../../../../styles/templates/transition';

export const navBarItem = {
  p: '21px 0 21px 49px',
  boxShadow: 26,
  cursor: 'pointer',
  ...transition(),
  '&:hover': {
    boxShadow: 27,
    ...transition(),
    bgcolor: 'grey.200',
  },
};

export const navBarContent = {
  position: 'relative',
  fontSize: '0.9375rem',
  lineHeight: '1.08rem',
  '& svg': {
    position: 'absolute',
    left: '-25.5px',
  },
};
