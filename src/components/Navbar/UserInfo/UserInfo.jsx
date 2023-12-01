import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLazyQuery } from '@apollo/client'
import { NAV_LOGIN } from 'src/constants/routeNames.const'
import { AuthContext } from 'src/contexts/authContext'
import { GQL_USER } from 'src/graphql/queries/user'
import {
  getHeader,
  isAuthenticationValid,
  removeSessionToken
} from 'src/utils/login.util'

import UserInfoDisplay from 'components/Navbar/UserInfoDisplay/UserInfoDisplay'

const userDefault = null

/**
 * A component that displays user information and handles user authentication.
 * @returns {JSX.Element} JSX element for displaying user information.
 */
const UserInfo = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(userDefault)
  const [fetchUser, { data }] = useLazyQuery(GQL_USER, getHeader())
  const [{ login }, setAuth] = useContext(AuthContext)

  useEffect(() => {
    if (!login) return
    fetchUser()
  }, [login])

  useEffect(() => {
    const temp = data?.Viewer.Auth.currentUser

    if (data && temp) {
      const { name: userName } = temp.user
      setUser(isAuthenticationValid() ? userName : userDefault)
    }
  }, [data])

  /**
   * Logs the user out by removing session token and updating authentication context.
   */
  const logout = () => {
    removeSessionToken()
    setAuth({ login: false })
    setUser(userDefault)
    navigate(NAV_LOGIN)
  }

  return <UserInfoDisplay user={user} logout={logout} />
}

export default UserInfo
