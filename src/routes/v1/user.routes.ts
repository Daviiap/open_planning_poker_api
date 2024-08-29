import express from "express";
import userController from "../../controllers/user.controller";
import authenticationMiddleware from "../../middlewares/authentication.middleware";
import userValidators from "../../middlewares/validators/user/user.validators";

export const userRoutes = express.Router();

userRoutes.get("/user/:userID", authenticationMiddleware, ...userValidators.getValidators, userController.handleGet);

export default userRoutes;
