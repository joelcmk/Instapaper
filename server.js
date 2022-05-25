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
links = 'https://example.org/';

const test = 'https://example.org/';

(async () => {
  url = test;
  const response = await axios.get(url);
  var text = convert(response.data, {});
})();

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.org/');
  const response = await page.goto(url);
  //console.log(await response.text());
  const test = await response.text();
  dataTest.push({ test });
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
