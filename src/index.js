import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import VapiBlock from './components/VapiBlock';

// Expose the component globally
window.VapiBlock = VapiBlock;

// Render the component if the root element exists
const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<VapiBlock />);
}

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
