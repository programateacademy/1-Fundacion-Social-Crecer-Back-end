const mongoose = require("mongoose");

// user schema data
const MunicipioSchema = mongoose.Schema({
    CODIGO_DEPARTAMENTO: String
})

module.exports = mongoose.model('Municipio', MunicipioSchema);