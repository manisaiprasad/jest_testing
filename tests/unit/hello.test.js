import { hello } from "../../app.js";
import httpMocks from "node-mocks-http";

let req, res;
beforeEach(() => {
  // Create a mock request object
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe("hello", () => {
  it("should have hello function", () => {
    expect(typeof hello).toBe("function");
  });
  it("should return 200 OK", async () => {
    await hello(req, res);
    expect(res.statusCode).toBe(200);
  });
  it("should return JSON", () => {
    hello(req, res);
    expect(res._getJSONData()).toEqual({ message: "Hello World" });
  });
});
