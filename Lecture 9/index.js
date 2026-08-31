const express = require("express");
const app = express();

app.use(express.json())

app.get("/",(req,res)=>{

    res.send("Hello World")

})

// CRUD - Create ,Read,Update ,Delete

let students = ["Alex","John","Jack"]

app.get("/student",(req,res)=>{
    res.send(students)
})

app.post("/student",(req,res)=>{
    let name = req.body.name
    students.push(name)
    res.send("Student Added Successfully")
})

app.put("/student/:index",(req,res)=>{
    let id = req.params.index
    let updatedStudent = req.body.name
    students[id] = updatedStudent;
    res.send("Student updated Successfully")
})


app.delete("/student/:index",(req,res)=>{
    let id = req.params.index

    students.splice(id,1)
    res.send("Student Deleted")
})

app.listen(3000,()=>{
    console.log("Server is  running on port 3000")
})