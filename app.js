//Requires

//Se esta haciendo una destructuracion del archivo importado
const { createFile, listTable } = require('./multiply/multiply');

const colors = require('colors');
const argv = require('./config/yargs').argv;


//Program

let command = argv._[0];

switch (command) {

    case 'list':
        listTable(argv.base, argv.limit);
        break;

    case 'create':
        createFile(argv.base, argv.limit)
            .then(file => console.log(`File created ${ file }`))
            .catch(error => console.log(error));
        break;

    default:
        console.log("Command not recognized");

}

console.log(argv);