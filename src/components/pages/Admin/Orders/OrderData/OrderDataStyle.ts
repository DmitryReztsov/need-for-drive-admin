import {flex, flexbox} from '../../../../../styles/templates/flex';
import {theme} from '../../../../../styles/theme/theme';

export const orderData = {
  ...flex(),
  ...flexbox('stretch', 'stretch', 'column'),
};

export const orderDataRow = {
  ...flex(),
  ...flexbox('space-between', 'center'),
  flexWrap: 'wrap',
  pb: '178px',
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'center', 'column'),
    pb: '30px',
  },
};

export const orderDataInfo = {
  ...flexbox('center', 'center'),
  columnGap: '16px',
  [theme.breakpoints.down('sm')]: {
    ...flexbox('center', 'center', 'column'),
    rowGap: '8px',
  },
};

export const orderDataImage = {
  width: '138px',
  height: '100px',
  backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  [theme.breakpoints.down('sm')]: {
    width: '200px',
    height: '150px',
  },
};

export const orderDataText = {
  '& p': {
    mb: '6px',
    '&:last-child': {
      mb: '0px',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
};

export const orderDataPrice = {
  fontSize: '1.5rem',
  lineHeight: '1.75rem',
  color: 'grey.900',
  letterSpacing: '-0.754286px',
  [theme.breakpoints.down('lg')]: {
    mt: '16px',
  },
};

export const orderDataOptions = {
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'center', 'row'),
    columnGap: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    mt: '16px',
  },
};

export const orderDataButtons = {
  [theme.breakpoints.down('lg')]: {
    mt: '16px',
  },
};

