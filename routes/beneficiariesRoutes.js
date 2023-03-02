const router = require("express").Router();
const { findOneAndUpdate } = require("../models/Beneficiaries");
const beneficiaries = require('../models/Beneficiaries');

router.get("/", async (req, res) => {
    try {
        const beneficiariesRes = await beneficiaries.find();
        res.json(beneficiariesRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

router.post("/", async (req, res)=>{
    try {
        const newBeneficiariesRes = await beneficiaries.create(req.body);
        res.json(newBeneficiariesRes);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const updateBeneficiaries = await beneficiaries.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.json(updateBeneficiaries);
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al actualizar el beneficiario");
    }
});


module.exports = router;