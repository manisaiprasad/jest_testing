import { HeroModel } from "../model/hero.model.js";

async function createHero(req, res) {
  const createdHero = await HeroModel.create(req.body);
  res.status(201).json(createdHero);
}

// getHeroes -> unit + integeration
// HeroModel.find({})
async function getHeroes(req, res) {
  const heroes = await HeroModel.find({});
  res.status(200).json(heroes);
}

export const heroContoller = {
  createHero,
  getHeroes,
};
