import { Router } from "express";
import { getAmountMunitionsRouter, getDetailsMissilesRouter } from "../router/userDetailsRouter";

const router = Router();

router.get('/user',getAmountMunitionsRouter)

router.get('/missiles',getDetailsMissilesRouter)
export default router