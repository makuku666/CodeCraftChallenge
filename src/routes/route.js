import { createBrowserRouter } from 'react-router-dom'
import LoginPage from 'src/pages/LoginPage/LoginPage'
import App from 'src/App'

export const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])
