import mongoose from "mongoose";

const addressSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Optional: link to user
  category: { type: String, enum: ["Home", "Office", "Friends & Family"], required: true },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
});

const Address = mongoose.model("Address", addressSchema);
export default Address;
