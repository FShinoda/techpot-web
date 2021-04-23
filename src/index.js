import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './pages/exemplo/App';
import Router from './Router';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>    
  </React.StrictMode>,

  document.getElementById('root')
);
