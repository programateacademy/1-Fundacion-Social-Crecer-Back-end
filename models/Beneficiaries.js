const mongoose = require("mongoose");

const BeneficiariesSquema = new mongoose.Schema({
    nunDoc: {
        type: Number, 
        required: true
    }, 
    curState: String, 
    joinDate: {
        type: Date, 
        required: true     
    }, 
    exitDate: Date, 
    enterBy: String, 
    reasonForExit: String, 
    otherExitReason: String,
    teacher: {
        type: String, 
        required: true
    }, 
    documentType: {
        type: String,
        required: true
    }, 
    firstName: {
        type: String, 
        required: true, 
        trim: true
    },
    secondName: {
        type: String, 
        required: true, 
        trim: true
    },  
    firstLastName: {
        type: String, 
        required: true, 
        trim: true
    },
    secondtLastName: {
        type: String, 
        required: true, 
        trim: true
    }, 
    birthDate: {
        type: Date, 
        required: true
    }, 
    beneficiaryType: {
        type: String, 
        required: true
    }, 
    gender: {
        type: String, 
        required: true
    },
    birthCountry : {
        type: String, 
        required: true
    }, 
    birthDepartment: {
        type: String, 
        required: true
    },
    birthMunicipality: {
        type: String, 
        required: true
    }, 
    disability: {
        type: String, 
        required: true
    }, 
    certifiedDisability: {
        type: String, 
        required: true
    },    
    entityCertifiesDisability: String,
    disabilityCategory: {
        type: String, 
        required: true
    }, 
    specifiedDisability: String, 
    disabilityRegistryEnrollment: {
        type: String, 
        required: true
    }, 
    requiresAssistance: {
        type: String, 
        required: true
    }, 
    requiresTechSupport: {
        type: String, 
        required: true
    }, 
    hasTechSupport: {
        type: String, 
        required: true
    },
    requiresTherapy: {
        type: String, 
        required: true
    },
    receivesTherapy: {
        type: String, 
        required: true
    },
    hasInterdictionProces: {
        type: String, 
        required: true
    },
    countryOfResidence: {
        type: String, 
        required: true
    },
    residenceDepartment: {
        type: String, 
        required: true
    },
    locationZone: {
        type: String, 
        required: true
    }, 
    localityName: {
        type: String, 
        required: true
    },
    otherZone: String, 
    neighborhood: {
        type: String, 
        required: true
    }, 
    address: {
        type: String, 
        required: true
    },
    primaryPhone: {
        type: Number, 
        required: true
    }, 
    secundaryPhone: {
        type: Number, 
        required: true
    },
    householdStratum: {
        type: Number, 
        required: true
    },
    groupEthnicity: {
        type: String, 
        required: true
    },
    beneficiarySisbenized: {
        type: String, 
        required: true
    },
    sisbenScore: {
        type: String, 
        required: true
    },
    belongsToFamiliesInAction: {
        type: String, 
        required: true
    },
    directlyAffectedByArmedConflict: {
        type: String, 
        required: true
    },
    focusingCriteria: {
        type: String, 
        required: true
    },
    justificationDocumentExists: {
        type: String, 
        required: true
    },
    responsiblePersonType: {
        type: String, 
        required: true
    },
    guardiánDocumentType: {
        type: String, 
        required: true
    },
    guardianDocumentNumber: Number,
    guardianFirstName: {
        type: String, 
        required: true
    },
    guardianSecondName: {
        type: String, 
        required: true
    },
    guardianFirstSurname: {
        type: String, 
        required: true
    },
    guardianSecondSurname: {
        type: String, 
        required: true
    },
    guardianBirthdate: {
        type: Date, 
        required: true
    },
    guardianBirthCountry: {
        type: String, 
        required: true
    },
    guardianBirthDepartment: {
        type: String, 
        required: true
    },
    guardianBirthCity: {
        type: String, 
        required: true
    },
    fatherDocumentType: {
        type: String, 
        required: true
    },
    fatherDocumentNumber: {
        type: String, 
        required: true
    },
    fatherFirstName: {
        type: String, 
        required: true
    },
    fatherSecondName: {
        type: String, 
        required: true
    },
    fatherFirstSurname: {
        type: String, 
        required: true
    },
    fatherSecondSurname: {
        type: String, 
        required: true
    },
    fatherBirthdate: {
        type: Date, 
        required: true
    },
    fatherBirthCountry: {
        type: String, 
        required: true
    },
    fatherBirthDepartment: {
        type: String, 
        required: true
    },
    fatherBirthCity: {
        type: String, 
        required: true
    },
    motherDocumentType: {
        type: String, 
        required: true
    },
    motherDocumentNumber: {
        type: String, 
        required: true
    },
    motherFirstName: {
        type: String, 
        required: true
    },
    motherSecondName: {
        type: String, 
        required: true
    },
    motherFirstSurname: {
        type: String, 
        required: true
    },
    motherSecondSurname: {
        type: String, 
        required: true
    },
    motherBirthdate: {
        type: Date, 
        required: true
    },
    motherBirthCountry: {
        type: String, 
        required: true
    },
    motherBirthDepartment: {
        type: String, 
        required: true
    },
    motherBirthCity: {
        type: String, 
        required: true
    },
    regime: {
        type: String, 
        required: true
    },
    EPS: {
        type: String, 
        required: true
    },
    hasVaccinationCard: {
        type: String, 
        required: true
    },
    vaccinationVerificationDate : {
        type: Date, 
        required: true
    },
    vaccinationCardUpToDate: {
        type: String, 
        required: true
    },
    hasGrowthAndDevelopmentCard: {
        type: String, 
        required: true
    }, 
    growthDevelopmentControlsReceived: {
        type: String, 
        required: true
    }, 
    prematurenessBackground : {
        type: String, 
        required: true
    }, 
    under40Weeks: {
        type: String, 
        required: true
    }, 
    celiacProfile: String, 
    gestationalAgeAtBirth: {
        type: Number, 
        required: true
    }, 
    weightAtBirth: {
        type: Number, 
        required: true
    }, 
    heightAtBirth: {
        type: Number, 
        required: true
    }, 
    exclusivelyBreastfed: {
        type: String, 
        required: true
    }, 
    exclusiveBreastfeedingDuration: {
        type: Number, 
        required: true
    }, 
    totalBreastfeedingDuration: {
        type: Number, 
        required: true
    },
    ticketNumber: {
        type: Number, 
        required: true
    }
}); 

module.exports = mongoose.model("Beneficiaries", BeneficiariesSquema);