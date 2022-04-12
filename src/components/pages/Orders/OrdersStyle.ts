import {flex, flexbox} from '../../../styles/templates/flex';
import {theme} from '../../../styles/theme/theme';

export const orders = {
  ...flex(),
  py: '28.5px',
};

export const pageFiltersBox = {
  ...flexbox(),
  columnGap: '15px',
  flexWrap: 'wrap',
  [theme.breakpoints.down('sm')]: {
    ...flexbox('center'),
    rowGap: '8px',
    '&>div': {
      ...flex(1, 1, '30%'),
    },
  },
};

export const pageFiltersButton = {
  alignSelf: 'baseline',
  [theme.breakpoints.down('sm')]: {
    alignSelf: 'stretch',
  },
};
