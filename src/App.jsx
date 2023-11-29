import { RouterProvider } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from 'src/graphql/client'
import { routerConfig } from 'src/routes/route'

const App = () => {
  return (
    <ApolloProvider client={apolloClient()}>
      <RouterProvider router={routerConfig} />
    </ApolloProvider>
  )
}

export default App
