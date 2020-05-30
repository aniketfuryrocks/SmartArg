"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const SmartArg_1 = require("./SmartArg");
const args = new SmartArg_1.default()
    .name("SmartArg")
    .version("0.0.1")
    .description("Forked repo of Arg, with smart help and version logging")
    .option(["-s", "--say"], String, "prints the value of --say")
    .option(["--secret"], Boolean, "prints a secret")
    .smartParse();
if (args["--say"])
    console.log(`You asked me to say ${args["--say"]}`);
if (args["--secret"])
    console.log("Checkout @eadded/firejs. Best React Static Generator;");
