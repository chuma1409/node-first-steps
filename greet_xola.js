const chalk = require('chalk');
//import the greet module that is in the current folder
const greet = require('./greet');

const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)
var figlet = require('figlet');
 
figlet(greet('Xola'), function(err, data) {
    "use strict";
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log( chalk.bgYellowBright.black(data))
});