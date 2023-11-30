import { gql } from '@apollo/client'

export const GQL_USER = gql`
  query {
    Viewer {
      Auth {
        currentUser {
          user {
            id
            name
            email
          }
        }
      }
    }
  }
`
