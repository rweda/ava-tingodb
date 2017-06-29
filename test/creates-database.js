const test = require("ava");
const tingo = require("../tingodb");

tingo();

test("provides 'db'", t => {
  t.is(typeof t.context.db, "object");
});

test("DB has '.collection' method", t => {
  t.is(typeof t.context.db.collection, "function");
});
