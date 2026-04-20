import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet } from 'react-helmet';
import App from '@/App';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Helmet>
      <title>DG Stream - Healthcare Solutions</title>
      <meta name="description" content="DG Stream provides comprehensive healthcare solutions and services" />
      <meta name="keywords" content="healthcare, medical services, DG Stream" />
      <meta name="theme-color" content="#2D3436" />
      <meta property="og:title" content="DG Stream - Healthcare Solutions" />
      <meta property="og:description" content="Comprehensive healthcare solutions and services" />
      <meta property="og:type" content="website" />
    </Helmet>
    <App />
  </>
);