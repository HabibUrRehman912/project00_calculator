#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Input 1st number", type: "number", name: "firtInt" },
    { message: "Input 2nd number", type: "number", name: "secondInt" },
    {
        message: "Please Provide Operators",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
switch (answer.operator) {
    case "Addition":
        console.log("The Answer is :" + (answer.firtInt + answer.secondInt));
        break;
    case "Subtraction":
        console.log("The Answer is :" + (answer.firtInt - answer.secondInt));
        break;
    case "Multiplication":
        console.log("The Answer is :" + (answer.firtInt * answer.secondInt));
        break;
    case "Division":
        console.log("The Answer is :" + (answer.firtInt / answer.secondInt));
        break;
    default:
        console.log("Please select valid operator or numbers");
        break;
}
