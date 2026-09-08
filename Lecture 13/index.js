// models ----> controller ---> Routes --->index.js
const express = require("express")
const app = express();
const morgan = require("morgan")

const notesRoutes = require("./routes/notesRoutes")
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan("combined"))

app.get("/",(req,res)=>{
    res.send("Home Page")
})

app.use("/api",notesRoutes)


app.listen(3000,()=>{
    console.log("Server is running on PORT 3000")
})