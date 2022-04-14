import {flex, flexbox} from '../../../styles/templates/flex';
import {theme} from '../../../styles/theme/theme';

export const login = {
  ...flex(),
  ...flexbox('center'),
};

export const loginBody = {
  mt: '167px',
  ...flexbox('stretch', 'stretch', 'column'),
  ...flex(0, 1, '376.5px'),
  [theme.breakpoints.down('sm')]: {
    mt: '54px',
  },
};

export const loginTitle = {
  ...flexbox('center'),
};

export const loginTitleStyles = {
  ...flexbox('stretch', 'center'),
  columnGap: '11.5px',
};

export const loginFormContainer = {
  mt: '16.5px',
};
