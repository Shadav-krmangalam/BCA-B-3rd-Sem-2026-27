const isAuthorized = (req,res,next)=>{
    let token = req.headers.authorization;
    token = Number(token)
  

    if(!token){
        return res.status(401).send("Access Denied")
    }
    if(token !=123987){
         return res.status(401).send("Access Denied")
    }

    next();
}


const isLoggedIn = (req,res,next)=>{
    let logIn = false;

    if(!logIn){
        return res.status(401).send("Access Denied")

    }
    next()
}


module.exports = {isAuthorized,isLoggedIn};