import express from "express";
import registerRoutes from "./register.routes"

const v1 = express.Router();

v1.use(registerRoutes);

export default v1;
