const mongoose = require("mongoose");
const moment = require('moment');

const BeneficiariesSquema = new mongoose.Schema({
    numDoc: {
        type: Number, 
        unique: true
    }, 
    curState: String, 
    joinDate: Date, 
    exitDate: Date, 
    enterBy: String, 
    reasonForExit: String, 
    otherExitReason: String,
    unityName: String,
    duoName: String,
    teachers: Array, 
    documentType: String,  
    firstName: {
        type: String,
        trim: true
    },
    secondName: {
        type: String,
        trim: true
    },
    firstLastName: {
        type: String,
        trim: true
    },
    secondtLastName: {
        type: String,
        trim: true
    },
    birthDate: Date,
    gender: String,
    birthCountry: String,
    birthDepartment: String,
    birthMunicipality:String,
    disability: String,
    certifiedDisability: String,    
    entityCertifiesDisability: String,
    disabilityCategory: String, 
    specifiedDisability: String, 
    disabilityRegistryEnrollment: String, 
    requiresAssistance: String, 
    requiresTechSupport: String,
    hasTechSupport: String,
    requiresTherapy: String, 
    receivesTherapy: String,
    hasInterdictionProcess: String,
    countryOfResidence: String,
    residenceDepartment: String,
    locationZone: String,
    headerType: String,
    localityName: String,
    neighborhood: String,
    foreignZoneName: String, 
    address: String,
    primaryPhone: Number,
    secundaryPhone: Number,
    householdStratum: Number,
    groupEthnicity: String,
    beneficiarySisbenized: String,
    sisbenScore: String,
    belongsToFamiliesInAction: String,
    directlyAffectedByArmedConflict: String,
    focusingCriteria: String,
    justificationDocumentExists: String, 
    guardianPersonType: String,
    guardianDocumentType: String,
    guardianDocumentNumber: Number,
    guardianFirstName: String,
    guardianSecondName: String,
    guardianFirstLastname: String,
    guardianSecondLastname: String,
    guardianBirthdate: Date,
    guardianBirthCountry: String,
    guardianBirthDepartment: String,
    guardianBirthCity: String,
    fatherDocumentType: String,
    fatherDocumentNumber: String,
    fatherFirstName: String,
    fatherSecondName: String,
    fatherFirstLastname: String,
    fatherSecondLastname: String,
    fatherBirthdate: Date,
    fatherBirthCountry: String,
    fatherBirthDepartment: String,
    fatherBirthCity: String,
    motherDocumentType: String,
    motherDocumentNumber: String,
    motherFirstName: String,
    motherSecondName: String,
    motherFirstLastname: String,
    motherSecondLastname: String,
    motherBirthdate: Date,
    motherBirthCountry: String,
    motherBirthDepartment: String,
    motherBirthCity: String,
    regime: String,
    eps: String,
    hasVaccinationCard: String,
    vaccinationVerificationDate: Date,
    vaccinationCardUpToDate: String,
    hasGrowthAndDevelopmentCard: String, 
    growthDevelopmentControlsReceived: String, 
    prematurenessBackground: String,
    under40Weeks: String,
    cefalicProfile: String, 
    gestationalAgeAtBirth: Number, 
    weightAtBirth:  Number,
    heightAtBirth: Number,
    exclusivelyBreastfeeding: String,
    exclusiveBreastfeedingDuration: Number, 
    totalBreastfeedingDuration: Number,
    gestationWeeks: Number,
    ticketNumber: Number,
},
    {
        toJSON: { virtuals: true },
    }
);

// Beneficiary name cocatenation function
BeneficiariesSquema.virtual("fullName").get(function () {
    return `${this.firstName} ${this.secondName} ${this.firstLastName} ${this.secondtLastName}`;
});

// Beneficiary age function
BeneficiariesSquema.virtual("age").get(function () {
    let now = moment();
    let birthDate = moment(this.birthDate);
    let age = {};
    age.years = now.diff(birthDate, 'years');
    birthDate.add(age.years, 'years');
    age.months = now.diff(birthDate, 'months');
    birthDate.add(age.months, 'months');
    age.days = now.diff(birthDate, 'days');
    return (`${age.years} AÑOS ${age.months} MESES ${age.days} DIAS`);
});

//Beneficiary type deduction function
BeneficiariesSquema.virtual("beneficiaryType").get(function () {
    let now = moment();
    let birthDate = moment(this.birthDate);
    const age = {};
    age.months = now.diff(birthDate, 'months');
    return (
    (age.months < 6) ? "MENOR DE 6 MESES" :
    (age.months < 72 && age.months >= 6) ? "NIÑO O NIÑA ENTRE 6 MESES Y 5 AÑOS Y 11 MESES" :
    (age.months > 120) ? "MUJER GESTANTE" : " "
    )
});

//Beneficiary's father's age calculation function
BeneficiariesSquema.virtual("fatherAge").get(function () {
    let now = moment();
    let birthDate = moment(this.fatherBirthdate);
    age = now.diff(birthDate, 'years');
    return age
});

//Beneficiary's mother's age calculation function
BeneficiariesSquema.virtual("motherAge").get(function () {
    let now = moment();
    let birthDate = moment(this.motherBirthdate);
    age = now.diff(birthDate, 'years');
    return age
});


//FALTA FUNCION DE CALCULO DE TIPO DE COMPLEMENTO (INFO PENDIENTE DEL CLIENTE)

module.exports = mongoose.model("Beneficiaries", BeneficiariesSquema);