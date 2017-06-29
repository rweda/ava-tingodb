const test = require("ava");
const TingoOpts = require("./config");

function hook(opts) {
  opts = TingoOpts.use(opts);
  if((!opts.tingo || !opts.tingo.memStore) && !opts.path) {
    const tmpdir = require("@rweda/ava-tmpdir");
    tmpdir(opts.tmp);
  }

  test.beforeEach(t => {
    const TingoDB = require("tingodb")(opts.tingo).Db;
    if(opts.tingo.memStore) {
      t.context[opts.context] = new TingoDB(opts.path || require("uuid/v4")(), opts.db);
    }
    else {
      t.context[opts.context] = new TingoDB(opts.path || t.context[opts.tmp.context].path, opts.db);
    }
  });

  test.afterEach(t => {
    return t.context[opts.context].close();
  });
}

module.exports = hook;
