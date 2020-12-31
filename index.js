var express = require("express");
var app = express();
app.use(express.static("public"));
app.use('/css', express.static('public/css'));
app.use('/img', express.static('public/img'));
app.set("view engine", "ejs");
app.set();
app.set("views", "./views");
app.listen(3000);

app.get("/", function(req, res){
    res.render("trangchu_CV");
});