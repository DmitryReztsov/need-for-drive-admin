import {flex, flexbox} from '../../../styles/templates/flex';

export const home = {
  ...flex(),
  ...flexbox('center', 'center'),
};

export const homeBody = {
  ...flex(),
  ...flexbox('center', 'center', 'column'),
  '& p': {
    mt: '16px',
    fontSize: '1.5rem',
  },
};

