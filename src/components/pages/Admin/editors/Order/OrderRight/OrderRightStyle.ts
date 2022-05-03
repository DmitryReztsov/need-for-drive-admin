import {flex, flexbox} from '../../../../../../styles/templates/flex';
import {theme} from '../../../../../../styles/theme/theme';

export const orderRight = {
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

