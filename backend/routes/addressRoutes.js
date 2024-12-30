import express from "express";
import { getAddresses, addAddress, deleteAddress } from "../controllers/addressController.js";

const router = express.Router();

router.get("/", getAddresses);
router.post("/", addAddress);
router.delete("/:id", deleteAddress);

export default router;
