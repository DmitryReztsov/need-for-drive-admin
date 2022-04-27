import {flex, flexbox} from '../../../../../../styles/templates/flex';

export const carRightRow = {
  ...flexbox('space-between'),
  columnGap: '21px',
  '& div': {
    ...flex(),
  },
};
