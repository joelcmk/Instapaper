import React, { useState, useEffect, ReactDOM } from 'react';
import axios from 'axios';
import './App.css';
import * as sanitizeHtml from 'sanitize-html';

function App() {
  const [data, setData] = useState();

  const url = 'https://fs.blog/learning/';

  useEffect(() => {
    axios
      .post('/test', {
        url,
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .post('/express_backend', {
        url,
      })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get('/test')
      .then(function (response) {
        // handle success

        setData(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const htmlPart = data ? data.data[0].test : 'dkdk';
  const tes = sanitizeHtml(htmlPart, {
    allowedTags: [
      'address',
      'article',
      'aside',
      'footer',
      'header',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'hgroup',
      'main',
      'nav',
      'section',
      'blockquote',
      'dd',
      'div',
      'dl',
      'dt',
      'figcaption',
      'figure',
      'hr',
      'li',
      'form',
      'noscript',
      'main',
      'ol',
      'p',
      'pre',
      'ul',
      'a',
      'abbr',
      'b',
      'bdi',
      'bdo',
      'br',
      'cite',
      'code',
      'data',
      'dfn',
      'em',
      'i',
      'kbd',
      'mark',
      'q',
      'rb',
      'rp',
      'rt',
      'rtc',
      'ruby',
      's',
      'samp',
      'small',
      'span',
      'strong',
      'sub',
      'sup',
      'time',
      'u',
      'var',
      'wbr',
      'caption',
      'col',
      'colgroup',
      'table',
      'tbody',
      'td',
      'tfoot',
      'th',
      'thead',
      'tr',
    ],
    disallowedTagsMode: 'discard',
  });
  const RenderHTML = <div dangerouslySetInnerHTML={{ __html: tes }} />;

  return <div>{RenderHTML}</div>;
}

export default App;
