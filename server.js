const express = require('express');
const dotenv = require('dotenv');

//bring the files

const bootcamps = require('./routes/bootcamps');


// Load env vars

dotenv.config({path: './config/config.env'});




const PORT = process.env.PORT ||5000

const app = express();

// Mount the routers 


const logger = (req,res,next) =>{

    console.log(`${req.method}` )



    next();
 }

app.use(logger)
app.use('/api/v1/bootcamps', bootcamps);



app.listen(
    PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} ${dotenv}`)
)