const {notes} = require("../models/data")
const getNotes = (req,res)=>{
   
    try{
        res.status(200).send(notes)
    }catch(err){
        res.status(500).send(err)
    }
}

const getNoteByID = (req,res)=>{
    
   try{
      let {id}= req.params
     

    let note = notes.find(note=>note.id === Number(id))

    if(!note) {
        return res.status(404).send("Note not Found")
    }

    res.status(200).send(note)
   }catch(err){
    res.status(500).send(err)
   }
}

const createNote = (req,res)=>{

    let {title,description,author,link,createdBy,note} = req.body

    if(!title && !description){
        return res.status(403).send("Title and description must contain value")
    }

    let newNote = {
        id:notes.length + 1,
        title,
        description,
        note,
        link,
        author,
        createdBy
    }

    notes.push(newNote)
    res.status(200).send("Note Added Successfully")

}

const updateNote = (req,res)=>{
    let {id} = req.params;

    let note = notes.find(note=> note.id === Number(id))

    Object.assign(note,req.body)
    res.status(200).send("Note Updated")
}


const deleteNote = (req,res)=>{
    let {id} = req.params;

    let note = notes.find(note=> note.id ===Number(id))
    let indexValue = notes.indexOf(note)
    notes.splice(indexValue,1)
    res.status(200).send("Note Deleted")
}

module.exports = {getNotes,getNoteByID,createNote,updateNote,deleteNote}
























// const getNoteByid = (req,res)=>{
//     let {id} = req.params

//     let data = notes.filter(note => note.id===Number(id))
//     res.status(200).send(data)

// }

// // const createNote = (req,res)=>{
// //     let 
// // }

// const updateNote = (req,res)=>{
//     let {id} = req.params;

//     let note = notes.find(note=>note.id===Number(id))

//     // let newData = {
//     //     ...notes[id-1],
//     //    ...req.body
//     // }

//     // notes[id-1] = newData; 
//     Object.assign(note,req.body)
//     res.send("successfull")
// }



// const deleteNote = (req,res)=>{
//     let {id} = req.params
//     let note = notes.find(note => note.id === Number(id))

//     let index = notes.indexOf(note)
//     notes.splice(index,1);
//     res.send("deleted")
// }
// module.exports = {getNotes}