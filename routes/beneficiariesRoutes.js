const router = require("express").Router();
const beneficiaries = require('../models/Beneficiaries');

router.get("/", (req, res) => { 
    beneficiaries.find((err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});

router.post("/", (req, res) => {
    beneficiaries.create(req.body, (err, result) => {
        if (!err) {
            res.send("Beneficiario agregado correctamente");
        } else {
            res.send(err);
        }
    });
});

router.put("/:id", (req, res) => {
    beneficiaries.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, result) => {
        if(err) throw new Error(err);
        res.json(result);
    });
});


module.exports = router;