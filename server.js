var express = require("express");
var insta = require("instagram-node").instagram();
var app = express();


var port = 8888;

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
res.render("pages/index");
});


app.listen(port);
console.log("Server running from "+__dirname + " at port " + port + "...");
