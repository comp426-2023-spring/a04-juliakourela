import {rps, rpsls} from "./lib/rpsls.js";
import express from "express";
import minimist from "minimist";

const app = express()
app.use(express.json());

let args = minimist(process.argv.slice(2));
const port = args.port || 5000;

// default check
app.get('/app', (req, res) => {
    res.status(200).send(rps(null));
})

//rps with no args
app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
})

//rps with arg
app.get('/app/rp/play', (req, res) => {
    res.status(200).send(rps(req.query.shot));
})

//rpsls with no args
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls());
})

//rpsls with arg
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
})

//post rps
app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
})

//post rpsls
app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.body.shot));
})

// get params for rps
app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(rps(req.params.shot));
})

// get params for rpsls
app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(rpsls(req.params.shot));
})

// undefined endpoint
app.get('*', (req, res) => {
    res.status(404).send("404 NOT FOUND");
})

app.listen(port, () => {
    console.log(`the app is listening!!! on port ${port}`)
})