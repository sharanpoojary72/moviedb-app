import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomePage from './views/HomePage.jsx'
import MovieDetails from './views/MovieDetails.jsx'
import TopRatedPage from './views/TopRatedPage.jsx'
import UpcomingPage from './views/UpcomingPage.jsx'
import { PaginationProvider } from './context/PageContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'


const route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element:<Navigate to='/popular' replace={true}/>
      },
      {
        path: '/popular',
        element: <HomePage />
      },
      {
        path: '/toprated',
        element: <TopRatedPage />
      },
      {
        path: '/upcoming',
        element: <UpcomingPage />
      },
      ,
      {
        path: '/moviedetails/:id',
        element: <MovieDetails />
      },
      {
        path:'/search',
        element: <HomePage />
      },
      {
        path:'*',
        element:<Navigate to='/popular' replace={true}/>
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
