import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './output.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/Home';
import Contact from './components/contact/Contact';
import ProductsSection from './components/products/ProductsSection';

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
        element: <ProductsSection/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={appRouter} />
)
