// location-queries.ts
import { gql } from '@apollo/client';

// Define GraphQL queries and mutations
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

export const UPDATE_LOCATION = gql`
  mutation UpdateLocation($id: ID!, $input: LocationUpdateInput!) {
    updateLocation(id: $id, data: $input) {
      id
      name
      address
      # Add other fields you need
    }
  }
`;

export const DELETE_LOCATION = gql`
  mutation DeleteLocation($id: ID!) {
    deleteLocation(id: $id)
  }
`;

// Define types for input data
export type LocationCreateInput = {
  name: string;
  address: string;
  // Add other properties as needed
};

export type LocationUpdateInput = {
  name?: string;
  address?: string;
  // Add other properties as needed
};
