import express from "express";

import {heroContoller} from "../controllers/hero.controller.js";

const router = express.Router();

router.post("/", heroContoller.createHero);
router.get("/", heroContoller.getHeroes);

export default router;
