import React, { useState } from 'react';
import LocationDetails from './components/LocationDetails';
import LocationList from './components/LocationList';

function App() {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);

  return (
    <div className="App">
      <LocationList onLocationSelect={setSelectedLocationId} />
      <LocationDetails selectedLocationId={selectedLocationId} />
    </div>
  );
}

export default App;
