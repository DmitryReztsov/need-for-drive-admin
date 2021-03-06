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
  transform: 'translateY(-10vh)',
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
  mt: '15px',
  fontSize: '1.25rem',
  lineHeight: '1.4375rem',
  letterSpacing: '-0.5px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1rem',
  },
};

