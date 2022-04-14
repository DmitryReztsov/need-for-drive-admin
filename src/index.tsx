import React from 'react';
import App from './components/App/App';
import {createRoot} from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import './index.css';
import {theme} from './styles/theme/theme';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <ThemeProvider theme={theme}>
    <HashRouter>
      <CssBaseline/>
      <App />
    </HashRouter>
  </ThemeProvider>,
);
