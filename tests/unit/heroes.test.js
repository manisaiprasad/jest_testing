import httpMocks from "node-mocks-http";

import {hello} from "../../app.js";
import {heroController} from "../../controllers/hero.controller";

let req, res;
beforeEach(() => {
  // Create a mock request object
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe("hero controller", () => {
  it("should have createHero function",
     () => { expect(typeof heroController.createHero).toBe("function"); });
});
