import React, { useState } from "react";

const PermissionModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleEnableLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log("Location enabled:", position.coords);
        setIsVisible(false);
      },
      (error) => {
        console.error("Error enabling location:", error.message);
        alert("Failed to enable location. Please try manually.");
      }
    );
  };

  const handleSearchManually = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="permission-modal">
          <p>Location permission is off. Please enable location or search manually.</p>
          <button onClick={handleEnableLocation}>Enable Location</button>
          <button onClick={handleSearchManually}>Search Manually</button>
        </div>
      )}
      <button onClick={() => setIsVisible(true)}>Open Modal</button>
    </>
  );
};

export default PermissionModal;
