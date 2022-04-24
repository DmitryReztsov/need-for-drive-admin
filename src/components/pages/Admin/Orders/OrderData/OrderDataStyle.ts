import {flex, flexbox} from '../../../../../styles/templates/flex';

export const orderData = {
  ...flex(),
  ...flexbox('stretch', 'stretch', 'column'),
  '& > div': {
    borderBottom: '0.5px solid',
    borderColor: 'grey.500',
    '&:last-of-type': {
      border: 'none',
    },
  },
};

