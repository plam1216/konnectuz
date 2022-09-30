import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Header from './components/Nav';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
<<<<<<< HEAD
<<<<<<< HEAD
      <App />
=======
    <App />
>>>>>>> nav bar is functional
=======
      <Header />
>>>>>>> adds nav
    </Router>
  </React.StrictMode>
);
reportWebVitals();
