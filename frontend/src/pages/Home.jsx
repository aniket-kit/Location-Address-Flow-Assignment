import React, { useContext } from "react";
// import { AppContext } from "../context/AppContext";
import MapComponent from "../components/Map/MapComponent";
import PermissionModal from "../components/Modal/PermissionModal";

const Home = () => {
  const { selectedLocation, setSelectedLocation } = useContext(AppContext);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div className="home-page">
      <h1>Choose Your Location</h1>
      <PermissionModal />
      <MapComponent location={selectedLocation} onLocationSelect={handleLocationSelect} />
    </div>
  );
};

export default Home;
