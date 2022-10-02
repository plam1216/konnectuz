import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Header from './components/Nav';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
reportWebVitals();
