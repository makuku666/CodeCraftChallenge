import { Suspense, useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthContext, authDefault } from 'src/contexts/authContext'
import { apolloClient } from 'src/graphql/client'
import { routerConfig } from 'src/routes/route'

import LoadSpinner from 'components/LoadSpinner/LoadSpinner'

import './App.css'

const App = () => {
  const [auth, setAuth] = useState(authDefault)
  return (
    <ApolloProvider client={apolloClient()}>
      <ChakraProvider>
        <Suspense fallback={<LoadSpinner />}>
          <AuthContext.Provider value={[auth, setAuth]}>
            <RouterProvider router={routerConfig} />
          </AuthContext.Provider>
        </Suspense>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
