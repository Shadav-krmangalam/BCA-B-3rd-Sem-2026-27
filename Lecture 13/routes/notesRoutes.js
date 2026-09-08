const express = require("express");
const { getNotes, getNoteByID, createNote, updateNote, deleteNote } = require("../controllers/notesController");
const router = express.Router();

router.get("/notes",getNotes)
router.get("/notes/:id",getNoteByID)
router.post("/create-note",createNote)
router.put("/update-note/:id",updateNote)
router.delete("/delete-note/:id",deleteNote)



module.exports = router