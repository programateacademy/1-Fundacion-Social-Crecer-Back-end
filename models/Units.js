const mongoose = require('mongoose'); 

const UnitsSquema = new mongoose.Schema({
    unit_name: String, 
    duoId: {
        type: Object, 
        required: true
    } 
});  

module.exports = mongoose.model("Units", UnitsSquema); 