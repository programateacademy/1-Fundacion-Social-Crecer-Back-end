const mongoose = require("mongoose");

const BeneficiariesSquema = new mongoose.Schema({
    nunDoc: {
        type: Number, 
        unique: true
    }, 
    curState: String, 
    joinDate: Date, 
    exitDate: Date, 
    enterBy: String, 
    reasonForExit: String, 
    otherExitReason: String,
    teacher: String, 
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
    secondtLastName: String, 
    birthDate: Date, 
    years: Number, 
    months: Number, 
    days:  Number,
    beneficiaryType: String, 
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
    hasInterdictionProces: String,
    countryOfResidence: String,
    residenceDepartment: String,
    locationZone: String,
    localityName: String,
    otherZone: String, 
    neighborhood: String,
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
    responsiblePersonType: String,
    guardiánDocumentType: String,
    guardianDocumentNumber: Number,
    guardianFirstName: String,
    guardianSecondName: String,
    guardianFirstSurname: String,
    guardianSecondSurname: String,
    guardianBirthdate: Date,
    guardianBirthCountry: String,
    guardianBirthDepartment: String,
    guardianBirthCity: String,
    fatherDocumentType: String,
    fatherDocumentNumber: String,
    fatherFirstName: String,
    fatherSecondName: String,
    fatherFirstSurname: String,
    fatherSecondSurname: String,
    fatherBirthdate: Date,
    fatherBirthCountry: String,
    fatherBirthDepartment: String,
    fatherBirthCity: String,
    motherDocumentType: String,
    motherDocumentNumber: String,
    motherFirstName: String,
    motherSecondName: String,
    motherFirstSurname: String,
    motherSecondSurname: String,
    motherBirthdate: Date,
    motherBirthCountry: String,
    motherBirthDepartment: String,
    motherBirthCity: String,
    regime: String,
    EPS: String,
    hasVaccinationCard: String,
    vaccinationVerificationDate: Date,
    vaccinationCardUpToDate: String,
    hasGrowthAndDevelopmentCard: String, 
    growthDevelopmentControlsReceived: String, 
    prematurenessBackground: String,
    under40Weeks: String,
    celiacProfile: String, 
    gestationalAgeAtBirth: Number, 
    weightAtBirth:  Number,
    heightAtBirth: Number,
    exclusivelyBreastfed: String,
    exclusiveBreastfeedingDuration: Number, 
    totalBreastfeedingDuration: Number,
    ticketNumber: Number,
}); 

module.exports = mongoose.model("Beneficiaries", BeneficiariesSquema);