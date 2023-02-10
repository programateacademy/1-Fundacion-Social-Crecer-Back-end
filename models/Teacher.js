const mongoose = require('mongoose'); 

const teachersSchema = new mongoose.Schema({
    teacherName: {
        type: String, 
        required: true
    }
})

module.exports('Teachers', teachersSchema)
