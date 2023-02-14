const mongoose = require('mongoose');  

const DuosSchema = new mongoose.Schema({
    duoName: {
        type: String,
        
    }, 
    teacherId: {
        type: Array, 
        
    }
})

module.exports("Duos", DuosSchema); 