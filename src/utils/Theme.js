import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: 'linear-gradient(120deg, #1b1e26 0%, #3a1c71 50%, #23272e 100%)',
      paper: '#1b1e26',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b3b8',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;
