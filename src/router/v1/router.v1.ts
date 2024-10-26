import { Router } from "express";
import authRouter from "./child/auth";
import categoryRouter from "./child/category";
import productRouter from "./child/product";
import profileRouter from "./child/profile";

const routerV1 = Router();

routerV1.use('/auth', authRouter);
routerV1.use('/category', categoryRouter);
routerV1.use('/product', productRouter);
routerV1.use('/profile', profileRouter);

export default routerV1;