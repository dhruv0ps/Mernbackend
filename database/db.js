const mongoose = require("mongoose");
require('dotenv').config();

const DBConnection = async () => {
  
  try{
await mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true});
console.log("database connected")
  }
  catch(error){
    console.error('Error while fetching the data ' , error.message);

  }
}

module.exports = DBConnection;