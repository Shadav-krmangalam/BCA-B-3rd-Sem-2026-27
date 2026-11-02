const mongoose = require("mongoose")

async function MONGODB_Connection(){
    try{
        await mongoose.connect("mongodb://localhost:27017/BCA")
        console.log("Mongodb Connected")

    }catch(err){
      console.log(err)
    }
}
module.exports = MONGODB_Connection;