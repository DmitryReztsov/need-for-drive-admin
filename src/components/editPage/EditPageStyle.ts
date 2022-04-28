import {flex, flexbox} from '../../styles/templates/flex';
import {theme} from '../../styles/theme/theme';

export const editPage = {
  ...flex(),
  py: '28.5px',
};

export const editorBody = {
  mt: '28.5px',
  ...flexbox('space-between'),
  columnGap: '28px',
  rowGap: '16px',
  '& > div': {
    ...flex(1, 1, '66%'),
    borderRadius: '9px',
    bgcolor: 'common.white',
    boxShadow: 34,
    '&:first-of-type': {
      ...flex(1, 1, '33%'),
      alignSelf: 'baseline',
    },
  },
  [theme.breakpoints.down('lg')]: {
    ...flexbox('stretch', 'stretch', 'column'),
  },
};
