var path = require("path");
var fs = require("fs");
// const { parse } = require("path");
var db = fs.readFileSync("./db/db.json", "utf-8")
const notes = JSON.parse(db);

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {
        res.json(notes);
    });


    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        notes.push(newNote);

        return console.log("Added new note: " + notes.title);

    });

    app.delete("/api/notes/:id", function(req, res) {



    });







};