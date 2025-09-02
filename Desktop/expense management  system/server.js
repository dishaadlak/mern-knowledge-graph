const express = require('express');//basic server create karte hai
const cors=require('cors');
const morgan=require('morgan')
const dotenv=require('dotenv');
const connectDb = require('./config/connectDb');
require('colors');
//config dot env file
dotenv.config();
//database connect 
connectDb();
//rest object create karege
const app = express();//aaab express ke saare features hum app ki madd se use kar sakte h ya access kar skte hai

//middlewares add karege
app.use(express.json());
app.use(cors());//ye middlewares hai jo json data ko parse karege
app.use(morgan("dev"));

//routes
app.get('/',(req,res)=>{
    res.send('<h1>hello from server</h1>');

});
//port
const PORT= 8080 || process.env.PORT;
//listen server
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
});