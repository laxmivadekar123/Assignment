const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    "userName":{
        type: String,
        default:"admin"
    },
    "emailID":{
        type: String,
        default:"admin@gmail.com"
    },
    "gender":{
        type: String,
        default:"Female/male"
    },
    "phoneNumber":{
        type: Number,
        default: 1
    },
    "dob":{
        type: String,
        default:"dd-mm-yyyy"
    },
    "address":{
        type: String,
        default:"Bangalore 536005" 
    },
    "date of regestration":{
        type: Date,
        default: Date.now
    }
    // "date of regestration":{
    //     type: Date.now(),
    //     default:"dd-mm-yyyy"
    // }
})

const user = mongoose.model("user",userSchema);
module.exports = user;