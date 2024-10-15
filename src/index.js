import React from 'react';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import VapiBlock from './components/VapiBlock';

// Expose the component globally
window.VapiBlock = VapiBlock;

// Render the component if the root element exists
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<VapiBlock />);
}
