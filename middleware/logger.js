  // Logs request ot console.
  
  const logger = (req,res,next) =>{

    console.log(`${req.method}` )



    next();
 }



 module.exports = logger;