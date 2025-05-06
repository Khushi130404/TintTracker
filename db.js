const pool = require("pg").Pool;

const pool = new pool({
  user: "postgres",
  password: "khushi",
  host: "localhost",
  port: 1304,
  database: "tint_tracker",
});

module.exports = pool;
