const http = require("http")

const server = http.createServer((req,res)=>{

//    res.write("<h1>Hello World</h1>")
//    res.write("<p>This is node js class</p>")
//    res.end()


    //  console.log(req.url)
    //  res.end()



   //   if(req.url === "/"){
   //      res.write("<h1>Home page</h1>")
   //      res.end()
   //   }

   //   if(req.url === "/about"){

   //      res.write("<h1>About page</h1>")
   //      res.end()

   //   }


   // console.log(req.headers)


   let body = "";

   req.on("data",(chunk)=>{
        body+=chunk
   })
  
   req.on("end",()=>{
      res.end(body);
   })


})

server.listen(3000,()=>{
    console.log("Server is running on port : 3000")
})