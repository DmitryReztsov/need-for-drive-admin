import {flexbox} from '../../../../styles/templates/flex';

export const loginForm = {
  borderRadius: '9px',
  bgcolor: 'background.paper',
  boxShadow: 25,
};

export const loginFormTitle = {
  py: '19px',
  textAlign: 'center',
};

export const loginFormErrorText = {
  fontSize: '0.65rem',
  lineHeight: '0.75rem',
  mb: '8.5px',
};

export const loginFormFields = {
  p: '16.5px 18px 20.5px 18px',
  '&>div': {
    '&:first-of-type': {
      mb: '15px',
    },
  },
};

export const loginFormField = {
  '& input': {
    borderRadius: '3px',
    color: 'text.primary',
  },
};

export const loginFormFooter = {
  ...flexbox('space-between', 'center'),
  mt: '15px',
};

export const loginFormLink = {
  fontSize: '0.65rem',
  lineHeight: '0.75rem',
};
