import React from "react";

const AddressList = ({ addresses }) => {
  return (
    <div className="address-list">
      {addresses.map((address) => (
        <div key={address._id} className="address-item">
          <h3>{address.category}</h3>
          <p>{address.address}</p>
          <p>
            Latitude: {address.latitude}, Longitude: {address.longitude}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AddressList;
