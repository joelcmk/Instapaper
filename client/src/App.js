import React, { useState, useEffect, ReactDOM } from 'react';
import axios from 'axios';
import './App.css';
import * as htmlparser2 from 'htmlparser2';
import * as sanitizeHtml from 'sanitize-html';

function App() {
  const [data, setData] = useState();

  const url = 'https://en.wikipedia.org/wiki/Apple';

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

  const text = (
    <>
      <h1>Hello world </h1>
      <p>hello there</p>
      <h1>last one</h1>
      <h3>dhdlslf</h3>
    </>
  );

  const parser = new htmlparser2.Parser({
    onopentag(name, attributes, attri) {
      /*
       * This fires when a new tag is opened.
       *
       * If you don't need an aggregated `attributes` object,
       * have a look at the `onopentagname` and `onattribute` events.
       */
      if (name === 'text' && attributes.type === 'h1') {
        console.log('JS! Hooray!');
      }

      console.log('hello', name, 'hdk', attributes.attributeName);
    },
    ontext(text, name) {
      /*
       * Fires whenever a section of text was processed.
       *
       * Note that this can fire at any point within text and you might
       * have to stitch together multiple pieces.
       */

      console.log('-->', text);
      console.log('skkd', data);
    },

    onclosetag(tagname, name) {
      /*
       * Fires when a tag is closed.
       *
       * You can rely on this event only firing when you have received an
       * equivalent opening tag before. Closing tags without corresponding
       * opening tags will be ignored.
       */
      if (tagname === 'h1') {
        console.log(tagname);
      }
      console.log('tagname', name);
    },
    onopentagname(name) {
      console.log('last one', name);
    },
  });
  parser.write(data ? data.data[0].test : 'dkdk');
  parser.end();

  const html2 = '<strong>hello world</strong>';
  console.log(sanitizeHtml(html2));

  const test = text.props.children.map((t) => t);

  const unwanted = test.filter((x) => x.type !== 'h1');

  //console.log(unwanted.map((x) => x.props.children));

  const final = test.map((x) => x.props.children);

  const pTest = final.map((x) => x);

  //console.log(data ? data.data[0].test : 'dkdk');

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

  //const htmlPart1 = htmlPart.replace(/<html>/g, '');
  //const htmlPart2 = htmlPart1.replace(/<\/html>/g, '');

  console.log();

  return (
    <div>
      {RenderHTML}
      {test
        ? test.map((x) => {
            return x.type === 'h1' ? (
              <h1>{x.props.children}</h1>
            ) : (
              <p>{x.props.children}</p>
            );
          })
        : 'kdkd'}
    </div>
  );
}

export default App;
