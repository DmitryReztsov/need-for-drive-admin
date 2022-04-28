import {flex, flexbox} from '../../../../../../styles/templates/flex';
import {theme} from '../../../../../../styles/theme/theme';

export const carRight = {
  ...flexbox('stretch', 'stretch', 'column'),
  rowGap: '28px',
  '& > div': {
    ...flexbox('space-between'),
    columnGap: '21px',
    rowGap: '28px',
    [theme.breakpoints.down('sm')]: {
      ...flexbox('center', 'center', 'column'),
    },
  },
};

export const colorPicker = {
  ...flex(),
  width: '100%',
  '& > div:last-of-type': {
    mt: '16px',
  },
};
