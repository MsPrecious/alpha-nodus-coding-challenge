// location-operations.ts
import { gql } from '@apollo/client';
import client from './apollo-client';

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

// Location operations
const locationOperations = {
  createLocation: async (input: LocationCreateInput) => {
    try {
      const { data } = await client.mutate({
        mutation: CREATE_LOCATION,
        variables: { input },
      });
      return data.createLocation;
    } catch (error: any) {
      throw new Error(`Failed to create location: ${error.message}`);
    }
  },

  getLocations: async (tenant: string) => {
    try {
      const { data } = await client.query({
        query: GET_LOCATIONS,
        variables: { tenant },
      });
      return data.locations;
    } catch (error: any) {
      throw new Error(`Failed to fetch locations: ${error.message}`);
    }
  },

  getLocationDetails: async (id: string) => {
    try {
      const { data } = await client.query({
        query: GET_LOCATION_DETAILS,
        variables: { id },
      });
      return data.location;
    } catch (error: any) {
      throw new Error(`Failed to fetch location details: ${error.message}`);
    }
  },

  updateLocation: async (id: string, input: LocationUpdateInput) => {
    try {
      const { data } = await client.mutate({
        mutation: UPDATE_LOCATION,
        variables: { id, input },
      });
      return data.updateLocation;
    } catch (error: any) {
      throw new Error(`Failed to update location: ${error.message}`);
    }
  },

  deleteLocation: async (id: string) => {
    try {
      await client.mutate({
        mutation: DELETE_LOCATION,
        variables: { id },
      });
    } catch (error: any) {
      throw new Error(`Failed to delete location: ${error.message}`);
    }
  },
};


export default locationOperations;
