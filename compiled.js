"use strict";

var _indexJs = require('./index.js');

var App = function App() {
  return React.createElement(
    "div",
    { id: "main" },
    React.createElement(
      "h1",
      null,
      "Hello PlusJS JSX!"
    ),
    React.createElement(
      "p",
      null,
      "This is rendered via JSX."
    )
  );
};

(0, _indexJs.render)(App());
