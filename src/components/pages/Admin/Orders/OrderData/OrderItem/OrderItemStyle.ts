import {flex, flexbox} from '../../../../../../styles/templates/flex';
import {theme} from '../../../../../../styles/theme/theme';

export const orderItem = {
  ...flex(),
  ...flexbox('space-between', 'center'),
  flexWrap: 'wrap',
  pb: '32px',
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'center', 'column'),
  },
};

export const orderItemInfo = {
  ...flexbox('center', 'center'),
  columnGap: '16px',
  [theme.breakpoints.down('sm')]: {
    ...flexbox('center', 'center', 'column'),
    rowGap: '8px',
  },
};

export const orderItemImage = {
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

export const orderItemText = {
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

export const orderItemPrice = {
  fontSize: '1.5rem',
  lineHeight: '1.75rem',
  color: 'grey.900',
  letterSpacing: '-0.754286px',
  [theme.breakpoints.down('lg')]: {
    mt: '16px',
  },
};

export const orderItemOptions = {
  [theme.breakpoints.down('lg')]: {
    ...flexbox('center', 'center', 'row'),
    columnGap: '20px',
  },
  [theme.breakpoints.down('sm')]: {
    mt: '16px',
  },
};

export const orderItemButtons = {
  [theme.breakpoints.down('lg')]: {
    mt: '16px',
  },
};

