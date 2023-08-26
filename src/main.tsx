import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ModalProvider } from './components/Modal';
import { AuthProvider } from './components/Auth';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from './components/Theme';
import { Skins } from '@models';
import './index.css';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme={Skins.light}>
      <BrowserRouter>
        <AuthProvider>
          <ModalProvider>
            <CssBaseline />
            <App />
          </ModalProvider>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
