import { Router } from "express";
import { dispatchRouter, getDispatchesByIdRouter, getDispatchesByLocationRouter, interceptionRouter } from "../router/dispatchRouter";
import verify from "../Middleware/verify";
const router = Router()

router.put('/',verify as any,getDispatchesByIdRouter)

router.put('/location',getDispatchesByLocationRouter)

router.post('/',verify as any,dispatchRouter)

router.post('/interception',verify as any,interceptionRouter)

export default router