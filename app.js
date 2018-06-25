var express = require("express");
var app = express();

var server = app.listen(process.env.port, function() {
    console.log("Node.js is listening to PORT:" + server.address().port);
});

app.get("/", function(req, res, next){
    res.sendFile(__dirname+"/index.html");
});
app.get("/rts.js", function(req, res, next){
    res.sendFile(__dirname+"/rts.js");
});
app.get("/favorites.js", function(req, res, next){
    res.sendFile(__dirname+"/favorites.js");
});
app.get("/update-data", function(req, res, next){
    require(__dirname+"/update-data.js");
    res.status(200).send('ok!');
});