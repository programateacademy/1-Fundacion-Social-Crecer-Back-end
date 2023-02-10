const mongoose = require("mongoose"); 

const LocationsSchema = new mongoose.Schema({
    upz: {
        type: String, 
        required: true
    },
    locationName: String, 
    locationId: {
        type: Number, 
        required: true
    }, 
    UniId: {
        type: Object,  
        required: true 
    }
}); 

module.exports = mongoose.model("Locations", LocationsSchema)