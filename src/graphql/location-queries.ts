// src/graphql/location-queries.ts

import { gql } from '@apollo/client';

export const GET_LOCATIONS = gql`
  query GetLocations($tenant: String!) {
    locations(where: { tenant: $tenant }) {
      id
      name
      address
      # Add other fields you need
    }
  }
`;

export const GET_LOCATION_DETAILS = gql`
  query GetLocationDetails($id: ID!) {
    location(id: $id) {
      id
      name
      address
      # Add other fields you need
    }
  }
`;

export const CREATE_LOCATION = gql`
  mutation CreateLocation($input: LocationCreateInput!) {
    createLocation(data: $input) {
      id
      name
      address
      # Add other fields you need
    }
  }
`;

// Define other queries and mutations as required by your coding challenge
