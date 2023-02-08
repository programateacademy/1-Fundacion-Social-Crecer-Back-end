const router = require("express").Router();
const prueba = require('../models/Prueba');

router.get("/", (req, res) => { 
    movies.find((err, result) => {
        if(err) throw new Error(err);
    });
});


module.exports = router;