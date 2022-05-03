import {flexbox} from '../../../../styles/templates/flex';
import {theme} from '../../../../styles/theme/theme';

export const editPageRightButtons = {
  ...flexbox('space-between', 'center'),
  py: '18px',
  columnGap: '12.5px',
  rowGap: '12.5px',
  [theme.breakpoints.down('sm')]: {
    ...flexbox('stretch', 'stretch', 'column'),
  },
};

export const editPageRightButtonsGroup = {
  ...flexbox(),
  columnGap: '12.5px',
  rowGap: '12.5px',
  [theme.breakpoints.down('sm')]: {
    ...flexbox('stretch', 'stretch', 'column'),
  },
};
