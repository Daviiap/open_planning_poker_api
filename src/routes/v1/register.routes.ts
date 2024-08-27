import express from "express";
import registerController from "../../controllers/register.controller"
import validators from "../../middlewares/validators/register.validator"

export const registerRoutes = express.Router();

registerRoutes.post("/register", ...validators, registerController.handleRegister);

export default registerRoutes;
