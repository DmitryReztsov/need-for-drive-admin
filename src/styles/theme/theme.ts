import createTheme from '@mui/material/styles/createTheme';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: [
      'Helvetica',
      'Roboto',
      'Helvetica Neue',
    ].join(','),
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.1rem',
    },
  },
  palette: {
    secondary: {
      main: '#007BFF',
    },
    grey: {
      100: '#F5F6F8',
    },
    text: {
      primary: '#3D5170',
      secondary: '#495057',
    },
  },
});

theme.shadows.push(
  '0px 1px 0px rgba(90, 97, 105, 0.11),' +
  ' 0px 2px 4px rgba(90, 97, 105, 0.12),' +
  ' 0px 5px 5px rgba(90, 97, 105, 0.06),' +
  ' 0px 3.5px 35px rgba(90, 97, 105, 0.1)',
);
