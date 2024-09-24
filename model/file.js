const mongoose = require('mongoose') 

const fileSchema = mongoose.Schema({
    path : {
        type :String,
        required:true
    },
    name : {
        type :String,
        require: true
        
    },
    downloadContent:{
         type :String,
         required : true,
         default : 0
    }
})

 const File = mongoose.model('file',fileSchema);
 module.exports = File;