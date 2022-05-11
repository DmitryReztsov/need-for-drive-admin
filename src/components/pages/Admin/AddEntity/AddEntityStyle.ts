import {flex, flexbox} from '../../../../styles/templates/flex';
import {theme} from '../../../../styles/theme/theme';

export const addEntity = {
  ...flex(),
  py: '28.5px',
};

export const addEntityBody = {
  mt: '28.5px',
  ...flexbox(),
  columnGap: '16px',
  rowGap: '16px',
  flexWrap: 'wrap',
  '&>div': {
    py: '32px',
    borderRadius: '9px',
    bgcolor: 'common.white',
    boxShadow: 34,
    cursor: 'pointer',
    ...flex(1, 1, '20%'),
    ...flexbox('center', 'center'),
    '&:hover': {
      boxShadow: 30,
    },
    [theme.breakpoints.down('md')]: {
      ...flex(1, 1, '45%'),
    },
    [theme.breakpoints.down('sm')]: {
      ...flex(1, 1, '100%'),
      py: '16px',
    },
  },
};
