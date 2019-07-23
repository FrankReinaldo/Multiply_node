//Requires
const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit) => {

    console.log("=========".green);
    console.log("=========".red);
    console.log("=========".blue);
    for (i = 1; i <= limit; i++) {
        console.log(`${ base } * ${ i } = ${ base * i } \n`);
    }
};

let createFile = async(base, limit) => {

    if (!Number(base)) {
        throw new Error(`The base entered it is not a number`);
    }

    let data = "";

    for (let i = 1; i <= limit; i++) {
        data += `${ base } * ${ i } = ${ base * i } \n`;
    }

    fs.writeFile(`table-(${ base }).txt`, data, (err) => {

        if (err) {
            throw new Error(err);
        } else {
            return (`tabla-${ base }.txt`)
        }
    });
};

module.exports = {
    createFile,
    listTable
};