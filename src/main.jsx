import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Development error logging
if (process.env.NODE_ENV === 'development') {
  const originalConsoleError = console.error;
  console.error = (...args) => {
    if (args[0]?.includes?.('Warning:')) {
      // Skip React warnings in development
      return;
    }
    originalConsoleError.apply(console, args);
  };

  window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
  });

  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise rejection:', event.reason);
  });
}

// Create and render the root application component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);