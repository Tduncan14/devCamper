

// to get all the bootcamps
//@route GET/api/vi/bootcamps
//@access public

exports.getBootcamps =(req,res,next) =>{

  res.status(200).json({success:true, msg:"Show all bootcamps"})



}

// get a single bootcamp
// @route  Get/ api/v1/bootcamps/:id
//access Public

exports.getBootcamps = (req,res,ext) => {
    res.status(200).json({success:true,msg:`show the ${req.params.id}`})
}


// Put create a bootcamp
//@route Post/api/v1/bootcamps
//private meaans you have to logged in


exports.createBootcamp = (req,res,next) =>{

    res.status(200).json({
        success:true, msg:`Create new bootcamp ${req.params.id}`
    })

}

// update bootcamp
//route Put /api/v1/bootcamps/:id
//@access Private

exports.updateBootcamp = (req,res,next) =>{

    res.status(200).json({
        success:true, msg: `this is the ${req.params.id}`
    })

 
}


// delete bootcamp
//@ route Delete /api/v1/bootcamps/:id
//@access Private
exports.deleteBootcamp = (req,res,next) =>{

    res.status(200).json({
        success:true,
        msg:`this is to delete the bootcamp ${req.params.id}`
    })

}
