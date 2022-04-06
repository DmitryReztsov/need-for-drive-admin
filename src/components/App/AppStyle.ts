import {flex, flexbox} from '../../styles/templates/flex';

export const app = {
  ...flex(),
  ...flexbox('stretch', 'stretch', 'column'),
  bgcolor: 'grey.100',
};
