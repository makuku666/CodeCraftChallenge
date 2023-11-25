import { gql } from '@apollo/client'

export const getLocationsQuery = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`
