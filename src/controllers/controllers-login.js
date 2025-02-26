import { Router } from "express";
import {Login}  from "../routers/login.js";

export const routerLogin= Router()
routerLogin.post("/login",Login )

