import express from "express"
import authControllers from "../controllers/auth.controller.js";

const router = express.Router();

router.get('/signup', authControllers.signup);

export default router;