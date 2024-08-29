import express from "express";
import validators from "../../middlewares/validators/user/user.validators";
import userController from "../../controllers/user.controller";
import authMiddleware from "../../middlewares/auth.middleware";

export const userRoutes = express.Router();

userRoutes.get("/user/:userID", authMiddleware, ...validators.get, userController.handleGet);

export default userRoutes;
