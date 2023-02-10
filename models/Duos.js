const mongoose = require('mongoose');  

const DuosSchema = new mongoose.Schema({
    duoName: {
        type: String,
        required: true
    }, 
    teacherId: {
        type: Array, 
        required: true
    }
})

module.exports("Duos", DuosSchema); 