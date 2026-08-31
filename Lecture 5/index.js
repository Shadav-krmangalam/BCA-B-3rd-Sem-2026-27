// const os = require("os")


// console.log(os.platform())

// console.log(os.arch())

// console.log(os.hostname())

// console.log(os.totalmem()/1024/1024/1024)

// console.log(os.freemem()/1024/1024/1024)


//fs Module

const fs = require("fs")


//To Create and Write

// fs.writeFile("data.txt","Hello World",(err)=>{
//     if(err) console.log(err)
//         else console.log("File Created")
// })


//To Read 

// fs.readFile("data.txt","utf8",(err,res)=>{
//    if(err) console.log(err)
//     else console.log(res)
// })

//To Update

// fs.appendFile("data.txt"," BCA B 3rd sem",(err)=>{
//     if(err) console.log(err)
//         else console.log("file updated")
// })

//To Delete

// fs.unlink("data.txt",(err)=>{
//     if(err) console.log(err)
//         else console.log("File deleted")
// })


//Path - Module

const path = require("path")

const filepath = path.join("home","user","temp","file.txt")

// console.log(path.dirname(filepath))

// console.log(path.basename(filepath))

// console.log(path.extname(filepath))

//CRYPTO - Module

// const crypto = require("crypto")

// let hashed = crypto.createHash("sha256").update("abc123").digest("hex")

// console.log(hashed)


//DNS - Module

const dns = require("dns")

dns.lookup("google.com",(err,address,family)=>{
    if(err) console.log(err)
        else{
     console.log(address)
     console.log(family)
        }
})