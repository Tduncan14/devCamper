

// to get all the bootcamps
//@route GET/api/vi/bootcamps
//@access

exports.getBootcamps =(req,res,next) =>{

  res.status(200).json({success:true, msg:"Show all bootcamps"})



}