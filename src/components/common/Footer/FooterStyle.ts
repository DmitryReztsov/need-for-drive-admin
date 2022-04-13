import {flex, flexbox} from '../../../styles/templates/flex';
import {theme} from '../../../styles/theme/theme';

export const footer = {
  ...flexbox(),
  ...flex(0, 0, '68px'),
  bgcolor: 'common.white',
  boxShadow: 31,
  [theme.breakpoints.down('sm')]: {
    ...flex(0, 0, '100px'),
  },
};

export const footerBody = {
  ...flexbox('space-between', 'center'),
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    ...flexbox('center', 'center', 'column'),
    rowGap: '8px',
  },
};

export const footerMenu = {
  ...flexbox(),
  columnGap: '16px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    ...flexbox('center', 'center', 'column'),
    rowGap: '8px',
  },
};

export const footerCopyright = {
  color: 'grey.700',
  fontSize: '0.875rem',
  lineHeight: '1.025rem',
  fontWeight: 500,
  fontFamily: 'Roboto',
};

