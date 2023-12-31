import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#182A50',
      // dark: '#666666',
      light: '#F5F6FC',
    },
    text: {
      primary: '#252525',
      secondary: '#494949',
      disabled: '#666666',
    },
    secondary: {
      main: '#32CD8B',
    },
  },
});

theme = responsiveFontSizes(theme, { factor: 1.1 });

export default theme;
