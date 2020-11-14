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

let currentCust = [
    {
        id: "GavinPS5",
        name: "Scotty Connor McGavin O'Brien McCleod McKraken",
        email: "HybridTheory@gmail.com",
        phone: "201-420-6969"
    }
]

//customer waiting list information

let waitingCust = [
    {
        id: "D'Argenio",
        name: "Amanda 'Panda' D'Argernio",
        email: "AmandaPanda@gmail.com",
        phone: "555-555-5555"
    }
]

//route handles Get and Post

//send to home age by default?
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve",function(req, res){
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables",function(req, res){
    res.sendFile(path.join(__dirname, "tables.html"));
});


//displays all reserved customers in JSON
app.get("/api/currentCust", function(req, res) {
    return res.json(currentCust);
});

//displays all reserved customers in JSON
app.get("/api/waitingCust", function(req, res) {
    return res.json(waitingCust);
});


//POST requests
app.post("/api/customers", function(req, res){
    //
    
    let newCustomer = req.body;

});

//server listening on port 3001
app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});