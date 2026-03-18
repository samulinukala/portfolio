// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { CookiesProvider } from 'react-cookie';
import { ReplykeProvider } from '@replyke/react-js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <CookiesProvider>
    <App />
  </CookiesProvider>
  </React.StrictMode>,
);
