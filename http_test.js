var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUppserCase(html) {
  let output = html.toUpperCase();
  console.log(output);
}

getHTML(requestOptions, printUppserCase);

var requestOptions2 = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printlowercase(html) {
  console.log(html.toLowerCase());
}
getHTML(requestOptions2, printlowercase);


var requestOptions3 = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReversed(html) {
  console.log(html.split("").reverse().join(""));
}
getHTML(requestOptions3, printReversed);