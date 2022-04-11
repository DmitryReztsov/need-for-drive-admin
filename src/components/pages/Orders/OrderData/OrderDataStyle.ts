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
  backgroundSize: 'auto 100px',
  backgroundRepeat: 'no-repeat',
};

export const orderDataText = {
  '& p': {
    mb: '6px',
    '&:last-child': {
      mb: '0px',
    },
  },
};

export const orderDataPrice = {
  fontSize: '1.5rem',
  lineHeight: '1.75rem',
  color: 'grey.900',
  letterSpacing: '-0.754286px',
};

