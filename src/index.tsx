import React from 'react';
import ReactDOM from 'react-dom/client';
import { GifExpert_App } from './GifExpert_App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GifExpert_App />
  </React.StrictMode>
);
