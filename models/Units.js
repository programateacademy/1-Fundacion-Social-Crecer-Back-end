const mongoose = require('mongoose'); 

const UnitsSquema = new mongoose.Schema({
    unit_name: String, 
    duoId: {
        type: Object, 
        
    } 
});  

module.exports = mongoose.model("Units", UnitsSquema); 