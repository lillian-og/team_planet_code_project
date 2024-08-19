const prompt = require('prompt-sync')();
// require gravityFactors from "./gravityFactors.js"
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienFactors = require('./alienGravityFactors.js');
// create a function called calculateWeightOnPlanets

// pass an argument of earthWeight
function showUserFactors(factorType, fcatorPlanets, factorMeasurement, factorValue) {
    let results = {};
    let measurment;
    let factorType;
    let factorSystem;
    let factorMeasurement;
    let factorValue;
    let factorPlanets;

    console.log(`Your ${factorType} is ${factorValue} ${factorMeasurements} on ${factorPlanets}`)

    for (let planet in gravityFactors) {
        results[planet] = parseFloat((gravityFactors[planet] * value).toFixed(2))
    }

    switch (type) {
        case "jump":
            measurment = "cm";
            break;
        case "weight":
            measurment = "kg";
            break;
        default:
            measurment = "units"
    }

    for (let planet in results) {
        console.log(`Your ${type} on ${planet} is ${results[planet]} ${measurment}`);
    }
}

function getUserInput() { 
    console.log("Are you calculating jump or weight?");
    let type = prompt(">> ");
    console.log("Enter value");
    let value = prompt(">> ");

    while (true) {
        break;
    }
    while (true) {
        break;
    }
    while (true) {
        break;
    }
    while (true) {
        break;
    }

    showUserFunction(type, value);
}

function getAlienInput() {
}


// return the planetWeights object from the function
// console.log(planetWeights);

global.showUserFactors = showUserFactors;
global.getUserInput = getUserInput;
getUserInput();
// console.log("Your weight on other planets is:");
// console.log(calculateWeight(100));
// console log the planetWeights assume the function
// is passed in an earthWeight of 100(kg)

// make a comment at the bottom of the script
// telling a user how to run the script from node
// run in the terminal `node calculateWeight.js'