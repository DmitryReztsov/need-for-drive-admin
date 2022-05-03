import {flex, flexbox} from '../../styles/templates/flex';
import {theme} from '../../styles/theme/theme';

export const editPage = {
  ...flex(),
  py: '28.5px',
  position: 'relative',
};

export const editSnackbar = {
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

export const editAlert = {
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

export const editorBody = {
  mt: '28.5px',
  ...flexbox('space-between'),
  columnGap: '28px',
  rowGap: '16px',
  '& > div': {
    ...flex(1, 1, '66%'),
    borderRadius: '9px',
    bgcolor: 'common.white',
    boxShadow: 34,
    alignSelf: 'flex-start',
    '&:first-of-type': {
      ...flex(0, 1, '33%'),
    },
  },
  [theme.breakpoints.down('lg')]: {
    ...flexbox('stretch', 'stretch', 'column'),
    '& > div': {
      alignSelf: 'inherit',
    },
  },
};
