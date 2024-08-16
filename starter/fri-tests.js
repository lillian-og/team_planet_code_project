const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienFactors = require('./alienGravityFactors.js');
let factorType;
let factorSystem;
let factorMeasurement;
let factorValue;
let factorPlanets;
let results = {};
let measurment;

validTypes = ["jump", "weight", "pushups"];

functionUserInput() {
    console.log("What type would you like to measure? ('jump', 'weight', 'pushups')");
    let factorType = prompt(">> ");
    typeMatch = false;

    for (let i = 0; i < validTypes.length - 1; i++) {
        if (factorType === validTypes[i]) {
            typeMatch = true;
            break;
        }
    }

    if (typeMatch = true) {
        switch (factorValue) {
            case jump:
        }
    } else { 
        console.log("Your type input is not valid, try again.")
    }
    
}