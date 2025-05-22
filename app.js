require('dotenv').config();
require('dotenv').config({ path: './.env' });

console.log('DB_USER:', process.env.DB_USER);


const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schools');

const app = express();
app.use(bodyParser.json());

app.use('/api', schoolRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
