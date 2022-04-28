import {flex, flexbox} from '../../../../styles/templates/flex';

export const textInput = {};
export const container = {
  ...flexbox(),
  columnGap: '8px',
};
export const input = {
  ...flex(),
};
export const button = {
  padding: '0px',
  minWidth: '30px',
  '&.MuiButton-outlined': {
    color: 'grey.400',
  },
};
