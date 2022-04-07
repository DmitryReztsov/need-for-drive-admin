import {flex, flexbox} from '../../../styles/templates/flex';

export const header = {
  ...flexbox(),
  ...flex(0, 0, '68px'),
  boxShadow: 30,
  bgcolor: 'common.white',
};

export const headerBody = {
  ...flexbox('space-between', 'center'),
  ...flex(),
};

export const headerSearch = {
  ...flexbox('stretch', 'center'),
  ...flex(),
};

export const headerSearchIcon = {
  color: 'grey.300',
};

export const headerSearchInput = {
  p: '5px',
  '&::before': {
    border: 'none',
  },
};

export const headerNotification = {
  px: '26.5px',
  boxShadow: 29,
  alignSelf: 'stretch',
  ...flexbox('center', 'center'),
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


