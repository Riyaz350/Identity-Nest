import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Dashboard from './Layout/Dashboard/Dashboard';
import Users from './Layout/Dashboard/Users/Users';
import AuthProvider from './Authentication/AuthProvider';
import LogIn from './Authentication/LogIn';
import Register from './Authentication/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/",
        element: <Users/>
      },
      {
        path: "/logIn",
        element: <LogIn/>
      },
      {
        path: "/register",
        element: <Register/>
      },
    ],
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
