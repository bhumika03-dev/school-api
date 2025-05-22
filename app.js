require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const schoolRoutes = require('./routes/schools'); //  routes file

const app = express();
app.use(bodyParser.json());

// Simple test route to check if server runs
app.get('/ping', (req, res) => {
  res.send('pong');
});

// Use your school routes under /api
app.use('/api', schoolRoutes);

// Listen on port provided by Railway or default 3000 locally
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
// Use PORT provided in environment or default to 3000
const port = process.env.PORT || 3000;

// Listen on port and 0.0.0.0
app.listen(port, "0.0.0.0", function () {
  // ...
});
