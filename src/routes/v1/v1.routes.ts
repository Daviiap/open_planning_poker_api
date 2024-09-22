import express from "express";
import registerRoutes from "./register.routes"
import loginRoutes from "./login.routes";
import userRoutes from "./user.routes";
import projectRoutes from "./project.routes";
import organizationRoutes from "./organization.routes";

const v1 = express.Router();

v1.use(loginRoutes)
v1.use(registerRoutes);
v1.use(userRoutes);
v1.use(organizationRoutes);
v1.use(projectRoutes);

export default v1;
