import express from "express";

import {heroController} from "../controllers/hero.controller";

const router = express.Router();

router.post("/", heroController.createHero);
router.get("/", heroController.getAllHeroes);

export default router;
