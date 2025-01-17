const db = require("../dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

async function find() {
  return await db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users").where(filter);
}

async function add(user) {
  const ids = await db("users").insert(user, "id");
  const [id] = ids;
  return findById(id);
}

async function findById(id) {
  return await db("users")
    .where({ id })
    .first();
}
