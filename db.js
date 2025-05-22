const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,       // from Railway env vars
  user: process.env.DB_USER,       // from Railway env vars
  password: process.env.DB_PASSWORD, // from Railway env vars
  database: process.env.DB_NAME,   // from Railway env vars
  port: 3306                      // default MySQL port (usually Railway uses this)
});

module.exports = pool.promise();
