import { ThemeOptions, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#eb86fe',
    },
    secondary: {
      main: '#03dac5',
    },
    background: {
      default: '#252525',
      paper: '#252525',
    },
    divider: 'rgba(189,189,189,0.12)',
  },
  typography: {
    h1: {
      fontFamily: '"Barlow Condensed","Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '7rem',
      fontWeight: 1000,
      lineHeight: 1.03,
      textTransform: 'uppercase',
    },
  },
};

export const theme = createTheme(themeOptions)