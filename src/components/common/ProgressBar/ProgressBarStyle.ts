import {flexbox} from '../../../styles/templates/flex';

export const progressBar = {
  ...flexbox('stretch', 'stretch', 'column'),
  rowGap: '10px',
};

export const progressBarText = {
  ...flexbox('space-between', 'stretch'),
  '& p': {
    '&:first-of-type': {
      fontSize: '0.8125rem',
      lineHeight: '0.9375rem',
      letterSpacing: '-0.408571px',
      color: '#868E96',
    },
    '&:last-of-type': {
      fontFamily: 'Roboto',
      fontSize: '0.6875rem',
      lineHeight: '0.8125rem',
      letterSpacing: '-0.345714px',
      color: 'grey.600',
    },
  },
};

export const progressBarLine = {
  borderRadius: '4px',
  boxShadow: 36,
};
