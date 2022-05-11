import {flexbox} from '../../../styles/templates/flex';

export const pageData = {
  p: '15px 0 17.5px 0',
};

export const pageDataContainer = {
  px: '21.5px',
};

export const pageDataBody = {
  ...flexbox('stretch', 'stretch', 'column'),
  '& > div': {
    borderBottom: '0.5px solid',
    borderColor: 'grey.500',
    '&:last-of-type': {
      border: 'none',
    },
  },
};
