const mongoose = require("mongoose");
const config = require("config")

const db = config.get("mongoURI")

const connectDB = async()=>{
    try{
        await mongoose.connect(db,{ useUnifiedTopology: true },{
            user: 'admin',
            pwd: 'password',
            roles: [ { role: 'root', db: 'admin' } ]
          });
        console.log("mongoDB is connected successfully");
    }
    catch(err){
        console.log("mongoDB is not connected"); 
        process.exit(1)
    }
}

module.exports = connectDB;