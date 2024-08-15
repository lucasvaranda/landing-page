import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";

import LoginScreen from './components/Login/index';
import Home from './components/Home/index';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginScreen />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '*',
    element: <Navigate to="/home" replace />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
