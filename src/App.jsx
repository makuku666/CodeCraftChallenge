import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { apolloClient } from 'src/graphql/client'
import { routerConfig } from 'src/routes/route'

import LoadSpinner from 'components/LoadSpinner/LoadSpinner'
import './App.css'

const App = () => {
  return (
    <ApolloProvider client={apolloClient()}>
      <ChakraProvider>
        <Suspense fallback={<LoadSpinner />}>
          <RouterProvider router={routerConfig} />
        </Suspense>
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default App
