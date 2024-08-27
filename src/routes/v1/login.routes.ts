import express from "express";
import validators from "../../middlewares/validators/login.validator"
import loginController from "../../controllers/login.controller";

export const loginRoutes = express.Router();

loginRoutes.post("/login", ...validators, loginController.handleLogin);

export default loginRoutes;
