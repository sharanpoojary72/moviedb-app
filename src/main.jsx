import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
const HomePage = lazy(() => import('./views/HomePage.jsx'));
const MovieDetails = lazy(() => import('./views/MovieDetails.jsx'));
const TopRatedPage = lazy(() => import('./views/TopRatedPage.jsx'));
const UpcomingPage = lazy(() => import('./views/UpcomingPage.jsx'));
import { PaginationProvider } from './context/PageContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'


const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to='/popular' replace={true} />
      },
      {
        path: '/popular',
        element: (
          <Suspense fallback={<div>Loading Popular Movies...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '/toprated',
        element: (
          <Suspense fallback={<div>Loading Top Rated Movies...</div>}>
            <TopRatedPage />
          </Suspense>
        ),
      },
      {
        path: '/upcoming',
        element: (
          <Suspense fallback={<div>Loading Upcoming Movies...</div>}>
            <UpcomingPage />
          </Suspense>
        ),
      },
      {
        path: '/moviedetails/:id',
        element: (
          <Suspense fallback={<div>Loading Movie Details...</div>}>
            <MovieDetails />
          </Suspense>
        ),
      },
      {
        path: '/search',
        element: (
          <Suspense fallback={<div>Loading Search Results...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: <Navigate to='/popular' replace={true} />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
      <PaginationProvider>
        <RouterProvider router={route} />
      </PaginationProvider>
    </SearchProvider>
  </StrictMode>,
)
