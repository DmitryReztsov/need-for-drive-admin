import {flex, flexbox} from '../../../styles/templates/flex';

export const pageListHeaders = {
  ...flex(),
  ...flexbox('stretch', 'center'),
  columnGap: '8px',
  py: '8px',
  '& p': {
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: '0.875rem',
    letterSpacing: '-0.377143px',
    ...flex(0, 1, '20%'),
    '&:first-of-type': {
      alignSelf: 'baseline',
    },
  },
};
