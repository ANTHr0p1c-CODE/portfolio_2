import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
console.log("%c STOP! \nIf you are inspecting this, we probably share the same curiosity.", "color: red; font-size: 20px; font-weight: bold;");
console.log("Good eyes, Analyst! Here is your reward:");
console.log("%c FLAG{C4ND3L0R0_1S_S3CUR3}", "color: #00ff00; font-family: monospace; font-size: 16px; background: #000; padding: 4px; border-radius: 4px;");
console.log("Type this flag anywhere on the keyboard to unlock the secret!");
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);;
