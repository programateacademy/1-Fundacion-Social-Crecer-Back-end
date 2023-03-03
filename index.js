const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const verifyToken = require('./routes/verifyToken');
const adminRoutes = require('./routes/admin');
const superAdminRoutes = require('./routes/superAdmin');
const formapiRoutes = require('./routes/formapi');
const authRoutes = require('./routes/auth');
const beneficiariesRoutes = require("./routes/beneficiariesRoutes");
const changePassword = require('./routes/changePassword');
// Generate and validation of superadmin recovery account code
const codex = require('./routes/codeRecoverAcc');
const sendEmailCode = require('./services/email/sendRecoveryCode');
const recoverCodeMiddle = require('./routes/recoverCodeMiddle');
const verifySuperAdmin = require('./routes/superAdminMiddleware');
const verifySuperAdminPassword = require('./routes/verifySuperAdminPassword')

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
app.use('/api/superadmin', verifyToken, verifySuperAdmin, superAdminRoutes);
app.use('/api/formapi', formapiRoutes);
// Route for superadmin can change admin info 
app.use('/api/superadmin/verify-password', verifyToken, verifySuperAdmin, verifySuperAdminPassword)
app.use('/api/admin', verifyToken, adminRoutes);
app.use("/api/change-password", verifyToken, verifySuperAdmin, changePassword);
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
