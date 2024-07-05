import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles"
import { TonConnectUIProvider } from '@tonconnect/ui-react';

import App from './App.jsx'
import './index.css'
import { theme } from "./helpers/theme"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TonConnectUIProvider manifestUrl="https://https://sevchik-f8fe.github.io/aviton/tonconnect-manifest.json">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </TonConnectUIProvider>
  </React.StrictMode>,
)
