const userSchema = require("../models/user")

const signup = async(req,res)=>{
    let {name,email,password,age} = req.body

    if(!name||!email||!password||!age){
        return res.status(403).send("Invalid Credentials")
    }
    let user = await userSchema.create({name,email,password,age});

    res.status(201).json({
        message:"user Created Successfully",
        data:user
    })
}

module.exports = {signup}