import {flexbox} from '../../../styles/templates/flex';

export const navBar = {
};

export const navBarTitle = {
  p: '23px 0 23px 49px',
  height: '68px',
  boxShadow: 26,
};

export const navBarTitleStyles = {
  ...flexbox('stretch', 'center'),
  columnGap: '7px',
  '& svg': {
    width: '21.5px',
    height: '21.5px',
  },
  '& h2': {
    fontSize: '1rem',
    lineHeight: '1.125rem',
  },
};
