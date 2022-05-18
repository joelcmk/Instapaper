import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState();

  const url = 'https://en.wikipedia.org/wiki/app';

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

  console.log(data ? data.data[0].text : 'jdjj');

  return <div>{data ? data.data[0].text : 'jdjj'}</div>;
}

export default App;
