const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

// Create server
const app = express();

// capture body
app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

// Import routes

const authRoutes = require('./routes/auth')

// Middelwares
app.use('/api/user', authRoutes)

/*
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});*/

// Port assign

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})


// mongo db conection

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@fundacioncrecer.swvdyyt.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))
