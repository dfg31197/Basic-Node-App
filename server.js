var express = require("express");
var insta = require("instagram-node").instagram();
var app = express();


var port = 8888;
insta.use({
// get access token here: http://instagram.pixelunion.net/
access_token: "2201840928.1677ed0.7798ce602d98412ab34a731fc302b2c9",
});

app.use(express.static(__dirname + "/public"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
insta.user_self_media_recent((err,medias,pagination,remaining,limit)=>{
res.render("pages/index",{grams: medias});
});
});


app.listen(port);
console.log("Server running from "+__dirname + " at port " + port + "...");
