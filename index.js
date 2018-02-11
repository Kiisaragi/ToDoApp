var task = ["Clean the room"];
var done = ["Clean the sala"];
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.set("view engine", "ejs");
app.get("/", function(req, res) {
    res.render("index", { task: task, done: done });
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/add", function(req, res) {
    var add = req.body.new;
    task.push(add);
    res.redirect("/");
});

app.post("/delete", function(req, res) {
    var fin = req.body.check;
    if (typeof fin === "string") {
        done.push(fin);
        task.splice(task.indexOf(fin), 1);
    } else if (typeof fin === "object") {
        for (var i = 0; i < fin.length; i++) {
            done.push(fin[i]);
            task.splice(task.indexOf(fin[i]), 1);
        }
    }
    res.redirect("/");
});






app.listen(3000, function() {
    console.log("server is running on port 3000");
});
