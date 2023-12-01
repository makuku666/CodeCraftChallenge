import { Navigate } from 'react-router-dom'
import { NAV_HOME } from 'src/constants/routeNames.const'
import { isAuthenticationValid } from 'src/utils/login.util'

/**
 * A component that handles rendering content based on authentication status.
 * @param {Object} props - The props for the PrivateContent component.
 * @param {boolean} props.requiresAuth - Flag indicating if authentication is required. Defaults to true.
 * @param {JSX.Element} props.children - The content to be rendered if authentication is valid.
 * @returns {JSX.Element} JSX element representing either the children or redirecting to home.
 */
const PrivateContent = ({ children, requiresAuth = true }) => {
  if (requiresAuth && isAuthenticationValid()) {
    return children
  }

  return <Navigate to={NAV_HOME} />
}

export default PrivateContent
