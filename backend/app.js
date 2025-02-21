const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const app = express();
const cors = require('cors');
const connectToDb = require('./db/db');
const userRouter = require('./routes/user.routes');

connectToDb();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(userRouter)

app.get('/',(req,res)=>{
    res.send('Hellow World')
})

app.use('/users',userRouter);

module.exports = app;