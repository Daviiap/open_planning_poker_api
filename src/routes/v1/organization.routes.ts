import express from "express";
import organizationController from "../../controllers/organization.controller";
import authenticationMiddleware from "../../middlewares/authentication.middleware";
import organizationValidators from "../../middlewares/validators/organization/organization.validators";

export const organizationRoutes = express.Router();

organizationRoutes.get("/organization/:organizationID", authenticationMiddleware, ...organizationValidators.getValidators, organizationController.handleGet);

organizationRoutes.post("/organization", authenticationMiddleware, ...organizationValidators.getValidators, organizationController.handleCreate);

export default organizationRoutes;
