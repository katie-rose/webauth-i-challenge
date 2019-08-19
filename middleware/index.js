const bcrypt = require("bcryptjs");
const Users = require("../data/models/userModel");

const authenticate = async (req, res, next) => {
  const { username, password } = req.headers;

  try {
    const user = await Users.findBy({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      next();
    } else {
      res.status(401).json({ message: "That's a no from me dawg" });
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = authenticate;
