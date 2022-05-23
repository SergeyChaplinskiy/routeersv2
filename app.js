const express = require('express');
const cities = require('./node_modules/country-json/src/country-by-capital-city.json');
const url = require('url');
const app = express();
const port = 3000;


// http://localhost:3000/capital?country=latvia

const country_search = (coutry) => {
  return cities.find((item) => item.country === coutry);
}

app.get(['/', '/capital'], function (req, res) {
  if (req.method === "GET") {
    let urlRequest = url.parse(req.url, true);
    let str = urlRequest.query.country.substring(1);
    const country = urlRequest.query.country[0].toUpperCase() + str;
    const objCount = country_search(country);
    res.send(`Capital of ${objCount.country} is ${objCount.city}`);
  }
}).listen(port, 'localhost', console.log(`Server running on port: ${port}`));

