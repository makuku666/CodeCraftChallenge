import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {
  NAV_CONTENT,
  NAV_HOME,
  NAV_LOGIN
} from 'src/constants/routeNames.const'
import CommonLayout from 'src/layouts/CommonLayout'

const ContentPage = lazy(() => import('pages/ContentPage/ContentPage'))
const ErrorPage = lazy(() => import('pages/ErrorPage/ErrorPage'))
const LandingPage = lazy(() => import('pages/LandingPage/LandingPage'))
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'))
const PrivateContent = lazy(
  () => import('src/components/PrivateContent/PrivateContent')
)

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
