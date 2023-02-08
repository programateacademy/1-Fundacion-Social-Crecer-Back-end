//ESQUEMA DE PRUEBA DE PETICIONES
const mongoose = require("mongoose");

const PruebaSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    telefono: String,
});

module.exports = mongoose.model("Prueba", PruebaSchema);