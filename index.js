const bodyParser = require('body-parser');
const express = require('express');

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
