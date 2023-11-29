import { gql } from '@apollo/client'

export const GQL_CONTENT = gql`
  query {
    Admin {
      Tree {
        GetContentNodes {
          edges {
            node {
              structureDefinition {
                title
              }
            }
          }
        }
      }
    }
  }
`
