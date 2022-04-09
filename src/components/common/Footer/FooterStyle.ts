import {flex, flexbox} from '../../../styles/templates/flex';

export const footer = {
  ...flexbox(),
  ...flex(0, 0, '68px'),
  bgcolor: 'common.white',
  boxShadow: 31,
};

export const footerBody = {
  ...flexbox('space-between', 'center'),
  height: '100%',
};

export const footerMenu = {
  ...flexbox(),
  columnGap: '16px',
};

export const footerCopyright = {
  color: 'grey.700',
  fontSize: '0.875rem',
  lineHeight: '1.025rem',
  fontWeight: 500,
  fontFamily: 'Roboto',
};

