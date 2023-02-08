const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config( {path: "./.env"} ); 
const beneficiariesRoutes = require("./routes/beneficiariesRoutes");

//Definicion del servidor
const app = express();
app.use (express.json());

//Asignacion de puerto de escucha del servidor
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})

//Asignacion de variables de entorno de acceso a la BD
const USER = process.env.USER; 
const PASSWORD = process.env.PASSWORD; 
const DBNAME = process.env.DBNAME; 

//Conexion a BD
const uri = `mongodb+srv://crecerdbuser:yG59j9XxYnkajgzp@fundacioncrecer.swvdyyt.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

//Rutas de la matriz de beneficiarios
app.use("/beneficiaries", beneficiariesRoutes);