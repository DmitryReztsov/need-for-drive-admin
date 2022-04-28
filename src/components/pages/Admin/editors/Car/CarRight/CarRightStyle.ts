import {flex, flexbox} from '../../../../../../styles/templates/flex';

export const carRight = {
  ...flexbox('stretch', 'stretch', 'column'),
  rowGap: '28px',
  '&>div': {
    ...flexbox('space-between'),
    columnGap: '21px',
  },
};

export const colorPicker = {
  ...flex(),
  width: '100%',
  '& > div:last-of-type': {
    mt: '16px',
  },
};
