import { Router } from "express";

import luckRouter from "../routers/luckRouter";

const router = Router();
router.use(luckRouter)


export default router;