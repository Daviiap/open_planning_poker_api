import express from "express";
import cors from "cors";
import helmet from "helmet";
import routesV1 from "./routes/v1/v1.routes";
import env from "./env";


if (!env.API_PORT) {
    console.log("no port value especified, running on port 3000.");
}

const PORT = env.API_PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use("/v1", routesV1);

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
