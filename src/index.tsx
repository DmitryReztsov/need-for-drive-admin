import React from 'react';
import App from './components/App/App';
import {createRoot} from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import {CssBaseline, ThemeProvider} from '@mui/material';
import './index.css';
import {setupStore} from './store/store';
import {Provider} from 'react-redux';
import {theme} from './styles/theme/theme';

const store = setupStore();
const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <HashRouter>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <App />
      </ThemeProvider>
    </Provider>
  </HashRouter>,
);
