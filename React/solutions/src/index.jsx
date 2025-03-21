import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Solution from './components/solution';
import 'bootstrap/dist/css/bootstrap.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container">
      <Solution />
    </div>
  </React.StrictMode>
);
