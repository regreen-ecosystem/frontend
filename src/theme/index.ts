import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#336741',
      dark: '#A6C2AB',
      light: '#B2CBA1',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
