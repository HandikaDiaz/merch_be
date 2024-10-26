import { Router } from "express";
import * as productController from "../../../contollers/product.controller";
import { authentication } from "../../../middlewares/authentication";
import upload from "../../../middlewares/upload";

const productRouter = Router();

productRouter.get('/get-all', productController.getAllProducts);
productRouter.get('/get', authentication, productController.getProductByUserId);
productRouter.post('/create/:id', authentication, upload.single('image'), productController.createProduct);// middleware nanti pake authorize
productRouter.put('/edit/:id', authentication, upload.single('image'), productController.editProduct);// middleware nanti pake authorize
productRouter.delete('/delete/:id', authentication, productController.deleteProduct);// middleware nanti pake authorize


export default productRouter;