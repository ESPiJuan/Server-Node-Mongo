import { Router } from "express";
const router = Router();

import * as buystCtrl from "../controllers/buys.controller";



router.get('/',buystCtrl.getBuys)

router.get('/:userId',buystCtrl.getBuyByUserId)

router.post('/',buystCtrl.createBuy)

router.delete('/:buyId',buystCtrl.deleteBuyById)

router.put('/:buyId',buystCtrl.updateBuyById)


export default router;