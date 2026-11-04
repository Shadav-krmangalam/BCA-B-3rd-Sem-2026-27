const userSchema = require("../models/user")

const signup = async(req,res)=>{
    let {name,email,password,age,course} = req.body

    // if(!name||!email||!password||!age){
    //     return res.status(403).send("Invalid Credentials")
    // }
    let user = await userSchema.create({name,email,password,age,course});

    res.status(201).json({
        message:"user Created Successfully",
        data:user
    })
}

const login = async(req,res)=>{
    let {email,password} = req.body;
    if(!email || !password){
        return res.status(403).send("Email and password are required")
    }
  let user = await userSchema.findOne({email})
//if email is wrong
   if(!user){
     return res.status(404).send("User Not Found - Please Signup")
   }

   //if email is authenticated
   if(user.password!==password){
    return res.status(401).send("Invalid credentials")
   }


   res.status(200).json({
    message:"User login Successfully",
    data:user

   })

}

module.exports = {signup,login}