import { Router } from "express";
import { dispatchRouter } from "../router/dispatchRouter";

const router = Router()

router.post('/',dispatchRouter)

export default router