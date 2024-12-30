import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const MapComponent = ({ onLocationSelect, location }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={15}
      center={location}
      mapContainerStyle={{ width: "100%", height: "400px" }}
      onClick={(e) => onLocationSelect({ lat: e.latLng.lat(), lng: e.latLng.lng() })}
    >
      <Marker position={location} />
    </GoogleMap>
  );
};

export default MapComponent;
