import {flex, flexbox} from '../../../../../../../styles/templates/flex';
import {theme} from '../../../../../../../styles/theme/theme';

export const carItem = {
  ...flex(),
  ...flexbox('space-between', 'center'),
  flexWrap: 'wrap',
  pb: '32px',
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'center', 'column'),
  },
};
