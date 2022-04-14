import {flex, flexbox} from '../../../../styles/templates/flex';
import {theme} from '../../../../styles/theme/theme';

export const home = {
  ...flex(),
  ...flexbox('center', 'center'),
};

export const homeBody = {
  ...flex(),
  ...flexbox('center', 'center', 'column'),
  textAlign: 'center',
};

export const homeTitle = {
  [theme.breakpoints.down('lg')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
};

export const homeText = {
  mt: '16px',
  fontSize: '1.5rem',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1rem',
  },
};

