const express = require("express");
const path = require("path");

const app = express();

//body parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//cors
var cors = require("cors");
app.use(cors());

//routes
var routes = require("./route");
routes(app);

const port = process.env.port || 5000;
app.listen(port, console.log(`server started on port ${port}`));
