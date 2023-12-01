import { useNavigate } from 'react-router-dom'
import { NAV_CONTENT, NAV_HOME } from 'src/constants/routeNames.const'
import { isAuthenticationValid } from 'src/utils/login.util'

/**
 * Hook for handling authentication status and redirection based on authentication validity.
 * @returns {Function} Function to check authentication and redirect accordingly.
 */
const useAuth = () => {
  const navigate = useNavigate()

  /**
   * Checks authentication validity and redirects accordingly.
   */
  const checkAuthAndRedirect = () => {
    if (isAuthenticationValid()) {
      navigate(NAV_CONTENT)
    } else {
      navigate(NAV_HOME)
    }
  }

  return checkAuthAndRedirect
}

export default useAuth
