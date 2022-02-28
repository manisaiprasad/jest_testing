import jest from "jest-mock";
import httpMocks from "node-mocks-http";

import {heroContoller} from "../../controllers/hero.controller.js";
import {HeroModel} from "../../model/hero.model.js";
import allHeros from "../mock-data/all-heros.json";
import newHero from "../mock-data/new-hero.json";

HeroModel.create = jest.fn(); // tracker chip
HeroModel.find = jest.fn();
let req, res;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe("Hero controller", () => {
  beforeEach(() => { req.body = newHero; });

  it("should have createTodo function",
     () => { expect(typeof heroContoller.createHero).toBe("function"); });

  it("should return 201 response code", async () => {
    await heroContoller.createHero(req, res);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should call HeroModel.create", async () => {
    await heroContoller.createHero(req, res);
    expect(HeroModel.create).toBeCalledWith(newHero);
    // HeroModel.create(newHero); -> Atlas
  });

  it("should call HeroModel.create", async () => {
    HeroModel.create.mockReturnValue(newHero); // fake returnvalue of create
    await heroContoller.createHero(req, res);
    expect(res._getJSONData()).toStrictEqual(newHero);
  });
});

describe("Hero controller get Heroes", () => {
  it("should have getHeroes function",
     () => { expect(typeof heroContoller.getHeroes).toBe("function"); });
  it("should call HeroModel.find", async () => {
    await heroContoller.getHeroes(req, res);
    expect(HeroModel.find).toBeCalled();
  });
  it("should return 200 response code", async () => {
    HeroModel.find.mockReturnValue(allHeros);
    await heroContoller.getHeroes(req, res);
    expect(res.statusCode).toBe(200);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(allHeros);
  });
});

// mock/fake value
//   const res = {
//      json:  () => {}
//   }
