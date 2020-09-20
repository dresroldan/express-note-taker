const fs = require("fs");
const db = fs.readFileSync("./db/db.json", "utf-8")
const notesDB = JSON.parse(db);

module.exports = function(app) {

    app.get("/api/notes", function(req, res) {

        res.json(notesDB);
    });


    app.post("/api/notes", function(req, res) {

        let newNote = req.body;
        let uniqueID = (notesDB.length).toString();
        newNote.id = uniqueID

        notesDB.push(newNote);
        writeNewDB();

        return console.log("Added new note: " + newNote.title);

    });


    app.delete("/api/notes/:id", function(req, res) {
        notesDB.splice(req.params.id, );
        writeNewDB();
        console.log("Deleted note with id " + req.params.id);
    });


    function writeNewDB() {
        fs.writeFile("./db/db.json", JSON.stringify(notesDB, '\n'), err => {
            if (err) throw err;
            return true;
        });
    }





};