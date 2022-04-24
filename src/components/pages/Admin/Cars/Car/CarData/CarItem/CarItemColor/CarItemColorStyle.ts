import {flexbox} from '../../../../../../../../styles/templates/flex';
import {theme} from '../../../../../../../../styles/theme/theme';

export const carItemColor = {
  ml: '50%',
  [theme.breakpoints.down('lg')]: {
    ml: '0px',
  },
};

export const carItemColorContainer = {
  ...flexbox('stretch', 'stretch', 'column'),
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'stretch', 'row'),
    columnGap: '20px',
  },
};
