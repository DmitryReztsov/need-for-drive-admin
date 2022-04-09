import React from 'react';
import App from './components/App/App';
import {createRoot} from 'react-dom/client';
import {theme} from './styles/theme/theme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import {HashRouter} from 'react-router-dom';
import {CssBaseline} from '@mui/material';
import './index.css';

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
