// Lily and Dominique

const prompt = require('prompt-sync')();
const gravityFactors = require('./utils/earthGravityFactors.js');
const alienFactors = require('./alienGravityFactors.js');
let factorType;
let factorSystem;
let factorMeasurement = "repititions";
let factorValue;
let factorPlanets;
let results = {};


function UserInput() {

    console.log("What type would you like to measure? ('jump', 'weight', 'pushups')");
    factorType = prompt(">> ");

    if (factorType === "pushups") {
        factorMeasurement;
    } else {

        console.log("Imperial or Metric ('1' for Imperial, '2' for Metric)");
        factorSystem = prompt(">> ")

        if (factorSystem === "metric") {
            if (factorType === "jump") {
                factorMeasurement = "cm";
            }
            if (factorType === "weight") {
                factorMeasurement = "kg";
            }
        }
        else if (factorSystem === "imperial") {
            if (factorType === "jump") {
                factorMeasurement = "in";
            }
            if (factorType === "weight") {
                factorMeasurement = "lbs";
            }
        }
    }

}

function hsowUserFactors(factorType,)