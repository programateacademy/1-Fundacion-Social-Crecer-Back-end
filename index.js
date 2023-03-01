const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const verifyToken = require('./routes/verifyToken');
const superAdminRoutes = require('./routes/superAdmin');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');
const beneficiariesRoutes = require("./routes/beneficiariesRoutes");
const changePassword = require('./routes/changePassword');
const codex = require('./routes/codeRecoverAcc');
const sendEmailCode = require('./services/email/sendRecoveryCode');
const recoverCodeMiddle = require('./routes/recoverCodeMiddle');
const verifySuperAdmin = require ('./routes/superAdminMiddleware');


// Create server
require("dotenv").config({ path: "./.env" });

//Definicion del servidor
const app = express();
app.use(express.json());

// capture body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());


// Middelwares
app.use('/api', authRoutes)
// MIDDLEWARE TOKEN
app.use('/api/superadmin', verifyToken,verifySuperAdmin, superAdminRoutes);
app.use('/api/admin', verifyToken, adminRoutes);
app.use("/api", changePassword);
// Routes to generate a code and code validation
app.use('/api/code', recoverCodeMiddle, codex)
app.use('/api/admin/beneficiary', verifyToken, beneficiariesRoutes);

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
    .catch(error => console.log('Error de conexión a MongoDB: ', error))
