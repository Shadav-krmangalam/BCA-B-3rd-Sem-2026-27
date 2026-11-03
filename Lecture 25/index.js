// models ----> controller ---> Routes --->index.js
const express = require("express")
const app = express();
const morgan = require("morgan")
const db = require("./config/db")
db();
const notesRoutes = require("./routes/notesRoutes")
const userRoutes = require("./routes/userRoutes")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/api",notesRoutes)
app.use("/user",userRoutes)


app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})