import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = () => {
  const client = new ApolloClient({
    uri: 'https://staging.api.constellation.academy/api/graphql',
    cache: new InMemoryCache()
  })

  return client
}
