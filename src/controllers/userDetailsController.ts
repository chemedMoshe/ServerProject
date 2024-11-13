import { Router } from "express";
import { getMunitionsByUserRouter, getDetailsMissilesRouter } from "../router/userDetailsRouter";

const router = Router();

router.get('/user', getMunitionsByUserRouter)

router.get('/missiles', getDetailsMissilesRouter)
export default router