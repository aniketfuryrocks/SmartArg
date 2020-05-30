"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const SmartArg_1 = require("./SmartArg");
/*
interface args {
    "--say": string,
    "--secret": boolean
}

const args: args = new SmartArg<args>()
    .name("SmartArg")
    .version("0.0.1")
    .description("Forked repo of Arg, with smart help and version logging")
    .option(["-s", "--say"], String, "prints the value of --say")
    .option(["--secret"], Boolean, "prints a secret")
    .smartParse()

if (args["--say"])
    console.log(`You asked me to say ${args["--say"]}`);
if (args["--secret"])
    console.log("Checkout @eadded/firejs. Best React Static Generator;")

*/
const argv = ['--foo', 'bar', '-ff', 'baz', '--foo', '--foo', 'qux', '-fff', 'qix'];

function myHandler(value, argName, previousValue) {
    /* `value` is always `true` */
    return 'na ' + (previousValue || 'batman!');
}

const args = new SmartArg_1.default()
    .option(["-f", "--foo"], SmartArg_1.flag(myHandler), "Counts the number of times --verbose is passed")
    .parse({argv});
console.log(args);
