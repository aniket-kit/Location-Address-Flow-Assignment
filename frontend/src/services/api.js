import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

export const fetchAddresses = () => API.get("/addresses");
export const addAddress = (addressData) => API.post("/addresses", addressData);
export const deleteAddress = (id) => API.delete(`/addresses/${id}`);
