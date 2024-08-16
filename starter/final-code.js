const prompt = require('prompt-sync')();

const gravityFactors = require('./utils/earthGravityFactors.js');
const alienFactors = require('./utils/alienGravityFactors.js');

function showUsersFactors(type, value) {
    let results = {};

    let measurement;

    for (let planet in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2))
    }




    switch (type) {
        case 'jump':
            measurement = "cm";
            break;
        case 'weight':
            measurement = "kg";
            break;
        default:
            measurement = "units";
    }

    for (let planet in results) {
        console.log(`your ${type} on ${planet} is ${results[planet]} ${measurement}`);
    }

}


function getUserInput() {
    console.log("would you like to calculate your jump or weight on a planet?");
    let type = prompt("> ");



    console.log(`what is your earth ${type}`);
    let value = prompt("> ");
    showUsersFactors(type, value);

    if (!isNan === true) {
        parseFloat((input).toFixed(2)) < 100000;
    };


}

global.showUsersFactors = showUsersFactors;
global.getUserInput = getUserInput;