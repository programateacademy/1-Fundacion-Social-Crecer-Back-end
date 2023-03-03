const mongoose = require("mongoose");
const moment = require('moment');

const BeneficiariesSquema = new mongoose.Schema({
    numDoc: {
        type: String,
        unique: true,
        required: true
    },
    curState: String,
    joinDate: Date,
    exitDate: Date,
    enterBy: String,
    reasonForExit: String,
    otherExitReason: String,
    unityName: String,
    duoName: String,
    teachers: String,
    documentType: String,
    firstName: {
        type: String,
        trim: true,
        required: true
    },
    secondName: {
        type: String,
        trim: true
    },
    firstLastName: {
        type: String,
        trim: true
    },
    secondLastName: {
        type: String,
        trim: true
    },
    birthDate: Date,
    gender: String,
    birthCountry: String,
    birthDepartment: String,
    birthMunicipality: String,
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
    guardianDocumentNumber: String,
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
    vaccinationCardUpToDate: Date,
    hasGrowthAndDevelopmentCard: String,
    growthDevelopmentControlsReceived: String,
    prematurenessBackground: String,
    under40Weeks: String,
    cefalicProfile: String,
    gestationalAgeAtBirth: Number,
    weightAtBirth: Number,
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
    if (this.secondName === undefined && this.secondLastName === undefined) {
        return `${this.firstName} ${this.firstLastName}`;
    }
    if (this.secondName === undefined) {
        return `${this.firstName} ${this.firstLastName} ${this.secondLastName}`;
    }
    if (this.secondLastName === undefined) {
        return `${this.firstName} ${this.secondName} ${this.firstLastName}`;
    }
    if (this.firstName != undefined && this.secondName != undefined && this.firstLastName != undefined && this.secondLastName != undefined) {
        return `${this.firstName} ${this.secondName} ${this.firstLastName} ${this.secondLastName}`;
    }
});

// Beneficiary age in year function
BeneficiariesSquema.virtual("ageYear").get(function () {
    DateBirth = new Date(this.birthDate);
    let now = moment();
    let birthDate = moment(DateBirth);
    years = now.diff(birthDate, 'years');
    return (
        (this.birthDate === null || this.birthDate === undefined || this.birthDate === " " || this.birthDate === "") ? ' ' : `${years}`
    )
});

// Beneficiary age in months function
BeneficiariesSquema.virtual("ageMonth").get(function () {
    DateBirth = new Date(this.birthDate);
    let now = moment();
    let birthDate = moment(DateBirth);
    let age = {};
    age.years = now.diff(birthDate, 'years');
    birthDate.add(age.years, 'years');
    age.months = now.diff(birthDate, 'months');
    return (
        (this.birthDate === null || this.birthDate === undefined || this.birthDate === " " || this.birthDate === "") ? ' ' : `${age.months}`
    )
});

// Beneficiary age in days function
BeneficiariesSquema.virtual("ageDay").get(function () {
    DateBirth = new Date(this.birthDate);
    let now = moment();
    let birthDate = moment(DateBirth);
    let age = {};
    age.years = now.diff(birthDate, 'years');
    birthDate.add(age.years, 'years');
    age.months = now.diff(birthDate, 'months');
    birthDate.add(age.months, 'months');
    age.days = now.diff(birthDate, 'days');
    return (
        (this.birthDate === null || this.birthDate === undefined || this.birthDate === " " || this.birthDate === "") ? ' ' : `${age.days}`
    )
});

// Beneficiary age function
BeneficiariesSquema.virtual("age").get(function () {
    DateBirth = new Date(this.birthDate);
    let now = moment();
    let birthDate = moment(DateBirth);
    let age = {};
    age.years = now.diff(birthDate, 'years');
    birthDate.add(age.years, 'years');
    age.months = now.diff(birthDate, 'months');
    birthDate.add(age.months, 'months');
    age.days = now.diff(birthDate, 'days');
    return (
        (this.birthDate === null || this.birthDate === undefined || this.birthDate === " " || this.birthDate === "") ? ' ' : `${age.years} AÑOS ${age.months} MESES ${age.days} DIAS`
    )
});

//Beneficiary type deduction function
BeneficiariesSquema.virtual("beneficiaryType").get(function () {
    DateBirth = new Date(this.birthDate);
    let now = moment();
    let birthDate = moment(DateBirth);
    const age = {};
    age.months = now.diff(birthDate, 'months');
    return (
        (this.birthDate === null || this.birthDate === undefined || this.birthDate === " " || this.birthDate === "") ? " " :
            (age.months < 6) ? "MENOR DE 6 MESES" :
                (age.months < 72 && age.months >= 6) ? "NIÑO O NIÑA ENTRE 6 MESES Y 5 AÑOS Y 11 MESES" :
                    (age.months > 120) ? "MUJER GESTANTE" : " "
    )
});

//Beneficiary's father's age calculation function
BeneficiariesSquema.virtual("fatherAge").get(function () {
    DateBirth = new Date(this.fatherBirthdate);
    let now = moment();
    let birthDate = moment(DateBirth);
    age = now.diff(birthDate, 'years');
    return (
        (this.fatherBirthdate === null || this.fatherBirthdate === undefined || this.fatherBirthdate === " " || this.fatherBirthdate === "") ? ' ' : `${age}`
    )
});

//Beneficiary's mother's age calculation function
BeneficiariesSquema.virtual("motherAge").get(function () {
    DateBirth = new Date(this.motherBirthdate);
    let now = moment();
    let birthDate = moment(DateBirth);
    age = now.diff(birthDate, 'years');
    return (
        (this.motherBirthdate === null || this.motherBirthdate === undefined || this.motherBirthdate === " " || this.motherBirthdate === "") ? ' ' : `${age}`
    )
});

//Beneficiary's complement function
BeneficiariesSquema.virtual("beneficiaryComplement").get(function () {
    DateBirth = new Date(this.birthDate);
    let now = moment();
    let birthDate = moment(DateBirth);
    const age = {};
    age.months = now.diff(birthDate, 'months');
    return (
        (this.birthDate === null || this.birthDate === undefined || this.birthDate === " " || this.birthDate === "") ? " " :
            (age.months < 6) ? "MADRES GESTANTES Y MADRES LACTANTES" :
                (age.months < 12 && age.months >= 6) ? "NIÑOS Y NIÑAS DE 6 MESES A 11 MESES 29 DIAS" :
                    (age.months < 36 && age.months >= 12) ? "NIÑOS Y NIÑAS MAYORES DE 1 AÑO" :
                        (age.months >= 36) ? "MAYORES A 3 AÑOS" : " "
    )
});

module.exports = mongoose.model("Beneficiaries", BeneficiariesSquema);