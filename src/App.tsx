import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import theme from './theme';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
