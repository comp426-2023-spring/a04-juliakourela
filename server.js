import rps from "./lib/rpsls.js";
import rpsls from "./lib/rpsls.js";
import express from "express";
import minimist from "minimist";

const app = express()
app.use(express.json());

let args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// undefined endpoint
app.get('*', (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

// default check
app.get('/app', (req, res) => {
    res.status(200).send(rps(null));
})
