const Pool = require("pg").Pool;

const pool = new Pool({ //set up config inside here
    user: "postgres",
    password: "aim4more",
    host: "localhost",
    port: 5432,
    database: "nsa-group-app"
});

module.exports = pool;