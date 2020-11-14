//our dependencies
const express = require("express");
const path = require("path");

//express setup
const app = express();
const PORT = process.env.PORT || 3001;

//boilerplate middleware data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Customer reservation information

//let customers

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});