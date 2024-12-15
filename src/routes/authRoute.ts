import { Router } from "express";
import passport from "passport";
import AuthController from '../controllers/AuthController'

const router = Router();

router.get("/login", AuthController.showLoginPage);
router.get("/register", AuthController.showRegisterPage);

router.post("/login", passport.authenticate('local'), AuthController.handleLogin);
router.post("/register", AuthController.handleRegister);
router.post("/logout", AuthController.handleLogout);


export default router;