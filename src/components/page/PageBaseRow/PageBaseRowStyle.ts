import {flex, flexbox} from '../../../styles/templates/flex';

export const pageBaseRow = {
  ...flex(),
  ...flexbox('space-between', 'center'),
  py: '8px',
  '& p': {
    fontFamily: 'Roboto',
    fontWeight: 500,
    fontSize: '0.75rem',
    lineHeight: '0.875rem',
    letterSpacing: '-0.377143px',
    color: 'grey.700',
    '&:first-of-type': {
      fontFamily: 'Helvetica',
      color: 'text.primary',
    },
  },
};
