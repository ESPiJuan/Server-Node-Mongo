import {Router} from "express";
const router = Router();
import * as authtCtrl from "../controllers/auth.controller";

router.post('/signup',authtCtrl.signup)
router.post('/signin',authtCtrl.signin)
export default router;