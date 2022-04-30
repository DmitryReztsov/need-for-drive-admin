import {flex, flexbox} from '../../../styles/templates/flex';
import {theme} from '../../../styles/theme/theme';

export const pageBaseRow = {
  ...flex(),
  ...flexbox('stretch', 'center'),
  columnGap: '8px',
  py: '8px',
  [theme.breakpoints.down('md')]: {
    ...flexbox('stretch', 'stretch', 'column'),
    rowGap: '8px',
  },
  '& p': {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: '0.875rem',
    letterSpacing: '-0.377143px',
    color: 'grey.700',
    ...flex(0, 1, '20%'),
    '&:first-of-type': {
      fontFamily: 'Helvetica',
      color: 'text.primary',
    },
  },
  '&>div': {
    ...flex(),
    ...flexbox('flex-end'),
    [theme.breakpoints.down('md')]: {
      ...flexbox('flex-start'),
    },
  },
};
