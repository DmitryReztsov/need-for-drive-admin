import {flex, flexbox} from '../../../styles/templates/flex';
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

export const pageFiltersBox = {
  ...flexbox(),
  columnGap: '15px',
  rowGap: '8px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    rowGap: '8px',
    '&>div': {
      ...flex(1, 1, '45%'),
    },
  },
};

export const pageFiltersButtons = {
  columnGap: '15px',
  ...flexbox(),
  alignSelf: 'baseline',
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'center',
  },
};
