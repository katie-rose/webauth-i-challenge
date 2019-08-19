const express = require("express");
const server = express();
const helmet = require("helmet");

const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");

server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("It's working. IT'S WORKING!");
});

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
