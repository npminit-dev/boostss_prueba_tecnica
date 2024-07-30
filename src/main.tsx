import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './output.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './home/Home';
import Products from './products/Products';
import Contact from './contact/Contact';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/home',
        element: <Home/>
      },
      {
        path: '/products',
        element: <Products/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
