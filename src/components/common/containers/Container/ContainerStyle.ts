import {flex} from '../../../../styles/templates/flex';
import {theme} from '../../../../styles/theme/theme';

export const container = {
  px: '27.5px',
  ...flex(),
  [theme.breakpoints.down('sm')]: {
    px: '12px',
  },
};
