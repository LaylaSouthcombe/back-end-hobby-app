const { Pool } = require("pg");

const pool = new Pool({connectionString: "postgres://dzxcvyim:gMm3OHmxbNLX3vsXMqrjIFGXw_xtlvvN@ella.db.elephantsql.com/dzxcvyim"});

module.exports = pool;
