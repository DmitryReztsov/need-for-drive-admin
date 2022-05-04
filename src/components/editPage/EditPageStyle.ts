import {flex, flexbox} from '../../styles/templates/flex';
import {theme} from '../../styles/theme/theme';

export const editPage = {
  ...flex(),
  py: '28.5px',
  position: 'relative',
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
    alignSelf: 'flex-start',
    '&:first-of-type': {
      ...flex(0, 1, '33%'),
    },
  },
  [theme.breakpoints.down('lg')]: {
    ...flexbox('stretch', 'stretch', 'column'),
    '& > div': {
      alignSelf: 'inherit',
    },
  },
};
