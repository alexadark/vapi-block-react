import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import VapiBlock from './components/VapiBlock';

// Expose the component globally
window.VapiBlock = VapiBlock;

// Expose React, ReactDOM, and VapiBlock globally
window.React = React;
window.ReactDOM = ReactDOM;
window.VapiBlock = VapiBlock;

// Optional: Render for local development
if (document.getElementById('root')) {
  ReactDOM.createRoot(document.getElementById('root')).render(<VapiBlock />);
}
