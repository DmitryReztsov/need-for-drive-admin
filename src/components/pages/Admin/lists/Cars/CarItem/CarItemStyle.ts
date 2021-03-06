import {flex, flexbox} from '../../../../../../styles/templates/flex';
import {theme} from '../../../../../../styles/theme/theme';

export const carItem = {
  ...flex(),
  ...flexbox('space-between', 'center'),
  '& > div': {
    ...flex(1, 1, '15%'),
    '&:nth-of-type(1)': {
      ...flex(1, 1, '40%'),
    },
  },
  flexWrap: 'wrap',
  py: '16px',
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'center', 'column'),
    '& > div': {
      ...flex(1, 1, 'auto'),
    },
    pb: '16px',
  },
};

export const carItemInfo = {
  ...flexbox('flex-start', 'center'),
  columnGap: '16px',
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'center', 'column'),
    rowGap: '8px',
  },
};

export const carItemImage = {
  ...flex(0, 0),
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

export const carItemName = {
  fontSize: '0.8125rem',
  lineHeight: '0.95rem',
  mb: '6px',
};

export const carItemText = {
  '& p': {
    mb: '6px',
    '&:last-child': {
      mb: '0px',
    },
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center',
    },
  },
  '& h3': {
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center',
    },
  },
};

export const carItemColor = {
  fontSize: '0.625rem',
  fontFamily: 'Roboto',
  lineHeight: '0.73rem',
  letterSpacing: '-0.175439px',
  ...flexbox('center', 'center'),
  '& > div': {
    ...flex(0, 0, '10%'),
  },
  [theme.breakpoints.down('lg')]: {
    mt: '16px',
    '& > div': {
      ...flex(1, 1, '100%'),
    },
  },
};

export const carItemColorList = {
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'stretch', 'row'),
    columnGap: '20px',
  },
};

export const carItemDetails = {
  ...flexbox('center', 'center', 'column'),
  '& p': {
    '&:first-of-type': {
      mb: '8px',
    },
  },
  [theme.breakpoints.down('lg')]: {
    mt: '16px',
  },
};

export const carItemPrice = {
  ...flexbox('center', 'center'),
  [theme.breakpoints.down('lg')]: {
    mt: '16px',
  },
};

export const carItemButtons = {
  ...flexbox('flex-end', 'center'),
  [theme.breakpoints.down('lg')]: {
    mt: '16px',
  },
};
