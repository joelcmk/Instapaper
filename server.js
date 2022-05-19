const axios = require('axios');
const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const { convert } = require('html-to-text');
const data = require('./data');
const bodyParser = require('body-parser');
var fs = require('fs');
const { callbackify } = require('util');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const puppeteer = require('puppeteer');

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

const dataTest = [];
links = 'https://joelsaucedo.com/about.html';

const test = 'https://joelsaucedo.com/about.html';

(async () => {
  url = test;
  const response = await axios.get(url);
  var text = convert(response.data, {});

  app.post('/test', (req, res) => {
    var name = req.body.url;
    dataTest.push({ text });
    res.send(text);
  });
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://joelsaucedo.com/about.html');
  let element = await page.$('div');
  let value = await page.evaluate((el) => el.textContent, element);
  console.log(value);
  let h1 = await page.$('h1');
  let title = await page.evaluate((el) => el.textContent, h1);
  console.log(title);
  await browser.close();
})();

app.get('/test', function (req, res) {
  res.send(dataTest); //Line 10
});

(async () => {
  app.post('/express_backend', function (req, res) {
    var name = req.body.url;
    res.send(name);
    callbackify(name);
  });

  function callbackify(e) {
    dkkd = e;
    (async () => {
      url = e;
      const response = await axios.get(url);
      var text = convert([response.data], {
        baseElements: { selectors: ['body'] },
        formatters: {
          // Create a formatter.
          fooBlockFormatter: function (elem, walk, builder, formatOptions) {
            builder.openBlock({
              leadingLineBreaks: formatOptions.leadingLineBreaks || 1,
            });
            walk(elem.children, builder);
            builder.addInline('!');
            builder.closeBlock({
              trailingLineBreaks: formatOptions.trailingLineBreaks || 1,
            });
          },
        },
        selectors: [
          { selector: 'h1', options: { bold: true } },
          { selector: 'table', options: { uppercaseHeaderCells: false } },
        ],
      });

      app.get('/express_backend', (req, res) => {
        res.send(text);
      });
    })();
  }
})();

// create a GET route
