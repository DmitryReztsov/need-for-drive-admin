import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
import {createTheme} from '@mui/material';
import React from 'react';
import {DropdownIcon} from '../../content/svg/Icons';
import {shadows} from './shadows';

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
      fontSize: '3.125rem',
      lineHeight: '3.5625rem',
      letterSpacing: '-2.5px',
    },
    h2: {
      fontSize: '1.5rem',
    },
    h3: {
      fontSize: '1.1rem',
    },
    body2: {
      fontSize: '0.8125rem',
      lineHeight: '0.95rem',
      fontFamily: 'Roboto',
      letterSpacing: '-0.408571px',
    },
  },
  palette: {
    primary: {
      main: '#007BFF',
    },
    secondary: {
      main: '#E9ECEF',
      contrastText: 'text.primary',
    },
    error: {
      main: '#C4183C',
    },
    success: {
      main: '#0EC261',
    },
    grey: {
      100: '#F5F6F8',
      200: '#FBFBFB',
      300: '#CACEDB',
      400: '#BECAD6',
      500: '#E0E2E8',
      600: '#5A6169',
      700: '#818EA3',
      800: '#889098',
      900: '#121212',
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
            '& svg': {
              '& path': {
                fill: '#FFF',
              },
            },
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
    MuiSelect: {
      defaultProps: {
        IconComponent: DropdownIcon,
      },
      styleOverrides: {
        iconOutlined: {
          top: 'calc(50% - 3.5px)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minWidth: '110.5px',
          fontSize: '0.7rem',
          lineHeight: '0.8rem',
          letterSpacing: '-0.345714px',
          color: '#868E96',
          borderColor: '#BECAD6',
          '& input': {
            padding: '8px 5px 8.5px 11.5px',
          },
          '& div.MuiSelect-outlined.MuiSelect-select': {
            padding: '8px 14px',
            minHeight: '0px',
          },
          '&.MuiInputBase-multiline': {
            padding: '8px 5px 8.5px 11.5px',
            minHeight: '100px',
            alignItems: 'baseline',
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          minWidth: '110.5px',
          fontSize: '0.7rem',
          lineHeight: '0.8rem',
          letterSpacing: '-0.345714px',
          color: '#868E96',
          borderColor: '#BECAD6',
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          '& label': {
            marginBottom: '8.5px',
            fontSize: '0.675rem',
            lineHeight: '0.75rem',
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: '0px',
          marginTop: '4px',
          fontSize: '0.675rem',
          lineHeight: '0.75rem',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '&>div': {
            '&>div': {
              '&.MuiAutocomplete-inputRoot': {
                padding: '0px',
                '& input.MuiAutocomplete-input': {
                  padding: '8px 5px 8.5px 11.5px',
                },
              },
            },
          },
          '& legend, label': {
            width: '0',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 10px',
          minWidth: '110px',
          fontSize: '0.7rem',
          lineHeight: '0.81rem',
          boxShadow: 'none',
          textTransform: 'none',
          '&.MuiButton-outlined': {
            borderColor: '#BECAD6',
            color: '#5A6169',
            '& span': {
              marginRight: '1px',
              '& svg': {
                fontSize: '0.75rem',
              },
            },
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          '&.MuiButtonGroup-outlined': {
            borderColor: '#BECAD6',
            '& span': {
              color: '#495057',
            },
          },
        },
      },
    },
    MuiFormGroup: {
      styleOverrides: {
        root: {
          '& label': {
            marginLeft: '0px',
          },
        },
      },
    },
    MuiCheckbox: {
      defaultProps: {
        icon: <CheckBoxOutlineBlankOutlinedIcon color={'disabled'}/>,
        color: 'primary',
      },
      styleOverrides: {
        root: {
          padding: '3.5px',
          '& svg': {
            fontSize: '0.8125rem',
          },
        },
      },
    },
    MuiRadio: {
      defaultProps: {
      },
      styleOverrides: {
        root: {
          padding: '3.5px',
          '& svg': {
            fontSize: '0.8125rem',
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginRight: '0px',
          '& span': {
            fontSize: '0.625rem',
            fontFamily: 'Roboto',
            lineHeight: '0.73rem',
            letterSpacing: '-0.175439px',
          },
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          '&.MuiLinearProgress-colorPrimary': {
            backgroundColor: '#FFFFFF',
          },
        },
      },
    },
  },
});

theme.shadows.push(...shadows);
