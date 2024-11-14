import { Router } from "express";
import { dispatchRouter, getDispatchesByIdRouter, getDispatchesByLocationRouter, interceptionRouter } from "../router/dispatchRouter";

const router = Router()
router.put('/',getDispatchesByIdRouter)
router.put('/location',getDispatchesByLocationRouter)
router.post('/',dispatchRouter)
router.post('/interception',interceptionRouter)
export default router