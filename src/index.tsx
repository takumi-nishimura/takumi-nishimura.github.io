import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root') as HTMLElement;

const app = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// The prerendered HTML (scripts/prerender.mjs) is what crawlers index. On the
// client we client-render rather than hydrate: post content is fetched async
// and Mermaid renders async, so the first client render would never match the
// snapshot. Seeded data (window.__PRERENDER__) makes that first render show the
// content immediately, so replacing the snapshot is not visible as a flash.
createRoot(rootElement).render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
