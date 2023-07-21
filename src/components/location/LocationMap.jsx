import React, { useState } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 51.505,
  lng: -0.09,
};

function LocationMap() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "",
  });

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelectedLocation({ lat, lng });
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onClick={handleMapClick}
    >
      {selectedLocation && <Marker position={selectedLocation} />}
    </GoogleMap>
  ) : (
    <div>Loading Map...</div>
  );
}

export default LocationMap;
