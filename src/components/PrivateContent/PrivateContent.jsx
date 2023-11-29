import { Navigate } from 'react-router-dom'
import { NAV_HOME } from 'src/constants/routeNames.const'
import { isAuthenticationValid } from 'src/utils/login.util'

const PrivateContent = ({ children, requiresAuth = true }) => {
  if (requiresAuth && isAuthenticationValid()) {
    return children
  }

  return <Navigate to={NAV_HOME} />
}

export default PrivateContent
