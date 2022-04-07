import {flex, flexbox} from '../../styles/templates/flex';

export const adminLayoutStyle = {
  ...flex(),
  ...flexbox(),
};

export const adminLayoutNavBar = {
  ...flex(0, 1, '285px'),
  bgcolor: 'common.white',
  boxShadow: 28,
  zIndex: 999,
};

export const adminLayoutWindow = {
  ...flex(),
  ...flexbox('space-between', 'stretch', 'column'),
};

export const adminLayoutMain = {
  ...flex(),
};
