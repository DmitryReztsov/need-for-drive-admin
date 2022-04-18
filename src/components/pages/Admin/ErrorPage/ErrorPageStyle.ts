import {flex, flexbox} from '../../../../styles/templates/flex';
import {theme} from '../../../../styles/theme/theme';

export const errorPage = {
  ...flex(),
  ...flexbox('center', 'center'),
};

export const errorPageBody = {
  ...flex(),
  ...flexbox('center', 'center', 'column'),
  textAlign: 'center',
  transform: 'translateY(-10vh)',
};

export const errorPageCode = {
  fontSize: '4.6875rem',
  lineHeight: '5.5rem',
  letterSpacing: '-5.76923px',
};

export const errorPageTitle = {
  mt: '13px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
};

export const errorPageText = {
  mt: '15px',
  fontSize: '1.25rem',
  lineHeight: '1.4375rem',
  letterSpacing: '-0.5px',
  [theme.breakpoints.down('lg')]: {
    fontSize: '1rem',
  },
};

export const errorPageButton = {
  mt: '34px',
};

