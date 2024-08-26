import express from "express";
import registerController from "../../controllers/register.controller"

export const registerRoutes = express.Router();

registerRoutes.post("/register", registerController.handleRegister);

export default registerRoutes;
