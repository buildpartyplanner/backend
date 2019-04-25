const request = require("supertest");

const router = require("./authRouter.js");

describe("the Authentication router", () => {
  describe("POST /auth/register", () => {
    it("should send a status 400 error message if username or password are missing", async () => {
      const user = { username: "wally" };
      const res = await request(router)
        .post("/auth/register")
        .send(user);
      expect(res.status).toBe(400);
    });
  });
});