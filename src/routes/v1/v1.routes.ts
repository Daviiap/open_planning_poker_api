import express from "express";
import registerRoutes from "./register.routes"
import loginRoutes from "./login.routes";
import userRoutes from "./user.routes";

const v1 = express.Router();

v1.use(loginRoutes)
v1.use(registerRoutes);
v1.use(userRoutes);

export default v1;
