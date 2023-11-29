import { createBrowserRouter } from 'react-router-dom'
import ContentPage from 'pages/ContentPage/ContentPage'
import ErrorPage from 'pages/ErrorPage/ErrorPage'
import LandingPage from 'pages/LandingPage/LandingPage'
import LoginPage from 'pages/LoginPage/LoginPage'
import PrivateContent from 'src/components/PrivateContent/PrivateContent'
import {
  NAV_CONTENT,
  NAV_HOME,
  NAV_LOGIN
} from 'src/constants/routeNames.const'
import CommonLayout from 'src/layouts/CommonLayout'

export const routerConfig = createBrowserRouter([
  {
    path: NAV_HOME,
    element: <CommonLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: NAV_HOME,
        element: <LandingPage />
      },
      {
        path: NAV_CONTENT,
        element: (
          <PrivateContent requiresAuth>
            <ContentPage />
          </PrivateContent>
        )
      },
      {
        path: NAV_LOGIN,
        element: <LoginPage />
      }
    ]
  }
])
