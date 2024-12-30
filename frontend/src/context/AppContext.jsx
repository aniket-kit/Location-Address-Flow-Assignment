import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [addresses, setAddresses] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 37.7749, // Default location (e.g., San Francisco)
    lng: -122.4194,
  });

  const fetchAddresses = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/addresses");
      const data = await response.json();
      setAddresses(data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
    }
  };

  return (
    <AppContext.Provider
      value={{ addresses, setAddresses, selectedLocation, setSelectedLocation, fetchAddresses }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
