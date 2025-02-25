const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRouter = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

connectToDb();

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.send('Hellow World')
})

app.use('/users',userRouter);
app.use('/captains',captainRoutes);

module.exports = app;