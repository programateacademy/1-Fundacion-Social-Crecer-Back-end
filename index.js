const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
// Create server
require("dotenv").config( {path: "./.env"} ); 

//Definicion del servidor
const app = express();
app.use (express.json());

// capture body
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

// Import routes
const authRoutes = require('./routes/auth')
const beneficiariesRoutes = require("./routes/beneficiariesRoutes");

// Middelwares
app.use('/api/user', authRoutes)

//Matrix beneficiaries routes
app.use("/", beneficiariesRoutes);

// Port assign
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})


// mongo db conection
const uri = `${process.env.URL}`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

