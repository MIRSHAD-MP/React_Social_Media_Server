// REQUIRING MODULES
import express from "express";
import validateToken from "../middlewares/validateTokenHandler.js";

const router = express.Router();

//ROUTER LEVEL MIDDLEWARE
router.use(validateToken)

//CONTROLLER FUNCTIONS
import { changePassword, editProfile, fetchUserDetails } from "../controllers/settingsController.js";

// USER ROUTES
router.put('/', changePassword);
router.get('/edit-profile', fetchUserDetails);
router.put('/edit-profile', editProfile)

// EXPORT THE MODULE
export default router;