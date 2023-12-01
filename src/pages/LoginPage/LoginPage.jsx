import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@apollo/client'
import { Center } from '@chakra-ui/react'
import LoginForm from 'src/components/LoginForm/LoginForm'
import { AuthContext } from 'src/contexts/authContext'
import { GQL_AUTH } from 'src/graphql/mutations/login'
import useAuth from 'src/hooks/useAuth'
import { setToken } from 'src/utils/login.util'

const LoginPage = () => {
  const [loginJwt, { data }] = useMutation(GQL_AUTH)
  const navigate = useNavigate()
  const checkAuthAndRedirect = useAuth()
  const [, setAuth] = useContext(AuthContext)

  useEffect(() => {
    if (data && data.Auth && data.Auth.loginJwt) {
      const { accessToken, refreshToken } = data.Auth.loginJwt.jwtTokens
      setToken(accessToken, refreshToken)
      setAuth({ login: true })
      checkAuthAndRedirect()
    }
  }, [data, navigate])

  const handleLogin = (v) => {
    const { email, password } = v
    loginJwt({ variables: { email, password, clientMutationId: '' } })
  }

  return (
    <Center w="100%" h="100%">
      <LoginForm onSubmit={handleLogin} />
    </Center>
  )
}

export default LoginPage
