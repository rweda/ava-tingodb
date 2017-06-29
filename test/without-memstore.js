const test = require("ava");
const tingo = require("../tingodb");
const Promise = require("bluebird");
const path = require("path");
const fs = require("fs");

tingo({
  tingo: {
    memStore: false,
  },
});

test("creates tmpdir", t => {
  t.is(typeof t.context["tingodb-tmp"], "object");
});

test("creates database files", t => {
  const collection = Promise.promisifyAll(t.context.db.collection("test"));
  return collection
    .insertAsync({ foo: 1 })
    .then(() => {
      t.true(fs.existsSync(path.join(t.context["tingodb-tmp"].path, "test")));
    });
});
