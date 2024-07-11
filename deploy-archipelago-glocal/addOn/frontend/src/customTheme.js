import { createTheme } from '@mui/material/styles';
import theme from './config/theme';

const customTheme = createTheme(theme, {
  palette: {
    primary: {
      main: '#778745',
    }
  },
});

export default customTheme;
