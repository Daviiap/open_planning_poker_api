import express from "express";
import authenticationMiddleware from "../../middlewares/authentication.middleware";
import projectValidators from "../../middlewares/validators/project/project.validators";
import projectController from "../../controllers/project.controller";

export const projectRoutes = express.Router();

projectRoutes.get("/project/:projectID", authenticationMiddleware, ...projectValidators.getValidators, projectController.handleGet);

projectRoutes.post("/project", authenticationMiddleware, ...projectValidators.getValidators, projectController.handleCreate);

export default projectRoutes;
