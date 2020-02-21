const express = require('express');
const dotenv = require('dotenv');
// const logger = require('./middleware/logger')
const connectDB = require('./config/db');

const morgan = require('morgan');
//bring the files




// Load env vars

dotenv.config({path: './config/config.env'});

const bootcamps = require('./routes/bootcamps');


// Connect to the database

connectDB();

const PORT = process.env.PORT ||5000

const app = express();



// Mount the routers 


if(PORT === true){
app.use(morgan('dev'))

}


app.use('/api/v1/bootcamps', bootcamps);


app.listen(
    PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT} ${dotenv}`)
)