import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ECEFF3',
      dark: '#666666',
      light: '#CACACA',
    },
    text: {
      primary: '#111111',
      secondary: '#666666',
      disabled: '#C9C9C9',
    },
    // secondary: {},
  },
});

theme = responsiveFontSizes(theme);

export default theme;
