const express = require("express");
const { getNotes, getNoteByID, createNote, updateNote, deleteNote } = require("../controllers/notesController");
const {isAuthorized,isLoggedIn} = require("../middlewares/isAuthorized");
const router = express.Router();

router.get("/notes",isAuthorized,isLoggedIn,getNotes)
router.get("/notes/:id",isAuthorized,getNoteByID)
router.post("/create-note",createNote)
router.put("/update-note/:id",updateNote)
router.delete("/delete-note/:id",deleteNote)



module.exports = router