import {flex, flexbox} from '../../../styles/templates/flex';
import {transition} from '../../../styles/templates/transition';
import {theme} from '../../../styles/theme/theme';

export const header = {
  ...flexbox(),
  ...flex(0, 0, '68px'),
  boxShadow: 30,
  bgcolor: 'common.white',
};

export const headerBody = {
  ...flexbox('space-between', 'center'),
  height: '100%',
};

export const headerSearch = {
  ...flexbox('stretch', 'center'),
  ...flex(),
};

export const headerSearchIcon = {
  color: 'grey.300',
  ...flexbox('center', 'center'),
  cursor: 'pointer',
  ...transition(),
  '&:hover': {
    color: 'secondary.main',
    ...transition(),
  },
};

export const headerBurgerIcon = {
  mr: '8px',
  '&:hover': {
    '& svg': {
      color: 'secondary.main',
    },
  },
};

export const headerSearchInput = {
  p: '5px',
  '&::before': {
    border: 'none',
  },
  [theme.breakpoints.down('sm')]: {
    ...flex(),
    mr: '10px',
  },
};

export const headerNotification = {
  px: '26.5px',
  boxShadow: 29,
  alignSelf: 'stretch',
  ...flexbox('center', 'center'),
  cursor: 'pointer',
  '&:hover': {
    '& svg': {
      color: 'primary.main',
    },
  },
  [theme.breakpoints.down('sm')]: {
    px: '16px',
  },
};

export const headerNotificationIcon = {
  color: 'grey.700',

};

export const headerBadge = {
  '& span': {
    minWidth: '14px',
    height: '14px',
    padding: '0px',
    transform: 'scale(1) translate(30%, 30%)',
  },
};

export const headerProfile = {
  ...flexbox('stretch', 'center'),
  pl: '26.5px',
  [theme.breakpoints.down('sm')]: {
    pl: '12px',
  },
};

export const headerAvatar = {
  width: '40px',
  height: '40px',
};

export const headerSelect = {
  fontSize: '0.9375rem',
  lineHeight: '1.078rem',
  '& div': {
    width: '70px',
    mr: '26px',
  },
  '& fieldset': {
    border: 'none',
  },
  '& svg': {
    top: '4.61px',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: '30px',
    '& div': {
      width: '0px',
      mr: '0px',
      color: 'transparent',
    },
  },
};


