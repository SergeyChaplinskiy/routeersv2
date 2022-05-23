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









//=======================================================================================

  // const fs = require('fs');
// const cities = require('./node_modules/country-json/src/country-by-capital-city.json')
// const http = require('http');
// const url = require('url');

// const country_search = (coutry) => {
//     return cities.find((item) => item.country === coutry);
// }

// http.createServer((request, response) => {
//     if (request.method === 'GET') {
//         let urlRequest = url.parse(request.url, true);
//         console.log(urlRequest);
//         if(urlRequest.pathname === '/capital') {
//                 let str = urlRequest.query.country.substring(1);
//                 const country = urlRequest.query.country[0].toUpperCase()+str;
//                 const objCount = country_search(country);
//                 response.end(`Capital of ${objCount.country} is ${objCount.city}`);
//         }
//     } else {console.log('Только запрос GET');}
// }).listen(3000, '127.0.0.1');

// console.log('Server work');