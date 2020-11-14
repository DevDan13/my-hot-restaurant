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
        id: "Gavin56",
        name: "Gavin 'O'Brien O'Scott' O'Brien",
        email: "TheOBriens@gmail.com",
        phone: 555-555-5555
    }
]

//customer waiting list information

let waitingCust = [
    {
        id: "D'Argenio",
        name: "Amanda 'Panda' D'Argernio",
        email: "AmandaPanda@gmail.com",
        phone: 555-555-5555
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


//displays all reserved customers
app.get("/api/currentCust", function(req, res) {
    return res.json(currentCust);
  });

app.listen(PORT, function(){
    console.log("Server listening on: http://localhost:" + PORT);
});