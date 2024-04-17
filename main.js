#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
[];
console.log(chalk.blueBright("\n\t Welcome to Muhammad Asad Currency Convertor\n"));
const currency = {
    USD: 1,
    INR: 83.30,
    OMR: 0.38,
    AUD: 1.52,
    IQD: 1308.17,
    HKD: 7.83,
    EUR: 0.92,
    EGP: 47.33,
    IRR: 42075,
    IDR: 15887,
    NZD: 1.66,
    PKR: 277.54,
    QAR: 3.64,
    SAR: 3.75,
    RSD: 108.13,
    LKR: 298.61,
    YER: 250.45,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        type: 'list',
        message: "Please select your Currency",
        choices: ["USD", "INR", "OMR", "AUD", "IQD", "HKD", "EUR", "EGP", "IRR", "IDR", "NZD", "QAR", "SAR", "RSD", "LKR", "YER", "PKR"],
    },
    {
        name: "to",
        type: "list",
        message: "Please select your currency you want to Exchange",
        choices: ["USD", "INR", "OMR", "AUD", "IQD", "HKD", "EUR", "EGP", "IRR", "IDR", "NZD", "QAR", "SAR", "RSD", "LKR", "YER", "PKR"],
    },
    {
        name: "Amount",
        type: "number",
        message: "Please Enter your amount"
    }
]);
let fromAmount = currency[userAnswer.from];
let toAmount = currency[userAnswer.to];
let amount = userAnswer.Amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(`Your select currency ${fromAmount}`);
console.log(`Your currency  Exchanger ${toAmount}`);
console.log(`Your amount ${amount}`);
console.log(chalk.yellow('Your converted amount is:' + (convertedAmount.toFixed(2))));
