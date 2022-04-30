import {flex, flexbox} from '../../../styles/templates/flex';

export const pageListHeaders = {
  ...flex(),
  ...flexbox('space-between', 'center'),
  py: '8px',
  '& p': {
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: '0.875rem',
    letterSpacing: '-0.377143px',
    '&:first-of-type': {
      alignSelf: 'baseline',
    },
  },
};
