import {flex, flexbox} from '../../styles/templates/flex';

export const editPage = {
  ...flex(),
  py: '28.5px',
};

export const editorBody = {
  mt: '28.5px',
  ...flexbox('space-between'),
  columnGap: '28px',
  '& > div': {
    ...flex(1, 1, '66%'),
    borderRadius: '9px',
    bgcolor: 'common.white',
    boxShadow: 34,
    '&:first-of-type': {
      ...flex(1, 1, '33%'),
    },
  },
};
