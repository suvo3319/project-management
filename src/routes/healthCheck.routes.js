import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controllers.js";

const healthRouter = Router();

healthRouter.route("/").get(healthCheck);
healthRouter.route("/instagram").get(healthCheck);

export { healthRouter };
