const express = require("express");
const server = express();
const helmet = require("helmet");
const session = require("express-session");

const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");

server.get("/", (req, res) => {
  res.send("It's working. IT'S WORKING!");
});

const sessionConfig = {
  name: "mordor",
  secret: "keep it secret, keep it safe!",
  cookie: {
    maxAge: 1000 * 60 * 10,
    secure: false,
    httpOnly: true
  },
  resave: false,
  saveUnitialized: true
};

server.use(helmet());
server.use(express.json());
server.use(session(sessionConfig));
server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

module.exports = server;
