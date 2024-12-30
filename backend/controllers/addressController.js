import Address from "../models/Address.js";

// Get all saved addresses
export const getAddresses = async (req, res) => {
  try {
    const addresses = await Address.find();
    res.status(200).json(addresses);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving addresses", error: err.message });
  }
};

// Save a new address
export const addAddress = async (req, res) => {
  const { category, address, latitude, longitude } = req.body;

  if (!category || !address || !latitude || !longitude) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newAddress = new Address({ category, address, latitude, longitude });
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (err) {
    res.status(500).json({ message: "Error saving address", error: err.message });
  }
};

// Delete an address
export const deleteAddress = async (req, res) => {
  try {
    await Address.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Address deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting address", error: err.message });
  }
};
