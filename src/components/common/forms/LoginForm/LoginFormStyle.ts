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

export const loginFormFields = {
  p: '16.5px 18px 20.5px 18px',
  '&>div': {
    '&:first-child': {
      mb: '15px',
    },
  },
};

export const loginFormField = {
  '& label': {
    mb: '8.5px',
    fontSize: '0.65rem',
    lineHeight: '0.75rem',
  },
  '& input': {
    borderRadius: '3px',
    p: '8px 0 8.5px 11.5px',
    fontSize: '0.7rem',
    lineHeight: '0.81rem',
    letterSpacing: '-0.19px',
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

export const loginFormButton = {
  p: '8px 40px 8px 40px',
  fontSize: '0.7rem',
  lineHeight: '0.81rem',
  boxShadow: 'none',
  textTransform: 'none',
};
