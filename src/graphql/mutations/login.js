import { gql } from '@apollo/client'

export const GQL_AUTH = gql`
  mutation Login(
    $email: String!
    $password: String!
    $clientMutationId: String!
  ) {
    Auth {
      loginJwt(
        input: {
          email: $email
          password: $password
          clientMutationId: $clientMutationId
        }
      ) {
        jwtTokens {
          accessToken
          refreshToken
        }
        clientMutationId
      }
    }
  }
`
