import { createBrowserRouter } from 'react-router-dom'
import LoginPage from 'src/pages/LoginPage/LoginPage'

import LandingPage from '@/src/pages/LandingPage/LandingPage'

import ContentPage from '../pages/ContentPage/ContentPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

export const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    meta: {
      title: 'LandingPage',
      description: 'Homepage of the application'
    }
  },
  {
    path: '/content',
    element: <ContentPage />,
    meta: {
      title: 'ContentPage',
      description: 'Show user content',
      requiresAuth: true, // Indicates if authentication is required for this page
      permissions: [] // Permissions required to access this page
    }
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/404',
    element: <ErrorPage />
  }
])
