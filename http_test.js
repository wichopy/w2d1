var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};

function printUppserCase(html) {
  let output = html.toUpperCase();
  console.log(output);
}

getHTML(requestOptions, printUppserCase);