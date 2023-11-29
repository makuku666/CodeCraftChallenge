import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { GQL_AUTH } from 'src/graphql/mutations/login'
import useAuth from 'src/hooks/useAuth'
import { setToken } from 'src/utils/login.util'

const inputDefault = ''

const LoginPage = () => {
  const [email, setEmail] = useState(inputDefault)
  const [password, setPassword] = useState(inputDefault)
  const [loginJwt, { data }] = useMutation(GQL_AUTH)
  const navigate = useNavigate()
  const checkAuthAndRedirect = useAuth()

  useEffect(() => {
    if (data && data.Auth && data.Auth.loginJwt) {
      const { accessToken, refreshToken } = data.Auth.loginJwt.jwtTokens
      setToken(accessToken, refreshToken)
      checkAuthAndRedirect()
    }
  }, [data, navigate])

  const handleLogin = (e) => {
    e.preventDefault()
    loginJwt({ variables: { email, password, clientMutationId: '' } })
    setEmail(inputDefault)
    setPassword(inputDefault)
  }

  const form = (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-label="Email"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-label="Password"
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )

  return form
}

export default LoginPage
