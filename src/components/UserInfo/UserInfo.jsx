import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { NAV_LOGIN } from 'src/constants/routeNames.const'
import { GQL_USER } from 'src/graphql/queries/user'
import {
  getHeader,
  isAuthenticationValid,
  removeSessionToken
} from 'src/utils/login.util'

const userDefault = null

const UserInfo = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(userDefault)
  const { data } = useQuery(GQL_USER, getHeader())

  useEffect(() => {
    const temp = data?.Viewer.Auth.currentUser

    if (data && temp) {
      const { name: userName } = temp.user
      setUser(isAuthenticationValid() ? userName : userDefault)
    }
  }, [data])

  const logout = () => {
    removeSessionToken()
    setUser(userDefault)
    navigate(NAV_LOGIN)
  }

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user}!</p>
          <button type="button" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <p>
            Please <Link to={NAV_LOGIN}>login</Link> to continue.
          </p>
        </div>
      )}
    </div>
  )
}

export default UserInfo
