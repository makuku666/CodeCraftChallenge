import { useState } from 'react'
import { useMutation } from '@apollo/client'

// import { AUTH } from '@  src/graphql/mutations/login'
import { AUTH } from '@/src/graphql/mutations/login'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginJwt, { data, error, loading }] = useMutation(AUTH)

  const handleLogin = (e) => {
    e.preventDefault()
    console.log(email, password)
    loginJwt({ variables: { email, password } })
      // loginJwt(email, password)
      .then((res) => {
        console.log('Login successful:', res.data)
        // Handle successful login, access token etc.
      })
      .catch((err) => {
        console.error('Login failed:', err)
        // Handle login error
      })
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
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
        />
      </div>
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginPage
