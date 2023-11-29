import { Suspense } from 'react'
import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from 'src/graphql/client'
import { routerConfig } from 'src/routes/route'

import LoadSpinner from 'components/LoadSpinner/LoadSpinner'

const App = () => {
  return (
    <ApolloProvider client={apolloClient()}>
      <Suspense fallback={<LoadSpinner />}>
        <RouterProvider router={routerConfig} />
      </Suspense>
    </ApolloProvider>
  )
}

export default App
