import {flex, flexbox} from '../../styles/templates/flex';

export const adminLayoutStyle = {
  ...flex(),
  ...flexbox(),
};

export const adminLayoutNavBar = {
  ...flex(0, 1, '285px'),
  bgcolor: 'common.white',
};

export const adminLayoutWindow = {
  ...flex(),
  ...flexbox('space-between', 'stretch', 'column'),
};

export const adminLayoutMain = {
  ...flex(),
};
