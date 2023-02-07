const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config( {path: "./.env"} ); 

const app = express();

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})

const USER = process.env.USER; 
const PASSWORD = process.env.PASSWORD; 
const DBNAME = process.env.DBNAME; 

const uri = `mongodb+srv://${USER}:${PASSWORD}@${DBNAME}.swvdyyt.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))