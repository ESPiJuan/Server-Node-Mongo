import { Router } from "express";
const router = Router();

import * as producstCtrl from "../controllers/products.controller";



router.get('/',producstCtrl.getProducts)

router.get('/:productId',producstCtrl.getProductById)

router.post('/',producstCtrl.createProduct)

router.delete('/:productId',producstCtrl.deleteProductById)

router.put('/:productId',producstCtrl.updateProductById)


export default router;