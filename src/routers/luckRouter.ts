import { Router } from "express";
import * as controller from "../controllers/person-controller";

const luckRouter = Router();
luckRouter.get("/person", controller.getPerson)


export default luckRouter;