const express = require('express');



const router = express.Router()



router.get('/',(req,res) =>{
    res.status(200).json({success:true , msg:'show all'})
})

router.get('/:id',(req,res) =>{
    res.status(200).json({success:true , id: req.params.id})
})


router.post('/:id',(req,res) =>{
   res.status(200).json({
       success:true, msg:`Create new bootcamp ${req.params.id}`
   })
})


router.put('/:id',(req,res) =>{
   res.status(200).json({
       success:true, msg: `this is the ${req.params.id}`
   })
})


router.delete('/:id',(req,res) =>{
   
   res.status(200).json({
       success:true,
       msg:`this is to delete the bootcamp ${req.params.id}`
   })
})



module.exports = router