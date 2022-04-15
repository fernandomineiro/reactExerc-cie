import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const notes = [
  {
    id: 1,
    content: "HTML é fácil",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser roda em js",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST são protocolos",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
);