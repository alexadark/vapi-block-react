import React from 'react';

import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

import VapiBlock from './components/VapiBlock';

export { VapiBlock };

// Expose the component globally
window.VapiBlock = VapiBlock;

// Remove the rendering logic from here
