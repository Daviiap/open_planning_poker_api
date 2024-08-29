import express from "express";
import userController from "../../controllers/user.controller";
import authMiddleware from "../../middlewares/auth.middleware";
import userValidators from "../../middlewares/validators/user/user.validators";

export const userRoutes = express.Router();

userRoutes.get("/user/:userID", authMiddleware, ...userValidators.getValidators, userController.handleGet);

export default userRoutes;
