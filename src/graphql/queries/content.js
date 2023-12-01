import { gql } from '@apollo/client'

export const GQL_CONTENT = gql`
  query GetContentNodes($first: Int!) {
    Admin {
      Tree {
        GetContentNodes(first: $first) {
          edges {
            node {
              id
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
