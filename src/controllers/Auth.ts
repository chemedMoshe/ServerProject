import { Router } from "express";
import { loginRouter, registerRouter } from "../router/aouthRouter";

const router = Router()

router.post('/login',loginRouter)

router.post('/register',registerRouter)

export default router