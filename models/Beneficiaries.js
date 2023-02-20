const mongoose = require("mongoose");

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
}); 

module.exports = mongoose.model("Beneficiaries", BeneficiariesSquema);