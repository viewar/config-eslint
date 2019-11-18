const expect = require('chai').expect;
const eslint = require('eslint');

let esLintInstance; // pseudo cache for testruns
const CLIEngine = eslint.CLIEngine;
const getInstanceOrError = () => {
  let error = false;

  try {
    esLintInstance = esLintInstance || new CLIEngine({
      useEslintrc: false,
      configFile:  './index.js',
      fix:         true,
      rules:       {
        'eol-last': 0,
      },
    });
  }
  catch (e) {
    console.log('ERROR :', e);
    error = e;
  }

  return error || esLintInstance;
};

// varifyConfig();
describe('[ESLINT] config is valid', () => {
  let esLintInstance = getInstanceOrError();

  it('create an instance of CLIEngine', () => {
    expect(esLintInstance instanceof Error).to.be.equal(false);
  });

  it('run against test string', async () => {
    const result = await esLintInstance.executeOnText(
      'const foo = \'bar\'; window.alert(foo)'
    );
    expect(result.errorCount).to.equal(0);
  });
});

describe('[EXPORTS] exports are available', () => {
  it('/prettier.config.js -> exports default as object', (done) => {
    let prettierConfig;
    try {
      prettierConfig = require('../prettier.config');
    }
    catch (err) {
      done(err);
    }

    expect(typeof prettierConfig).to.equal('object');
    done();
  });
});
