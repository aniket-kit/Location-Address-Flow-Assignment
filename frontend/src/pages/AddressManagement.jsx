import React, { useContext, useEffect } from "react";
// import { AppContext } from "../context/AppContext";
import AddressList from "../components/AddressList/AddressList";

const AddressManagement = () => {
  const { addresses, fetchAddresses } = useContext(AppContext);

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <div className="address-management">
      <h1>Manage Your Addresses</h1>
      <AddressList addresses={addresses} />
    </div>
  );
};

export default AddressManagement;
