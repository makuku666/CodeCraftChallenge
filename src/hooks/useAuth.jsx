import { useNavigate } from 'react-router-dom'
import { NAV_CONTENT, NAV_HOME } from 'src/constants/routeNames.const'
import { isAuthenticationValid } from 'src/utils/login.util'

const useAuth = () => {
  const navigate = useNavigate()

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
