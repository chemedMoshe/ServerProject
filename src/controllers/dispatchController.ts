import { Router } from "express";
import { dispatchRouter, getDispatchesByIdRouter, getDispatchesByLocationRouter, interceptionRouter } from "../router/dispatchRouter";
import verify from "../Middleware/verify";
const router = Router()

router.put('/',getDispatchesByIdRouter)

router.put('/location',getDispatchesByLocationRouter)

router.post('/',dispatchRouter)

router.post('/interception',interceptionRouter)

export default router