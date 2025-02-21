const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type:String,
            required:true,
            minlength:[3,"First name must be at least 3 chatacters long"]
        },
        lastname:{
            type:String,
            minlength:[3,"last name must be at least 3 chatacters long"]
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:[6,"Email must be at least 6 chatacters long"]
    },
    password:{
        type:String,
        required:true,
    },
    socketId:{
        type:String,
    }
})

module.exports = mongoose.model('User',userSchema)
 