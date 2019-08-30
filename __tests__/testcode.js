let failedImport = require('../env/node.js');
const { failedImportNamed } = require('../env/node');

const myObject = {
  'var':           true,
  exp:           'test',
  dfsfg:         'fdsfgsd',
  arrayInObject: [ 1, 2, 3 ],
};

const test = () => {
  if (var1 === 'test') {
    const test1 = true;
    const test2 = false;
  }
  console.log('failedImportNamed :', failedImportNamed);

  let test = true,
      test2 = false;
};

let testObject = {
  test: 'fdsfg',
  foo:  'bar',
};
