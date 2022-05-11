import {theme} from '../../../../../../../styles/theme/theme';
import {flexbox} from '../../../../../../../styles/templates/flex';

export const orderItemOptions = {
  ml: '30%',
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'stretch', 'row'),
    columnGap: '20px',
    ml: '0px',
  },
};
