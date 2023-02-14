const mongoose = require("mongoose"); 

const LocationsSchema = new mongoose.Schema({
    upz: {
        type: String, 
        
    },
    locationName: String, 
    locationId: {
        type: Number, 
        
    }, 
    UniId: {
        type: Object,  
         
    }
}); 

module.exports = mongoose.model("Locations", LocationsSchema)