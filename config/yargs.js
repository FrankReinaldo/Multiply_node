//Requires

const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
};

const argv = require("yargs")
    .command("list", "Print in the console multiplication table", options)
    .command("create", "Generate a file with the multiplication table", options)
    .help()
    .argv;


module.exports = {
    argv
};