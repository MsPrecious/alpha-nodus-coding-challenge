// src/components/LocationList.tsx

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '../graphql/location-queries'; // Import your query

// Define the type for a location object
interface Location {
  id: string;
  name: string;
  address: string;
  // Define other fields based on your GraphQL query
}

const LocationList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { tenant: '692627ef-fda8-4203-b108-e8e9f52ad410' },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Typecast data.locations to an array of Location
  const locations: Location[] = data.locations;

  return (
    <div>
      <h2>Location List</h2>
      {locations.map((location: Location) => (
        <div key={location.id}>
          <span>{location.name}</span>
          <p>{location.address}</p>
          {/* Display other location details */}
        </div>
      ))}
    </div>
  );
};

export default LocationList;
