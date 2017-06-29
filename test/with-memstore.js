const test = require("ava");
const tingo = require("../tingodb");

tingo();

test("doesn't create tmpdir", t => {
  t.is(typeof t.context["tingodb-tmp"], "undefined");
});
