const mongoose = require('mongoose'); 

const teachersSchema = new mongoose.Schema({
    teacherName: {
        type: String, 
        
    }
})

module.exports('Teachers', teachersSchema)
