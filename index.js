const express = require('express');
const { resolve } = require('path');
require('dotenv').config();
const app = express();
app.use(express.json());
const port = 3010;
const connectedDb = require('./database.js');

connectedDb();
app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.use('/menu', require('./Routes.js'));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
