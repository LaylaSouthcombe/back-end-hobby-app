const { Pool } = require("pg");

const pool = new Pool({connectionString: "postgresql://postgres:tHNPc31bUBa55vNbqEgJ@containers-us-west-153.railway.app:6270/railway"});

module.exports = pool;
