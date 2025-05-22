const mysql = require('mysql2');
require('dotenv').config();

// Parse the DB_HOST URL to get host, port, user, password, database
const { URL } = require('url');
const dbUrl = new URL(process.env.DB_HOST);

const pool = mysql.createPool({
  host: dbUrl.hostname,
  port: dbUrl.port,
  user: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.replace('/', ''),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('DB connection error:', err);
  } else {
    console.log('DB connected!');
    connection.release();
  }
});

module.exports = pool.promise();
