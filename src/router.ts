import { Router } from "express";
import {sessionUserController} from "./controller/SessionUserController"
import {AuthMiddleware} from './services/Middleware/AuthMiddleware';

const auth: AuthMiddleware = new AuthMiddleware();
const router: Router = Router()

//MAPPEAR ROTAS AQUI!!!
router.post("/", auth.Authentication, sessionUserController.AuthUser)
router.get("/user", sessionUserController.testeUser);

export {router}
