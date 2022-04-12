import {flexbox} from '../../../styles/templates/flex';
import {theme} from '../../../styles/theme/theme';

export const pageFilters = {
  p: '16px 0 14px 0',
  boxShadow: 33,
};

export const pageFiltersContainer = {
  px: '21.5px',
};

export const pageFiltersBody = {
  ...flexbox('space-between', 'center'),
  [theme.breakpoints.down('sm')]: {
    ...flexbox('center', 'center', 'column'),
    rowGap: '8px',
  },
};
