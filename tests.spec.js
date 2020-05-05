const { join } = require('path');
const expect = require('chai').expect;
const eslint = require('eslint');

let esLintInstance; // pseudo cache for testruns
const getInstanceOrError = () => {
  let error = false;

  try {
    esLintInstance = esLintInstance || new eslint.CLIEngine({
      useEslintrc: false,
      configFile:  join(process.cwd(), './index.js'),
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

esLintInstance = getInstanceOrError();

describe('[CONFIG] is valid', () => {
  it('create an instance of CLIEngine', () => {
    expect(esLintInstance instanceof Error).to.be.equal(false);
  });

  it('run against test string', async () => {
    const result = await esLintInstance.executeOnText(
      'const foo = \'bar\'; window.alert(foo)',
    );
    expect(result.errorCount).to.equal(0);
  });
});

describe('[ESLINT] execute on files', () => {
  it('runs on JS files (\'./utils/**/*.js\')', async () => {
    const result = await esLintInstance.executeOnFiles(
      join(process.cwd(), './utils/**/*.js'),
    );

    expect(result.errorCount).to.equal(0);
  });
});

describe('[EXPORTS] exports are available', () => {
  it('/prettier.config.js -> exports object as default', (done) => {
    let prettierConfig;
    try {
      prettierConfig = require('./prettier.config');
    }
    catch (err) {
      done(err);
    }

    expect(typeof prettierConfig).to.equal('object');
    done();
  });
});
