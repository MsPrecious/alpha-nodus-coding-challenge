// src/components/LocationDetails.tsx

import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_LOCATION_DETAILS } from '../graphql/location-queries'; // Import your query

const LocationDetails = ({ selectedLocationId }: { selectedLocationId: string | null }) => {
  if (!selectedLocationId) {
    return <div>Select a location to view details.</div>;
  }

  const { loading, error, data } = useQuery(GET_LOCATION_DETAILS, {
    variables: { id: selectedLocationId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const location = data.location;

  return (
    <div>
      <h2>Location Details</h2>
      <div>
        <h3>Location Name: {location.name}</h3>
        <p>Address: {location.address}</p>
        {/* Display other location details */}
      </div>
    </div>
  );
};

export default LocationDetails;
