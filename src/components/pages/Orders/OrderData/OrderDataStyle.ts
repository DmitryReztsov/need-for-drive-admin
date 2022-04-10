import {flex, flexbox} from '../../../../styles/templates/flex';

export const orderData = {
  ...flex(),
  ...flexbox('space-between', 'center'),
};

export const orderDataInfo = {
  ...flexbox('center', 'center'),
  columnGap: '16px',
};

export const orderDataImage = {
  pl: '138px',
  height: '100px',
  backgroundPosition: 'top 0px left 0px',
  backgroundSize: '138px auto',
  backgroundRepeat: 'no-repeat',
};

export const orderDataText = {
  fontSize: '0.8125rem',
  lineHeight: '0.95rem',
  fontFamily: 'Roboto',
  color: 'grey.800',
  letterSpacing: '-0.408571px',
  '& p': {
    mb: '6px',
    '&:last-child': {
      mb: '0px',
    },
  },
};
