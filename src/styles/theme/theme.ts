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
    h1: {
      fontSize: '3rem',
    },
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
    error: {
      main: '#C4183C',
    },
    grey: {
      100: '#F5F6F8',
      200: '#FBFBFB',
      300: '#CACEDB',
      700: '#818EA3',
    },
    text: {
      primary: '#3D5170',
      secondary: '#495057',
    },
  },
  components: {
    // Name of the component
    MuiInput: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          '&:after': {
            borderBottom: '2px solid #007BFF',
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          '& li': {
            '& div': {
              height: 'auto',
              display: 'inline-flex',
              justifyContent: 'center',
              '&:hover': {
                color: '#007BFF',
                backgroundColor: 'transparent',
              },
            },
          },
        },
      },
    },
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          fontSize: '0.9375rem',
          lineHeight: '1.078rem',
          minWidth: '18px',
          height: '18px',
          borderRadius: '18px',
          margin: '0 1px',
          padding: '0px',
          color: '#007BFF',
          '&:hover': {
            color: '#FFF',
            backgroundColor: '#007BFF',
          },
          '&.Mui-selected': {
            color: '#FFF',
            backgroundColor: '#007BFF',
            '&:hover': {
              color: '#007BFF',
              backgroundColor: '#FFF',
            },
          },
        },
      },
    },
  },
});

theme.shadows.push(
  '0px 1px 0px rgba(90, 97, 105, 0.11),' +
  ' 0px 2px 4px rgba(90, 97, 105, 0.12),' +
  ' 0px 5px 5px rgba(90, 97, 105, 0.06),' +
  ' 0px 3.5px 35px rgba(90, 97, 105, 0.1)', // 25
  'inset 0px -1px 0px #E1E5EB', // 26
  'inset 0px -1px 0px #E1E5EB, inset 4px 0px 0px #007BFF', // 27
  '0px 1px 75px rgba(90, 97, 105, 0.11),' +
  '0px 2px 4px rgba(90, 97, 105, 0.12),' +
  '0px 7.5px 11px rgba(90, 97, 105, 0.1),' +
  '0px 3.5px 17.5px rgba(165, 182, 201, 0.1)', // 28
  '0.5px 0px 0px #CACEDB, -0.5px 0px 0px #CACEDB', // 29
  '0px 2.5px 9.5px rgba(90, 97, 105, 0.12)', // 30
  '0px -0.5px 0px #D7DAE3', // 31
  '0px 2px 0px rgba(90, 97, 105, 0.11),' +
  ' 0px 4px 8px rgba(90, 97, 105, 0.12),' +
  ' 0px 10px 10px rgba(90, 97, 105, 0.06),' +
  ' 0px 7px 70px rgba(90, 97, 105, 0.1)', // 32
  '0px -0.5px 0px #E0E2E8, 0px 0.5px 0px #E0E2E8', // 33
);

