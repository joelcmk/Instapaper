const axios = require('axios');
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const { convert } = require('html-to-text');
var fs = require('fs');
const puppeteer = require('puppeteer');

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

const dataTest = [];
const links = ['url'];

const test = 'https://fs.blog/learning/';

(async () => {
  url = test;
  const response = await axios.get(url);
  var text = convert(response.data, {});
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://fs.blog/learning/');
  const response = await page.goto(url);
  //console.log(await response.text());
  const test = await response.text();
  dataTest.push({ test });
  await browser.close();
})();

app.get('/test', function (req, res) {
  res.send(dataTest); //Line 10
});
