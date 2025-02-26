import { Router } from "express";
import { ContactosUser, Users } from "../routers/users.js";

export const routerUser= Router()
routerUser.get("/users", Users)
routerUser.post("/users", ContactosUser)

