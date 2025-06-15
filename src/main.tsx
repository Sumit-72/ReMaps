import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Analytics } from "@vercel/analytics/react"
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')!).render(
  <HelmetProvider >
  <StrictMode>
    <App />
  </StrictMode>
  <Analytics/>
  </HelmetProvider >
);
