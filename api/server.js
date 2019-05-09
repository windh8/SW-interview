const express = require('express');
const cors = require('cors');

const app = express();

const sampleSales = require('./data/sampleSales');

app.use(cors());

const port = process.env.PORT || 8000;

app.get('/sampleSales', (req, res) => {
  res.json(sampleSales);
  //res.json([]);
});

app.listen(port, (err) => {
  if(err) {
    console.log(`Error: ${err}`);
  }
  else {
    console.log(`API Server Listening on port ${port}`);
  }
})
