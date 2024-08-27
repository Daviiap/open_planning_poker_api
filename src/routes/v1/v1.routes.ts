import express from "express";
import registerRoutes from "./register.routes"
import loginRoutes from "./login.routes";

const v1 = express.Router();

v1.use(loginRoutes)
v1.use(registerRoutes);

export default v1;
