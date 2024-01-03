import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserLogin from '../src/login/user_login.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/user-login" element={<UserLogin />} />
        {/* Add more routes as needed */}
      </Routes>
      <App />
    </Router>
  </React.StrictMode>,
);
