import React, { useState, useEffect, ReactDOM } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState();

  const url = 'https://joelsaucedo.com/about.html';

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
    </>
  );

  const test = text.props.children.map((t) => t);

  const unwanted = test.filter((x) => x.type !== 'h1');

  //console.log(unwanted.map((x) => x.props.children));

  const final = test.map((x) => x.props.children);

  const pTest = final.map((x) => x);

  console.log(pTest);

  return (
    <div>
      {data ? data.data[0].text : 'jdjj'}
      {final.map((x) => (
        <h1>{x}</h1>
      ))}
    </div>
  );
}

export default App;
