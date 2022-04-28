import {theme} from '../../../../../../../styles/theme/theme';
import {flexbox} from '../../../../../../../styles/templates/flex';

export const orderItemOptions = {
  ml: '50%',
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'stretch', 'row'),
    columnGap: '20px',
    ml: '0px',
  },
};
