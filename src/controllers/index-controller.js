import { Router } from "express";
import { routerUser } from "./controller-users.js";
import { routerLogin } from "./controllers-login.js";

export const router= Router()
router.use(routerUser)
router.use(routerLogin)

