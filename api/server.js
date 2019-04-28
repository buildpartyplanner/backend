const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const userRouter = require("./routers/userRouter.js");
const partiesRouter = require("./routers/partiesRouter.js");

const server = express();

server.use(cors(), helmet(), express.json());

server.use("/api/user", userRouter);
server.use("/api/party", partiesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to build week!" });
});

module.exports = server;
