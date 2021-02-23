import connectionDB from "../../knexfile.js";
const knex = require("knex")(connectionDB.development);

var cachedConnection;

export const getDatabaseConnector = () => {
  if (cachedConnection) {
    console.log("Cached Connection");
    return cachedConnection;
  }

  console.log("New Connection");
  cachedConnection = knex;
  return cachedConnection;
};

module.exports = getDatabaseConnector();