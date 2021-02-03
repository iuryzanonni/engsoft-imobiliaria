import connectionDB from "../../knexfile.js";
const knex = require("knex")(connectionDB.development);

let cachedConnection;

export const getDatabaseConnector = () => {
  if (cachedConnection) {
    console.log("Cached Connection");
    return cachedConnection;
  }

  console.log("New Connection");
  cachedConnection = knex;
  return connection;
};

module.exports = getDatabaseConnector();