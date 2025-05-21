import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import AppLayout from './Components/Layout/AppLayout';

import Home from './pages/Home';
import About from './pages/About';
import Country from './pages/Country';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
 

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'country',
        element: <Country />
      },
    ]
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
