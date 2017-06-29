const modconf = require("modconf");

module.exports = modconf
  .module("npm:@rweda/ava-tingodb")
  .option(Object, "tingo", {
    description: "Configuration to pass to the TingoDB 'require'",
  })
  .option(Object, "db", {
    description: "Options to pass to the TingoDB constructor",
    default: {},
  })
  .option(Object, "tmp", {
    description: "Configuration to pass to '@rweda/ava-tmpdir' if not using in-memory storage.",
  })
  .option(String, "path", {
    description: "The DB path to use.  If using in-memory storage, uses a UUID.  Otherwise uses a temporary directory.",
  })
  .option(String, "context", {
    description: "The AVA context variable to store the TingoDB database in",
    default: "db",
  })
  .defaults({
    tingo: {
      memStore: true,
    },
    tmp: {
      context: "tingodb-tmp",
      path: false,
    },
  });
