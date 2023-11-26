import { createBrowserRouter } from 'react-router-dom'
import ContentPage from 'pages/ContentPage/ContentPage'
import ErrorPage from 'pages/ErrorPage/ErrorPage'
import LandingPage from 'pages/LandingPage/LandingPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import CommonLayout from 'src/layouts/CommonLayout'

export const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: (
      <CommonLayout>
        <LandingPage />
      </CommonLayout>
    ),
    meta: {
      title: 'LandingPage',
      description: 'Homepage of the application'
    }
  },
  {
    path: '/content',
    element: (
      <CommonLayout>
        <ContentPage />,
      </CommonLayout>
    ),
    meta: {
      title: 'ContentPage',
      description: 'Show user content',
      requiresAuth: true, // Indicates if authentication is required for this page
      permissions: [] // Permissions required to access this page
    }
  },
  {
    path: '/login',
    element: (
      <CommonLayout>
        <LoginPage />
      </CommonLayout>
    )
  },
  {
    path: '/404',
    element: <ErrorPage />
  }
])
