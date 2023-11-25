import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'

import Test from 'components/Test'

export const routerConfig = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>Error</div>
  },
  {
    path: '/test',
    element: <Test />
  }
])
