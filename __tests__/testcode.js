const failedImport = require('../env/node.js');
const { failedImportNamed } = require('../env/node');

const myObject = {
  'var':           true,
  exp:           'test',
  dfsfg:         'fdsfgsd',
  arrayInObject: [ 1, 2, 3 ],
};

const test = () => {
  if (myObject == 'test') {
    const test1 = true;
    const test2 = false;
  }
  console.log('failedImportNamed :', failedImportNamed);

  const test = true;
  const test2 = false;
};

const testObject = {
  test: 'fdsfg',
  foo:  'bar',
};
