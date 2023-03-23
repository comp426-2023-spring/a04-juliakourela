import rps from "./lib/rpsls.js";
import rpsls from "./lib/rpsls.js";
import express from "express";
import minimist from "minimist";

const app = express()
app.use(express.json());

let args = minimist(process.argv.slice(2));