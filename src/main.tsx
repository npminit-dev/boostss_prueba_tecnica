import ReactDOM from 'react-dom/client'
import App from './App'
import './output.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './components/home/Home';
import { lazy, Suspense } from 'react';
import PageFallback from './components/PageFallback';

const LazyProducts = lazy(() => import('../src/components/products/ProductsSection'))
const LazyContact = lazy(() => import('../src/components/contact/Contact'))
const LazyHome = lazy(() => import('../src/components/home/Home'))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/home',
        element: (
          <Suspense fallback={<PageFallback/>}>
            <LazyHome/>
          </Suspense>
        )
      },
      {
        path: '/products',
        element: (
          <Suspense fallback={<PageFallback/>}>
            <LazyProducts/>
          </Suspense>
        )
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={<PageFallback/>}>
            <LazyContact/>
          </Suspense>
        )
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={appRouter} />
)
