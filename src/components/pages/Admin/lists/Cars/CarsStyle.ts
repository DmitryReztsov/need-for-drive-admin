import {flex, flexbox} from '../../../../../styles/templates/flex';

export const carsHeaders = {
  ...flex(),
  ...flexbox('stretch', 'center'),
  columnGap: '8px',
  py: '8px',
  '& p': {
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: '0.875rem',
    letterSpacing: '-0.377143px',
    ...flex(1, 1, '15%'),
    ...flexbox('center'),
    '&:first-of-type': {
      ...flexbox('stretch'),
      ...flex(1, 1, '40%'),
    },
  },
};
