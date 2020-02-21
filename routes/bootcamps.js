const express = require('express');
const {getBootcamps,getBootcamp,deleteBootcamp,createBootcamp,updateBootcamp} = require('../controllers/bootcamps');


const router = express.Router()


// middleware function take in these three things





router.get('/',getBootcamps)
router.post('/',createBootcamp)


router.get('/:id',getBootcamp)
router.put('/:id',updateBootcamp)
router.delete('/:id',deleteBootcamp)



module.exports = router