import {theme} from '../../../styles/theme/theme';

export const snack = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    top: 0,
    left: 0,
  },
};

export const snackAlert = {
  width: '100%',
  backgroundColor: 'success.main',
  color: 'common.white',
  p: '13.5px 20px 13.5px 25px',
  fontSize: '0.8125rem',
  lineHeight: '0.9375rem',
  letterSpacing: '-0.325px',
  '& svg': {
    color: 'common.white',
    fontSize: '1rem',
  },
};
