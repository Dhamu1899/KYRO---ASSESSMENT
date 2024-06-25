// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00acc1', // Teal primary color
    },
    secondary: {
      main: '#f57c00', // Deep orange secondary color
    },
    background: {
      default: '#eeeeee', // Light gray background
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      color: '#263238', // Dark blue-gray for headings
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      marginBottom: '1rem',
      color: '#263238',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: '#37474f', // Dark gray for body text
    },
  },
});


export default theme;
