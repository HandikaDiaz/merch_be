import { Router } from "express";
import * as authContoller from "../../../contollers/auth.controller";
import { authentication } from "../../../middlewares/authentication";

const authRouter = Router();

authRouter.get('/check', authentication, authContoller.checkAuth);
authRouter.post('/register', authContoller.register);
authRouter.post('/login', authContoller.login);

// authRouter.post('/forgot-password', authContoller.forgotPassword);
// authRouter.get('/reset-password/:token', authContoller.resetPassword);
// authRouter.post('/reset-password/:token', authContoller.resetPassword);


export default authRouter;