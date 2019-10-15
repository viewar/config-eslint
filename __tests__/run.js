const expect = require('chai').expect;
const eslint = require('eslint');

const startEngine = () => {
  let error = false,
      esLintInstance;

  const CLIEngine = eslint.CLIEngine;

  try {
    esLintInstance = new CLIEngine({
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
describe('config is valid', () => {
  let esLintInstance = startEngine();

  it('should create an instance of eslint engine', () => {
    expect(esLintInstance instanceof Error).to.be.equal(false);
  });

  it('should have no errors (ignore fixables!)', () => {
    const result = esLintInstance.executeOnText('const foo = \'bar\'; window.alert(foo)');

    expect(result.errorCount).to.equal(0);
  });
});

describe('exports prettier config as js object', () => {
  it('should import without error', (done) => {
    try {
      const prettierConfig = require('../prettier');
    }
    catch (err) {
      done(err);
    }
    done();
  });

  it('should be an js object', () => {
    const prettierConfig = require('../prettier');
    expect(typeof prettierConfig).to.equal('object');
  });
});
