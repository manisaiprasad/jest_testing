import express from "express";

import { heroContoller } from "../controllers/hero.controller.js";

const router = express.Router();

router.post("/", heroContoller.createHero);
router.get("/", heroContoller.getHeroes);
router.put("/", heroContoller.updateHero);
router.delete("/", heroContoller.deleteHero);

export default router;
