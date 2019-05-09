const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();

const sampleSales = require('./data/sampleSales');

app.use(cors())

const port = process.env.PORT | 8000;

app.get('/sampleSales', (req, res) => {
  console.log(sampleSales)
  /*fs.readFile('./data/sampleSales.json', 'utf8', (err, data) => {
    if(err) {
      res.json({"error": "error"})
    }
    res.json(JSON.parse(data));
  });*/
  //console.log(sampleSales)
  res.json(sampleSales);
});

app.listen(port, (err) => {
  if(err) {
    console.log(`Error: ${err}`);
  }
  else {
    console.log(`API Server Listening on port ${port}`);
  }
})
